import React from "react";

const TodoList = (props) => {
    const {title, items} = props;

    return (
        <div className="todolist">
            <h1>{title.toUpperCase()}</h1>
            {items.map(item => (
                <li ket={item.id} className="ui-state-default">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value=""/>{item.text}
                        </label>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoList;