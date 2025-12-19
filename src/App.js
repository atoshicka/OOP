import React from 'react';
import {InputComponent} from './components/app_input';
import { ButtonComponentDecrement} from './components/app_button';
import { ButtonComponentIncrement } from './components/app_button';
import { ButtonComponentOk } from './components/app_button';
import { CounterComponent } from './components/app_counter';
import { PeopleList } from './components/app_array';
import './index.scss';
import { StringDisplay } from './practic';

export const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Hello World! React is working!</h1>
      
      <div className="counter-section">
        <ButtonComponentIncrement/>
        <CounterComponent/>
        <ButtonComponentDecrement/>
      </div>
      
      <div className="input-section">
        <InputComponent/>
        <ButtonComponentOk/>
      </div>
      
      <PeopleList />
    </div>
  );
}

export const OneTask = () => {
  return (
    <div>
    <StringDisplay/>
    </div>
  );
}