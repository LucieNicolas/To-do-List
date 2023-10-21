import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TaskList";

describe("test toDoList", () => {
  const tasksList = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      isCompleted: false,
    },
  ];

  it("will renders the correct number of tasks", () => {
    const { getAllByTestId } = render(
      <TodoList tasksList={tasksList} handleIsCompleted={jest.fn()} />
    );
    const tasks = getAllByTestId("task");
    expect(tasks.length).toBe(tasksList.length);
  });

  it("handles task completion correctly", async () => {
    const mockHandleIsCompleted = jest.fn();
    const tasksList = [
      {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        isCompleted: false,
      },
    ];

    const { getByTestId } = render(
      <TodoList
        tasksList={tasksList}
        handleIsCompleted={mockHandleIsCompleted}
      />
    );
    const completedBtn = getByTestId("completedBtn");
    expect(completedBtn).toBeEnabled();

    await userEvent.click(completedBtn);
    expect(mockHandleIsCompleted).toHaveBeenCalled();
  });
});
