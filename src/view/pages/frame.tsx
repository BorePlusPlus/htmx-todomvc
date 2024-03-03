// mostly to see children prop in action
export function Frame({ children }: Html.PropsWithChildren) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
          <script
            src="https://unpkg.com/htmx.org@1.9.10"
            integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
            crossorigin="anonymous"
          />
          <script src="https://unpkg.com/hyperscript.org@0.9.12" />
          <link
            rel="stylesheet"
            href="https://todomvc.com/examples/react/dist/app.css"
          />
        </head>
        <body>{children}</body>
        <footer class="info">
          <p>Double-click to edit a todo</p>
          <p>Created by the TodoMVC Team</p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </html>
    </>
  );
}
