import React from "react";

// const Input = () => {
//     return (
//         <input type="text" className="form-control add-todo" placeholder="Add new thing..."/>
//     );
// }

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ' '
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return <input type="text" className="form-control add-todo" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Add new thing..."/>
    }
}

export default Input