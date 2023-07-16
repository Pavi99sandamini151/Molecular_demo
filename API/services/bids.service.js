"use strict";

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

/** @type {ServiceSchema} */
module.exports = {
	name: "bids",
	settings: {

	},
	dependencies: [],
	actions: {
		testhello: {
			rest: {
				method: "GET",
				path: "/testhello"
			},
			async handler() {
				return "Hello tester";
			}
		},

		testwelcome: {
			rest: {
                method: "POST",
                path: "/posthello"
            },
			params: {
				name: "string"
			},
			async handler(ctx) {
				return `test, ${ctx.params.name}`;
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
