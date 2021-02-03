/**
* @file ListDisplay component
* @date 2021-02-02
* @author 
* @lastModify  2021-02-02
*/
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ItemTodo from './ItemTodo'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
import { ACTION_TYPE, IAction, IState, ITodo } from '../../../Config/Components/type';
interface Iprops {
    todoList: ITodo[],
    checkTodo: (id: number) => void
}
/* <------------------------------------ **** INTERFACE END **** ------------------------------------ */
/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const ListDisplay = ({ todoList, checkTodo }: Iprops): JSX.Element => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    /************* This section will include this component HOOK function *************/
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** PARAMETER START **** ------------------------------------ */
    /************* This section will include this component parameter *************/
    /* <------------------------------------ **** PARAMETER END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    /************* This section will include this component general function *************/
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (
        <Row>
            {
                todoList && todoList.map((todo: ITodo) => {
                    return (
                        <ItemTodo todo={todo} key={todo.id} checkTodo={checkTodo} />
                    )
                })
            }
        </Row>
    );
};
export default ListDisplay;
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */