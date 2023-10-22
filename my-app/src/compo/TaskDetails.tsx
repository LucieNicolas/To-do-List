import { useParams } from "react-router-dom";
import { Task } from "./TaskList";

interface TaskDetailsProps {
  tasksList: Task[];
}

const TaskDetails = ({ tasksList }: TaskDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const task = tasksList.find((task) => task.id === parseInt(id!));

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};
export default TaskDetails;
