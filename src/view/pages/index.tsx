import { Frame } from "./frame";
import { NewTodo } from "../fragments/new-todo";
import { TodoList } from "../fragments/todo-list";
import type { Task } from "../../model/todo";

export function Index({ tasks }: { tasks: Task[] }) {
	return (
		<Frame>
			<section id="root" class="todoapp">
				<header class="header">
					<h1>todos</h1>
					<NewTodo />
				</header>
				<main class="main">
					<TodoList tasks={tasks} />
				</main>
			</section>
		</Frame>
	);
}
