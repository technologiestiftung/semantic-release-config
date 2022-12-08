import { describe, expect, it } from "vitest";
const defaultConfig = require("../index");
const config = require("../release.config");
describe("basic test", () => {
	it("should have publish false", () => {
		expect(defaultConfig.npmPublish).equal(false);
		expect(config.npmPublish).equal(true);
	});
	it("should snapshot repo config", () => {
		expect(config).toMatchInlineSnapshot(`
			{
			  "branches": [
			    {
			      "name": "main",
			    },
			  ],
			  "dryRun": false,
			  "npmPublish": true,
			  "plugins": [
			    "@semantic-release/commit-analyzer",
			    "@semantic-release/release-notes-generator",
			    "@semantic-release/changelog",
			    "@semantic-release/npm",
			    "@semantic-release/git",
			    [
			      "@semantic-release/github",
			      {
			        "successComment": false,
			      },
			    ],
			  ],
			}
		`);
	});
});
