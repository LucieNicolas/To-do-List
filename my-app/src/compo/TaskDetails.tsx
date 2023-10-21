import { Task } from "./TaskList";

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails = ({ task }: TaskDetailsProps) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetails;
