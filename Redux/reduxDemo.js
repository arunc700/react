import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Login } from './Actions/myAction'

const ReduxDemo = () => {

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.logged);
    const dispatch = useDispatch();

    const message = "Hello user";

    return (
        <div className="container">
            <h2>Hello Redux</h2>


            <button onClick={() => dispatch(Increment())}>+</button>
            <button onClick={() => dispatch(Decrement())}>-</button>
            <br />
            <button onClick={() => dispatch(Login(message))}>Login</button>


            <p>Counter : {counter}</p>
            <p>isLogged : {isLogged.length > 0 ? isLogged : "falasdasdse"}</p>
        </div>
    );
}

export default ReduxDemo;