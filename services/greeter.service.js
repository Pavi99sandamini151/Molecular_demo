"use strict";

module.exports = {
	name: "greeter",
	settings: {},
	dependencies: [],
	actions: {
		hello: {
			rest: {
				method: "GET",
				path: "/hello"
			},
			async handler(ctx) {
				const payload = `hello from greeter${this.broker.nodeID}`;
				const number = await ctx.call("helper.random");
				ctx.emit("hello called", { payload, number });
				return { payload, number };
			}
		},
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},
	events: {},
	methods: {},
	created() {},
	async started() {},
	async stopped() {}
};
