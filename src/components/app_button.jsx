import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/counterSlice';
import '../index.scss'

export const ButtonComponentIncrement = () => {
    const dispatch = useDispatch();
    return (
        <button
            className="button button-increment"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}>
            Increment
        </button>
    );
}

export const ButtonComponentDecrement = () => {
    const dispatch = useDispatch();
    return (
        <button
            className="button button-decrement"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
            Decrement
        </button>
    );
}

export const ButtonComponentOk = () => {
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
            className="button button-ok"
            onClick={handleAdd}>
            OK
        </button>
    );
}