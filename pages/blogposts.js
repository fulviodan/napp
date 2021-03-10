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
  return _data.map((el, i) => (
    <Box onClick={(e) => setData([..._data, 2])} key={i}>
      {el}
    </Box>
  ))
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
      r="50"
      fill="red"
    />
  )
}

const init = { a: null, b: null, c: null, d: null, e: null }

export default function Home() {
  const [state, dispatch] = useReducer(reducer, init)

  return (
    <svg width="800" height="800" onDoubleClick={(e) => {}}>
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
  )
}
