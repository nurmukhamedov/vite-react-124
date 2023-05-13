import { useState, useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    MULTIPLY: 'multiply'
}

function render(state, action) {
    console.log(action.type);
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        case ACTIONS.MULTIPLY:
            return { count: state.count * 2 }
        default:
            return state;
    }
}


const ExampleUseReducer = () => {

    const [state, dispatch] = useReducer(render, { count: 0 });
    const [count, setCount] = useState(0);

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    }
    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            {count}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <br />
            {state.count}
            <h2>Example usereducer</h2>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Minus</button>
            <button onClick={() => dispatch({ type: ACTIONS.MULTIPLY })}>Multiply</button>
        </div>
    )
}

export default ExampleUseReducer