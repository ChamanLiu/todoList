/**
* @file ItemTodo component
* @date 2021-02-02
* @author 
* @lastModify  2021-02-02
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'antd';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
import { ACTION_TYPE, IAction, IState, ITodo } from '../../../Config/Components/type';
interface Iprops {
    todo: ITodo,
    checkTodo: (id: number) => void,
    updateTodo: (todo: ITodo) => void
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ItemTodo = ({ todo, checkTodo, updateTodo }: Iprops): JSX.Element => {

    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    const [inputState, setInputState] = useState(todo);

    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    const inputRef = useRef<HTMLInputElement>(null)
    const updateItem = (): void => {
        const inputUpdateVal: string = inputRef.current?.value as string
        setInputState({
            id: todo.id,
            content: inputUpdateVal,
            completed: todo.completed
        })
        updateTodo(
            {
                id: todo.id,
                content: inputUpdateVal,
                completed: todo.completed
            }
        )
    }
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    //双击 可以进行更新元素
    return (
        <Row>
            <div>
                <input type="checkbox" checked={todo.completed} onChange={() => checkTodo(todo.id)} />
                <input type='text' ref={inputRef} value={inputState.content} onChange={() => updateItem()} />
            </div>
        </Row>
    );
};
export default ItemTodo;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */