import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, onClick }) => {
  return (
    <li>
      {text} <button onClick={onClick}>delete</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(actionCreators.delToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
