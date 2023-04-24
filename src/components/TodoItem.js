import React from "react";

const TodoItem = (props) => {
    const data = props;
    console.log(data);

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/>{data.data.text}
                </label>
            </div>
        </li>
    );
}

export default TodoItem;