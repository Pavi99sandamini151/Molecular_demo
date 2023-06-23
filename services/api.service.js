"use strict";

const ApiGateway = require("moleculer-web");
module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		// Exposed port
		port: process.env.PORT || 3000,
		// Exposed IP
		ip: "0.0.0.0",
		// Global Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
		use: [],
		routes: [
			{
				path: "/api",

				whitelist: [
					"**"
				],
				use: [],
				mergeParams: true,
				authentication: false,
				authorization: false,
				autoAliases: true,
				aliases: {
				},

				// Calling options. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Calling-options
				callingOptions: {},

				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				// Mapping policy setting. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Mapping-policy
				mappingPolicy: "all", // Available values: "all", "restrict"

				// Enable/disable logging
				logging: true
			}
		],

		// Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
		log4XXResponses: false,
		// Logging the request parameters. Set to any log level to enable it. E.g. "info"
		logRequestParams: null,
		// Logging the response data. Set to any log level to enable it. E.g. "info"
		logResponseData: null,


		// Serve assets from "public" folder. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Serve-static-files
		assets: {
			folder: "public",

			// Options to `server-static` module
			options: {}
		}
	},

	methods: {
		async authenticate(ctx, route, req) {
			// Read the token from header
			const auth = req.headers["authorization"];

			if (auth && auth.startsWith("Bearer")) {
				const token = auth.slice(7);

				// Check the token. Tip: call a service which verify the token. E.g. `accounts.resolveToken`
				if (token == "123456") {
					// Returns the resolved user. It will be set to the `ctx.meta.user`
					return { id: 1, name: "John Doe" };

				} else {
					// Invalid token
					throw new ApiGateway.Errors.UnAuthorizedError(ApiGateway.Errors.ERR_INVALID_TOKEN);
				}

			} else {
				// No token. Throw an error or do nothing if anonymous access is allowed.
				// throw new E.UnAuthorizedError(E.ERR_NO_TOKEN);
				return null;
			}
		},

		/**
		 * Authorize the request. Check that the authenticated user has right to access the resource.
		 *
		 * PLEASE NOTE, IT'S JUST AN EXAMPLE IMPLEMENTATION. DO NOT USE IN PRODUCTION!
		 *
		 * @param {Context} ctx
		 * @param {Object} route
		 * @param {IncomingRequest} req
		 * @returns {Promise}
		 */
		async authorize(ctx, route, req) {
			// Get the authenticated user.
			const user = ctx.meta.user;

			// It check the `auth` property in action schema.
			if (req.$action.auth == "required" && !user) {
				throw new ApiGateway.Errors.UnAuthorizedError("NO_RIGHTS");
			}
		}

	}
};
