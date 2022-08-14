import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  function showAlert() {
    alert(task.id);
  }

  return (
    <div className="bg-gray-800 text-white m-2 p-4 rounded-md shadow">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500  text-sm my-3">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
