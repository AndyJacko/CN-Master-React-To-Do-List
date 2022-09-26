import React from "react";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const AddToDo = ({ osh, rf }) => {
  return (
    <form id="add-todo" onSubmit={osh}>
      <Input dis={false} rf={rf} ph="Add New To-Do" />
      <Button txt="Add To-Do" />
    </form>
  );
};

export default AddToDo;
