import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  const dialog = useRef();
  function handleClick() {
    if (enteredTask.trim() === "") {
      dialog.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">Please enter value</Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-900"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
