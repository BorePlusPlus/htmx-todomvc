import { assert, beforeEach, describe, it } from "vitest";
import { Todo, newTask } from "../src/model/todo";

describe("Todo list", () => {
	let todo: Todo;

	beforeEach(() => {
		todo = new Todo();
	});

	it("starts empty", () => {
		assert.deepEqual(todo.tasks, []);
	});

	it("supports adding tasks", () => {
		const tea = todo.add("make tea");
		assert.deepEqual(todo.tasks, [tea]);
	});

	it("supports reset", () => {
		todo.add("make tea");
		todo.reset();
		assert.deepEqual(todo.tasks, []);
	});

	it("preserves insertion order", () => {
		const tea = todo.add("make tea");
		const dolphins = todo.add("swim with dolphins");
		assert.deepEqual(todo.tasks, [tea, dolphins]);
	});

	it("supports removing tasks", () => {
		const tea = todo.add("make tea");
		const dolphins = todo.add("swim with dolphins");
		todo.remove(tea);
		assert.deepEqual(todo.tasks, [dolphins]);
	});

	it("throws an error when removing unknown task", () => {
		assert.throws(() => {
			todo.remove(newTask("make tea"));
		}, /Can not remove unknown task ".*: make tea"/);
	});

	it("defaults tasks to incomplete", () => {
		todo.add("make tea");
		assert.equal(todo.tasks[0].complete, false);
	});

	it("allows updating task", () => {
		const tea = todo.add("make tea");
		tea.title = "make more tea";
		tea.complete = true;
		todo.update(tea);
		assert.equal(todo.tasks[0].title, "make more tea");
		assert.equal(todo.tasks[0].complete, true);
	});

	it("throws and error when updating unknown task", () => {
		assert.throws(() => {
			todo.update(newTask("make tea"));
		}, /Can not update unknown task ".*: make tea"/);
	});

	it("allows adding duplicate task", () => {
		todo.add("make tea");
		todo.add("make tea");
		assert.equal(todo.tasks.length, 2);
		const [firstTea, secondTea] = todo.tasks;
		assert.notDeepEqual(firstTea, secondTea);
	});

	it("supports toggling an instance of duplicate task", () => {
		const firstTea = todo.add("make tea");
		todo.add("make tea");
		firstTea.complete = true;
		todo.update(firstTea);
		assert.equal(todo.tasks[0].complete, true);
		assert.equal(todo.tasks[1].complete, false);
	});

	it("supports removing an instance of duplicate task", () => {
		const firstTea = todo.add("make tea");
		const secondTea = todo.add("make tea");
		todo.remove(firstTea);
		assert.deepEqual(todo.tasks, [secondTea]);
	});
});
