import { useState, useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useContext is a hook that allows us to access the value of the context.
  // It returns the value of the context.
  const { createTask } = useContext(TaskContext);

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (title != "" && description != "") {
      createTask(title, description);
      setTitle("");
      setDescription("");
      return;
    }

    alert("Por favor, llena los espacios en blanco");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handlerSubmit}
        className="bg-slate-900 p-10 mb-4 rounded-xl"
      >
        <h1 className="text-2xl font-bold mb-3 text-white">Tareas</h1>

        <input
          className="bg-slate-300 p-3 rounded-lg shadow-lg w-full outline-none border-none placeholder:text-indigo-300 placeholder:font-bold"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 rounded-lg shadow-lg w-full my-3 outline-none border-none placeholder:text-indigo-300 placeholder:font-bold"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escribe la descripcion"
          value={description}
        ></textarea>
        <button
          className="bg-indigo-500 px-4 py-2 hover:bg-indigo-400 rounded-md font-bold"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
