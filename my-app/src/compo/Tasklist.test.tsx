import { render } from "@testing-library/react";
import TaskList from "./TaskList";

const mockHandleIsCompleted = jest.fn();

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
      <TaskList
        tasksList={tasksList}
        // handleIsCompleted={mockHandleIsCompleted}
      />
    );
    const tasks = getAllByTestId("task");
    expect(tasks.length).toBe(tasksList.length);
    // expect(mockHandleIsCompleted).not.toHaveBeenCalled();
  });

  //   it("will calls the handleIsCompleted function when the user is clicking on the button completed", async () => {
  //     const task = [
  //       {
  //         id: 1,
  //         title: "Task 1",
  //         description: "Description 1",
  //         isCompleted: false,
  //       },
  //     ];

  //     render(
  //       <TodoList tasksList={task} handleIsCompleted={mockHandleIsCompleted} />
  //     );
  //     const completedButton = screen.getByTestId("completedBtn");
  //     await userEvent.click(completedButton);
  //     // await waitFor(() => {
  //     expect(mockHandleIsCompleted).toHaveBeenCalled();
  //     // });
  //   });
});
