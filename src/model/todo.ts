export type Task = {
	id: number;
	title: string;
	complete: boolean;
};

type PartialTask = {
	id: number;
	title?: string;
	complete?: boolean;
};

let idSequence = 1;

export function newTask(title: string): Task {
	return { id: idSequence++, title, complete: false };
}

export class Todo {
	private _tasks: Task[] = [];

	get tasks(): Task[] {
		return this._tasks.map((element) => ({ ...element }));
	}

	getTask(id: number): Task | undefined {
		const task = this._tasks.find((element) => element.id === id);
		return task ? { ...task } : undefined;
	}

	add(title: string): Task {
		const task = newTask(title);
		this._tasks.push(task);
		return task;
	}

	remove(task: Task): void {
		this.ensureExists(task, "remove");
		this._tasks = this._tasks.filter((element) => element.id !== task.id);
	}

	reset(): void {
		this._tasks = [];
	}

	update(task: PartialTask): Task {
		const existing = this.ensureExists(task, "update");
		Object.assign(existing, task);
		return existing;
	}

	private ensureExists(
		{ id, title = "UNTITLED" }: { id: number; title?: string },
		operation: string,
	): Task {
		const existing = this._tasks.find((element) => element.id === id);
		if (!existing) {
			throw new Error(`Can not ${operation} unknown task "${id}: ${title}"`);
		}
		return existing;
	}
}
