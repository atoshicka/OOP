import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import React, {useState} from 'react'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(0);
  const handleAdd = () => {
    const number = Number(inputValue)
    dispatch(incrementByAmount(number))
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
          onClick={handleAdd}
          >ok</button>
      </div>
    </div>
  )
}