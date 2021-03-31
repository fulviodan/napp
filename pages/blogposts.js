import { Box, Flex, forwardRef, chakra } from '@chakra-ui/react'
import { useEffect, useReducer, useRef, useState } from 'react'
import { DATA } from '../scripts/data'
import { motion } from 'framer-motion'

const MotionBox = chakra(motion.div)

export function List({ data }) {
  const [_data, setData] = useState([])
  useEffect(() => {
    setData(data)
  }, [data])
  return (
    <motion.ul animate="hidden">
      {_data.map((el, i) => (
        <motion.li onClick={(e) => setData([..._data, 2])} key={i}>
          {el}
        </motion.li>
      ))}
    </motion.ul>
  )
}

function reducer(state = init, action) {
  const { x, y } = state[action.id] || { x: 0, y: 0 }
  const { x: dx, y: dy } = action.delta
  return { ...state, [action.id]: { x: x + dx, y: y + dy } }
}

export function Edge({ start, end, state }) {
  const { x, y } = state[start] ? state[start] : { x: 0, y: 0 }
  const { x: ex, y: ey } = state[end] ? state[end] : { x: 0, y: 0 }
  console.log(x, y, ex, ey)
  return <path d={`M${x} ${y} L${ex} ${ey} Z`} stroke="black" />
}

export function Node({ id, x, y, dispatch }) {
  return (
    <motion.circle
      drag={true}
      dragMomentum={false}
      onDrag={(event, info) => {
        dispatch({ id, delta: info.delta })
      }}
      cx={x}
      cy={y}
      r="20"
      fill="red"
    />
  )
}

const init = { a: null, b: null, c: null, d: null, e: null }

export default function Home() {
  const [state, dispatch] = useReducer(reducer, init)

  return (
    <Flex align="center" h="100vh">
      <svg
        width="1000"
        height="600"
        onDoubleClick={(e) => {
          8
        }}
        style={{ background: '#fafafa', margin: 'auto' }}
      >
        <Edge start="a" end="b" state={state} />
        <Edge start="b" end="c" state={state} />
        <Edge start="a" end="d" state={state} />
        <Edge start="b" end="e" state={state} />
        <Edge start="b" end="d" state={state} />
        <Edge start="c" end="d" state={state} />

        {Object.entries(state).map(([k, v]) => (
          <Node id={k} x={0} y={0} key={k} dispatch={dispatch} />
        ))}
      </svg>
    </Flex>
  )
}
