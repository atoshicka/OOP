import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../store/counterSlice';

export function InputComponent({value, onChange, placeholder = ""}) {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.counter.inputValue)
    
    return (
        <input
            value={value}
            onChange={(e) => dispatch(setInputValue(e.target.value))}
            placeholder={placeholder}
        >
        </input>
    );
}

