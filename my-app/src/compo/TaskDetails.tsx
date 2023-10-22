import { useParams } from "react-router-dom";
import "../style/TaskDetails.css";
import { Task } from "./TaskList";

interface TaskDetailsProps {
  tasksList: Task[];
}

const TaskDetails = ({ tasksList }: TaskDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const task = tasksList.find((task) => task.id === parseInt(id!));

  if (!task) {
    return <div className="error">Task not found</div>;
  }

  return (
    <div className="task-details">
      <h2 className="task-details-title">TASK : {task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};
export default TaskDetails;
