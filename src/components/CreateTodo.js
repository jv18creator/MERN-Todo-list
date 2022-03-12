import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      console.log("data", data);
      navigate("/");
    },
    [navigate]
  );

  return (
    <div>
      <h3>Create Todo Item</h3>
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="todo">Todo</label>
        <input {...register("todo")} type={"text"} name="todo" />
        <button type="submit">Create todo</button>
      </form>
      {/* <TodoForm onSubmit={onSubmit} /> */}
    </div>
  );
};

export default CreateTodo;
