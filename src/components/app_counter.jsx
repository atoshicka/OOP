import React from 'react';
import { useSelector } from 'react-redux';

export const CounterComponent = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <span className="counter-value">{count}</span>
    );
}