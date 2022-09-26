import React, { useEffect, useRef, useState } from "react";

import Input from "../../UI/Input/Input";

const ToDoListItem = ({ ch, cmp, dh, id, sh, txt }) => {
  const [disabled, setDisabled] = useState(true);

  const ipt = useRef();

  useEffect(() => {
    if (!disabled) {
      ipt.current.setSelectionRange(
        ipt.current.value.length,
        ipt.current.value.length
      );
      ipt.current.focus();
    }
  }, [disabled]);

  const editHandler = () => {
    setDisabled(false);
  };

  const saveHandler = () => {
    setDisabled(true);
    sh(id, ipt.current.value);
  };

  const deleteHandler = () => {
    dh(id);
  };

  const checkedHandler = () => {
    if (disabled) {
      ch(id);
    }
  };

  return (
    <div className="todo-item">
      <div onClick={checkedHandler}>
        <Input
          rf={ipt}
          dis={disabled}
          style={`todo-input ${cmp ? "checked" : null}`}
          val={txt}
        />
      </div>
      <div className="todo-actions">
        {cmp && (
          <div onClick={checkedHandler}>
            <i className="fa-regular fa-circle-check todo-icon todo-save"></i>
          </div>
        )}

        {disabled && !cmp && (
          <div onClick={editHandler}>
            <i className="fa-solid fa-pen todo-icon todo-edit"></i>
          </div>
        )}

        {!disabled && !cmp && (
          <div onClick={saveHandler}>
            <i className="fa-solid fa-floppy-disk todo-icon todo-save"></i>
          </div>
        )}

        {!cmp && (
          <div onClick={deleteHandler}>
            <i className="fa-regular fa-trash-can todo-icon todo-delete"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoListItem;
