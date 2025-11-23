import React from 'react';
//import  {Counter}  from './store/Counter.jsx';
import {InputComponent} from './components/app_input';
import { ButtonComponentDecrement} from './components/app_button';
import { ButtonComponentIncrement } from './components/app_button';
import { ButtonComponentOk } from './components/app_button';
import { CounterComponent } from './components/app_counter';

function App() {
  return (
    <div>
      <h1>Hello World! React is working!</h1>
      {/* <Counter /> */}
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
      <ButtonComponentIncrement/>
      <CounterComponent count={5}/>
      <ButtonComponentDecrement/>
      </div>
      <div style={{marginTop: '10px'}}>
      <InputComponent/>
      <ButtonComponentOk/>
      </div>
    </div>
  );
}

export default App;

