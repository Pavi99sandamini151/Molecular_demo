// math.service.js
"use strict";

module.exports = {
    name: "math",
    settings: {},
    dependencies: [],
    actions: {
    	hello: {
			rest: {
				method: "GET",
				path: "/math"
			},
			async handler() {
				return "Hello Math";
			}
        },
        calculate: {
		  rest: "/add",
		  params: {
          	number1: "number",
          	number2: "number",
          },
		  async handler(ctx) {
			const result = ctx.params.number1 + ctx.params.number2;
			return { result };
		  }
        }
    },
    events: {},
	methods: {},
	created() {},
	async started() {},
	async stopped() {}
};
