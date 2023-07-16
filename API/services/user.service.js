"use strict";

module.exports = {
	name: "user",
	settings: {

	},
	dependencies: [],
	actions: {
		login: {
			rest: {
				method: "POST",
				path: "/login"
			},
			params: {
				username: "string",
				password: "string"
			},
			async handler(ctx) {
				return `return logged ${ctx.params.username} and ${ctx.params.password}`;
			}
		},

		signup: {
			rest: {
                method: "POST",
                path: "/signup"
            },
			params: {
				name: "string",
				password: "string",
				email: "string"
			},
			async handler(ctx) {
				return `signup, ${ctx.params.name}, ${ctx.params.password}, ${ctx.params.email}`;
			}
		}
	},
	events: {

	},
	methods: {

	},
	created() {

	},
	async started() {

	},
	async stopped() {

	}
};
