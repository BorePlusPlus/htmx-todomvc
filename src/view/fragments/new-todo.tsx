export function NewTodo() {
  return (
    <form
      class="input-container"
      hx-post="/todos"
      hx-target="next ul"
      hx-swap="beforeend"
      _="on submit me.reset()"
    >
      <input
        type="text"
        name="title"
        id="todo-input"
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus="true"
      />
      <label for="todo-input" class="visually-hidden">
        New Todo Input
      </label>
    </form>
  );
}
