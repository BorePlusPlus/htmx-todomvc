import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { Express } from "express";
import { Todo } from "../model/todo";
import { TodoItem } from "../view/fragments/todo-item";
import { Index } from "../view/pages";
import { contract } from "./contract";

export function handlers(app: Express, todo: Todo) {
  const s = initServer();

  const router = s.router(contract, {
    index: async () => {
      return {
        status: 200,
        body: Index({ tasks: todo.tasks }).toString(),
      };
    },
    newTodo: async ({ body: { title } }) => {
      const task = todo.add(title);
      return {
        status: 201,
        body: TodoItem({ ...task }).toString(),
      };
    },
    updateTodo: async ({ params: { id }, body: { title } }) => {
      const task = todo.update({ id, title });
      return {
        status: 200,
        body: TodoItem({ ...task }).toString(),
      };
    },
    toggleTodo: async ({ params: { id } }) => {
      const task = todo.getTask(id);
      if (!task) {
        return {
          status: 404,
          body: "Task not found",
        };
      }
      task.complete = !task.complete;
      todo.update(task);
      return {
        status: 200,
        body: TodoItem({ ...task }).toString(),
      };
    },
    deleteTodo: async ({ params: { id } }) => {
      const task = todo.getTask(id);
      if (!task) {
        return {
          status: 404,
          body: "Task not found",
        };
      }

      todo.remove(task);
      return {
        status: 200,
        body: "",
      };
    },
  });

  createExpressEndpoints(contract, router, app);
}
