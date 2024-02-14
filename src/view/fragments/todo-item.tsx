export function TodoItem({
	id,
	title,
	complete,
}: { id: number; title: string; complete: boolean }) {
	return (
		<li class={complete ? "completed" : ""}>
			<div class="view">
				<input
					type="checkbox"
					class="toggle"
					checked={complete}
					hx-patch={`/todos/${id}/toggle`}
					hx-swap="outerHTML"
					hx-target="closest li"
				/>
				<label
					_="on dblclick add .editing to closest <li/>
						then set editor to the next <input/>
						then focus() on editor
						then set title to my innerText
						then set editor.value to ''
						then set editor.value to title"
				>
					{title}
				</label>
				<button
					type="button"
					class="destroy"
					hx-delete={`/todos/${id}`}
					hx-swap="outerHTML"
					hx-target="closest li"
				/>
			</div>
			<input
				type="text"
				name="title"
				class="edit"
				value={title}
				hx-patch={`/todos/${id}`}
				hx-swap="outerHTML"
				hx-target="closest li"
				hx-trigger="keyup[keyCode==13]"
				_="on blur remove .editing from closest <li/>"
			/>
		</li>
	);
}
