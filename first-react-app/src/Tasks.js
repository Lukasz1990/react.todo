import React from "react";

const Tasks = ({ tasks, DeleteTask }) => {
  const TasksList = tasks.length ? (
    tasks.map(task => {
      return (
        <div className="collection-item" key={task.id}>
          <span
            onClick={() => {
              DeleteTask(task.id);
            }}
            className="center"
          >
            {task.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">All tasks are gone!</p>
  );

  return (
    <div className="tasks collection center darken-1 z-depth-4">
      {TasksList}
    </div>
  );
};

export default Tasks;
