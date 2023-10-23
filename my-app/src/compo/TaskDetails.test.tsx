import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TaskDetails from "./TaskDetails";

describe("TaskDetails component", () => {
  const tasksList = [
    { id: 1, title: "Task 1", description: "Description 1" },
    { id: 2, title: "Task 2", description: "Description 2" },
  ];

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={[`/tasks/1`]}>
      <Routes>
        <Route path="/tasks/:id">
          <TaskDetails tasksList={tasksList} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  it("renders the task details based on the given task ID", () => {
    const taskId = "1";
    const task = tasksList.find((task) => task.id === parseInt(taskId))!;
    render(
      <MemoryRouter initialEntries={[`/task/${taskId}`]}>
        <Routes>
          <Route
            path="/task/:id"
            element={<TaskDetails tasksList={tasksList} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("taskDetailsTitle")).toHaveTextContent(
      `TASK : ${task.title}`
    );
    expect(screen.getByText(task.description!)).toBeInTheDocument();
  });

  it("renders error message for an invalid task id", () => {
    const taskId = "3";
    render(
      <MemoryRouter initialEntries={[`/task/${taskId}`]}>
        <Routes>
          <Route
            path="/task/:id"
            element={<TaskDetails tasksList={tasksList} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Task not found")).toBeInTheDocument();
  });
});
