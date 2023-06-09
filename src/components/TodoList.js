import React from "react";
import TodoItem from "./TodoItem";
import Header from './Header';
import Footer from './Footer'

const TodoList = (props) => {
    const {title, items} = props;
    const left = items.length;

    return (
        <div className="todolist">
            <Header title={title}/>
            <ul className="list-unstyled">
                {items.map(item => (
                    <TodoItem key={item.id} data={item} />
                ))}
            </ul>
            <Footer left={left}/>
        </div>
    )
}

export default TodoList;