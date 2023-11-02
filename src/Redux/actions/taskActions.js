import { ADD_TASK, COMPLETE_TASK, EDIT_TASK } from "../actionTypes/actionTypes"

export const addTask = (task) => {
  return {
    type : ADD_TASK,
    payload : task
  }
}

export const completeTask = (task) => {
    return {
      type : COMPLETE_TASK,
      payload : task
    }
  }

  export const editTask = (task) => {
    return {
      type : EDIT_TASK,
      payload : task 
    }
  }