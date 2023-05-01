import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/TodoList.css";
import { addTodo, deleteTo, removeAll } from "./actions/index";

const TodoLanding = () => {
  const [inputData, setinputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <div className="todomain">
      <div className="mainContainer">
        Add your list here
        <input
          className=" todolistinputbox"
          placeholder="your items"
          value={inputData}
          onChange={(event) => setinputData(event.target.value)}
        ></input>
        <button
          className="add-todo-item"
          onClick={() => {
            if (inputData !== '') dispatch(addTodo(inputData));
            setinputData("");
          }}
        >
          Add Item
        </button>
        <div className="show-item">
          <div className="each-item">
            {list.map((elem) => {
              return (
                <div>
                  {elem.data}

                  <button
                    className="delete-todo-item"
                    key={elem.id}
                    onClick={() => {
                      dispatch(deleteTo(elem.id));
                    }}
                  >
                    delete Item
                  </button>
                </div>
              );
            })}
          </div>
          <button className="remove-all" onClick={() => dispatch(removeAll())}>
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoLanding;
