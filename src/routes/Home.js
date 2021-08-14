import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} />
        <input type="submit" value="할일" />
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Home);
