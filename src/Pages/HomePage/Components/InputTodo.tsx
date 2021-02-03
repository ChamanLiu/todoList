/**
* @file InputTodo component
* @date 2021-02-02
* @author 
* @lastModify  2021-02-02
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useRef } from 'react';
import { Row, Col } from 'antd';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
import { ACTION_TYPE, IAction, IState, ITodo } from '../../../Config/Components/type';
interface Iprops {
    addTodo: (todo: ITodo) => void,
    removeTodo: (todos: ITodo[]) => void,
    todoList: ITodo[];
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const InputTodo = ({ addTodo, removeTodo, todoList }: Iprops): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const inputRef = useRef<HTMLInputElement>(null)
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    const addItem = (): void => {
        const val: string = inputRef.current!.value
        if (val.length) {
            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            })
            inputRef.current!.value = ''
        }
    }
    const removeItem = (): void => {
        removeTodo(
            todoList
        )
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            <input type='text' ref={inputRef}></input>
            <button onClick={addItem}>添加</button>
            <button onClick={removeItem}>移除</button>
        </Row>
    );
};
export default InputTodo;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */