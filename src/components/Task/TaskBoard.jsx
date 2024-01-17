import SearchTask from "./SearchTask";
import TaskList from "./TaskList";
import TaskActions from "./TaskActions";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }

    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal onSave={handleAddTask} taskToUpdate={taskToUpdate} />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div
          className="rounded-xl border border-[rgba(206,206,206,0.12)]
         bg-[#1D212B] px-6 py-8 md:px-9 md:py-16"
        >
          <TaskActions onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
