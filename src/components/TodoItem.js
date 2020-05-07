import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />{" "}
        <div
          style={{
            flexGrow: 1,
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            paddingLeft: "10px",
          }}
        >
          {title}
        </div>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
          x
        </button>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  width: "30px",
  height: "30px",
};

export default TodoItem;
