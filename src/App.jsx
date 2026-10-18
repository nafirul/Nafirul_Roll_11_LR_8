
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Complete / Incomplete Task
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          My Todo List
        </h1>

        <p className="text-gray-500 mb-5">
          Keep Track your daily tasks
        </p>

        <div className="flex gap-2 mb-5">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
            placeholder="Enter a new Task"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-blue-500 outline-none focus:ring-2 flex-1"
          />

          <button
            onClick={addTask}
            className="bg-slate-600 text-white px-6 py-2 rounded-full hover:bg-slate-800"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(item.id)}
                className="h-4 w-4 accent-blue-600"
              />

              <span
                className={`flex-1 break-words ${
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {item.text}
              </span>

              <button
                onClick={() => deleteTask(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        
      </div>
    </div>
  );
};

export default App;
