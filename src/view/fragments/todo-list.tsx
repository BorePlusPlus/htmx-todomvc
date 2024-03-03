import { Task } from "../../model/todo";
import { TodoItem } from "./todo-item";

export function TodoList({ tasks }: { tasks: Task[] }) {
  return (
    <ul class="todo-list">
      {tasks.map((task) => (
        <TodoItem {...task} />
      ))}
    </ul>
  );
}
