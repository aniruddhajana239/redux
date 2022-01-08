import React from 'react'
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { IncNumber, DecNumber,Multi, Devi } from './components/action/index';

function App() {
  const myState = useSelector((state) => state.ChangeNumber);
  const myState2 = useSelector((state) => state.ChangeNumber2);
  const dispatch = useDispatch();
  return (
    <>
      <div className='calculation_wraper'>
      <div className='inc-dec'>
        <span>{myState}</span>
        <div className='btn-wrap'>
          <button onClick={()=>dispatch(IncNumber())}>Increment</button>
          <button onClick={()=>dispatch(DecNumber())}>Decrement</button>
        </div>
      </div>
      <div className='multi-devide'>
        <span>{myState2}</span>
        <div className='btn-wrap'>
          <button onClick={()=>dispatch(Multi())}>Multiplication</button>
          <button onClick={()=>dispatch(Devi())}>Division</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
