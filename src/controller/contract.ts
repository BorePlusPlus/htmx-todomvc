import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
	index: {
		method: "GET",
		path: "/",
		responses: {
			200: c.otherResponse({
				contentType: "text/html",
				body: z.string(),
			}),
		},
		summary: "Render the index page",
	},
	newTodo: {
		method: "POST",
		path: "/todos",
		body: z.object({
			title: z.string(),
		}),
		responses: {
			201: c.otherResponse({
				contentType: "text/html",
				body: z.string(),
			}),
		},
		summary: "Create a new todo",
	},
	updateTodo: {
		method: "PATCH",
		path: "/todos/:id",
		pathParams: z.object({
			id: z.coerce.number(),
		}),
		body: z.object({
			title: z.string().optional(),
			complete: z.boolean().optional(),
		}),
		responses: {
			200: c.otherResponse({
				contentType: "text/html",
				body: z.string(),
			}),
			404: c.otherResponse({
				contentType: "text/plain",
				body: z.string(),
			}),
		},
	},
	toggleTodo: {
		method: "PATCH",
		path: "/todos/:id/toggle",
		pathParams: z.object({
			id: z.coerce.number(),
		}),
		body: z.any(),
		responses: {
			200: c.otherResponse({
				contentType: "text/html",
				body: z.string(),
			}),
			404: c.otherResponse({
				contentType: "text/plain",
				body: z.string(),
			}),
		},
	},
	deleteTodo: {
		method: "DELETE",
		path: "/todos/:id",
		pathParams: z.object({
			id: z.coerce.number(),
		}),
		body: z.any(),
		responses: {
			200: c.otherResponse({
				contentType: "text/html",
				body: z.string(),
			}),
			404: c.otherResponse({
				contentType: "text/plain",
				body: z.string(),
			}),
		},
	},
});
