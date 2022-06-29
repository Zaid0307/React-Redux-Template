import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {create, edit, remove, toggleComplete} from './todoSlice'
import { BsCheckLg } from "react-icons/bs";

const Todo = () => {
    const [inputText, setInputText] = useState("");
    const [editText, setEditText] = useState("");
    const [editing, setEditing] = useState(-1)
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

const handleSubmit = event => {
    event.preventDefault();

    dispatch(create(inputText));

    setInputText('');
};

const handleDelete = (id) => () => {
    dispatch(remove(id));
};

const handleToggle = id => () =>{
    dispatch(toggleComplete(id))
};

const handleEdit = (id, description) => () => {
    setEditing(id);
    setEditText(description);
};

const handleUpdate = event => {
    event.preventDefault();

    dispatch(edit({id: editing, description: editText}))

    setEditing(-1);
    setEditing("");
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={event => setInputText(event.target.value)}
                value={inputText}
                />
                <button type="submit">Add</button>
            </form>

{/* Mapping the UseState information */}
            {todos.map(todo => (
                <div key={todo.id}>

{/* Create an if else Statment and the edit function */}                   
                    {editing === todo.id ? (
                        <form onSubmit={handleUpdate}>
                            <input onChange={event => setEditText(event.target.value)}
                            value={editText}
                            />
                            <button type="submit">Update</button>
                        </form>
                    ) : 
                    <>

                    {todo.description}
{/* id todo ist Completed, show Done, if not show nothing */}
                    {todo.isComplete ? <> <BsCheckLg /> </>: "" } 
                    <button onClick={handleDelete(todo.id)}> Delete</button>
                    <button onClick={handleToggle(todo.id)}> Mark as Done!</button>
                    <button onClick={handleEdit(todo.id, todo.description)}> Edit</button>
                </>
            }

                </div>
            ))}
        </div>
    )
};

export default Todo;