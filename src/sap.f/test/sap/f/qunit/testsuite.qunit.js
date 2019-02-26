sap.ui.define(function () {
	"use strict";
	return {
		name: "QUnit TestSuite for sap.f",
		defaults: {
			group: "Default",
			qunit: {
				version: "edge"
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "en",
				rtl: false,
				libs: ["sap.f"],
				"xx-waitForTheme": true
			},
			coverage: {
				only: ["sap/f"]
			},
			loader: {
				paths: {
					"sap/ui/demo/mock": "test-resources/sap/ui/documentation/sdk/",
					"qunit": "test-resources/sap/f/qunit/"
				}
			},
			page: "test-resources/sap/f/qunit/testsandbox.qunit.html?test={name}",
			autostart: true
		},
		tests: {
			"Avatar": {
				coverage: {
					only: ["sap/f/Avatar"]
				}
			},
			"Card": {
				coverage: {
					only: ["sap/f/Card"]
				}
			},
			"BindingResolver": {
				coverage: {
					only: ["sap/f/cards/BindingResolver"]
				}
			},
			"DynamicPage": {
				coverage: {
					only: ["sap/f/DynamicPage"]
				}
			},
			"DynamicPageHeader": {
				coverage: {
					only: ["sap/f/DynamicPageHeader"]
				}
			},
			"DynamicPageTitle": {
				coverage: {
					only: ["sap/f/DynamicPageTitle"]
				}
			},
			"ExploredSamples": {
				loader: {
					map: {
						"*": {
							"sap/ui/thirdparty/sinon": "sap/ui/thirdparty/sinon-4",
							"sap/ui/thirdparty/sinon-qunit": "sap/ui/qunit/sinon-qunit-bridge"
						}
					},
					paths: {
						"sap/ui/demo/mock": "test-resources/sap/ui/documentation/sdk/"
					}
				},
				runAfterLoader: "sap/ui/demo/mock/qunit/SampleTesterErrorHandler",
				qunit: {
					version: 2
				},
				sinon: {
					version: 4
				},
				ui5: {
					libs: ["sap.ui.unified", "sap.ui.documentation", "sap.ui.layout", "sap.m"],
					"xx-componentPreload": "off"
				},
				autostart: false
			},
			"FlexibleColumnLayout": {
				coverage: {
					only: ["sap/f/FlexibleColumnLayout"]
				}
			},
			"GridList": {
				coverage: {
					only: ["sap/f/GridList"]
				}
			},
			"Router": {
				coverage: {
					only: ["sap/f/Router"]
				}
			},
			"SemanticContainer": {
				coverage: {
					only: ["sap/f/SemanticContainer"]
				}
			},
			"SemanticPage": {
				coverage: {
					only: ["sap/f/SemanticPage"]
				}
			},
			"ShellBar": {
				title: "QUnit Test Page for sap.f.ShellBar",
				qunit: {
					version: 2
				},
				sinon: {
					version: 4
				},
				coverage: {
					only: [
						"sap/f/ShellBar",
						"sap/f/shellBar/Factory",
						"sap/f/shellBar/ResponsiveHandler",
						"sap/f/shellBar/AdditionalContentSupport",
						"sap/f/shellBar/ContentButton",
						"sap/f/shellBar/ControlSpacer",
						"sap/f/shellBar/ToolbarSpacer"
					]
				},
				ui5: {
					language: "en"
				}
			},

			// -------------------------------------------------------------------------------
			// Designtime tests:
			// -------------------------------------------------------------------------------

			"Designtime-DynamicPage": {
				group: "Designtime",
				module: "./designtime/DynamicPage.qunit"
			},
			"Designtime-DynamicPageHeader": {
				group: "Designtime",
				module: "./designtime/DynamicPageHeader.qunit"
			},
			"Designtime-DynamicPageTitle": {
				group: "Designtime",
				module: "./designtime/DynamicPageTitle.qunit"
			},
			"Designtime-Library": {
				group: "Designtime",
				module: "./designtime/Library.qunit"
			},
			"Designtime-SemanticPage": {
				group: "Designtime",
				module: "./designtime/SemanticPage.qunit"
			}
		}
	};
});