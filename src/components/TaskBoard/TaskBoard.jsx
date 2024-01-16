import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* <!-- Search Box --> */}
        <SearchTask />
        {/* <!-- Search Box Ends --> */}
        <TaskList />
      </div>
    </section>
  );
};

export default TaskBoard;
