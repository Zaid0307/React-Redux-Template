import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        //create an todo with NanoId
        create: (state, action) => {
            const {payload} = action;

            state.push({
                id: nanoid(),
                description: payload,
                isComplete: false
            });
//if create an other todo, nanoId will create an new ID
nanoid()
        },
        //edit Todo via Nanoid and discription
        edit: (state,action) => {
            const {id, description} = action.payload;

            const todoEdit = state.find(todo => todo.id === id)

            if (todoEdit) {
                todoEdit.description = description;
            }
        },
        toggleComplete: (state, action) => {
            const {payload} = action;

            const todoToggle = state.find(todo => todo.id === payload);

            if (todoToggle) {
                todoToggle.isComplete = !todoToggle.isComplete;
            }
        },
        //delete an created todo
        remove: (state, action) => {
            const {payload} = action;

            const index = state.findIndex(todo => todo.id === payload);

            if (index !== -1) {
            state.splice(index, 1);
            }

        }
    }
});

//export all Action that are createt on top below reducers
export const {create, edit, toggleComplete, remove} = slice.actions;

export default slice.reducer;