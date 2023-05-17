"use strict";
module.exports = {
	name: "helper",
    settings: {},
    dependencies: [],
    actions: {
    	random() {
    		return Math.round(Math.random() * 10);
    	}
    },
    events: {
        "hello.called"(payload) {
            this.logger.info("Helper service caught");
            this.logger.info(payload);
        }
    },
	methods: {},
	created() {},
	async started() {},
	async stopped() {}
};
