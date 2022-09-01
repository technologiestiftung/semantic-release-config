const merge = require("lodash.merge");
const config = require("./index");
const mergedConfig = merge(JSON.parse(JSON.stringify(config)), {
	npmPublish: true,
});
module.exports = mergedConfig;
