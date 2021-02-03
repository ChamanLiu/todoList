/**
* @file Todolist component
* @date 2021-02-02
* @author 
* @lastModify  2021-02-02
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useCallback, useEffect, useState, useReducer } from 'react'
import { Row, Col } from 'antd';
import InputTodo from './InputTodo'
import ListDisplay from './ListDisplay'
import { todoReducer } from '../../../Store/moduleA/reducer'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
import { ACTION_TYPE, IAction, IState, ITodo } from '../../../Config/Components/type';
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Todolist = (): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const initalState: IState = {
        todoList: []
    }
    const [state, dispatch] = useReducer(todoReducer, initalState, init)
    //didmount
    useEffect(() => {
        const todoList = JSON.parse(localStorage.getItem('todolist') || '[]')
        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })

    }, [])
    //update
    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(state.todoList))
    }, [state.todoList])

    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const addTodo = (todo: ITodo): void => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }
    const removeTodo = (todos: ITodo[]): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: todos
        })
    }
    const checkTodo = (id: number): void => {
        dispatch({
            type: ACTION_TYPE.CHECK_TODO,
            payload: id
        })
    }
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    function init(initTodoList: IState): IState {
        return initTodoList
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <div className='Todolist' style={{ margin: '0 auto', width: '500px' }}>
                <h1>Todolist</h1>
                <InputTodo addTodo={addTodo} todoList={state.todoList} removeTodo={removeTodo} />
                <ListDisplay todoList={state.todoList} checkTodo={checkTodo} />
            </div>
        </Row>
    );
};
export default Todolist;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */