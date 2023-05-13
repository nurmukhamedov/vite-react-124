import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo'
}

function reducer(todos, action) {


    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newToDo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            })
        default:
            return todos;
    }
}

function newToDo(name) {
    return { id: Date.now(), name: name, complete: false }
}


const ToDoExample = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
        setName('');

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
            {
                todos.map((todo) => (
                    <div key={todo.id}><span className={todo.complete ? 'darker' : 'dark'}>{todo.name}</span>
                        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoExample