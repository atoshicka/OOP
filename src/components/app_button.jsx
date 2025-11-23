import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from '../store/counterSlice';
import { incrementByAmount, setInputValue} from '../store/counterSlice';

export function ButtonComponentIncrement() {
    const dispatch = useDispatch();
    return (
         <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                  Increment
                </button>
        </div>
    );
}

export function ButtonComponentDecrement() {
    const dispatch = useDispatch();
    return (
         <div>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                  Decrement
                </button>
        </div>
    );
}

export function ButtonComponentOk() {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.counter.inputValue);
    const handleAdd = () => {
        const number = Number(inputValue);
        if (!isNaN(number)) {
            dispatch(incrementByAmount(number));
        }
    };
    return (
        <button
          onClick={handleAdd}
          >ok</button>
    );
}

