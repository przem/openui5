/* global QUnit */

sap.ui.define([
	"sap/ui/integration/widgets/Card",
	"sap/f/cards/ListContent",
	"sap/f/cards/AnalyticalContent",
	"sap/ui/core/Core",
	"sap/f/cards/NumericHeader",
	"sap/f/cards/NumericSideIndicator",
	"sap/f/cards/Header"
],
function (
	Card,
	ListContent,
	AnalyticalContent,
	Core,
	NumericHeader,
	NumericSideIndicator,
	Header
) {
	"use strict";

	var DOM_RENDER_LOCATION = "qunit-fixture";

	var oManifest_Header = {
		"sap.card": {
			"type": "List",
			"header": {
				"title": "L3 Request list content Card",
				"subTitle": "Card subtitle",
				"icon": {
					"src": "sap-icon://accept"
				},
				"status": {
					"text": "100 of 200"
				}
			}
		}
	};

	var oManifest_ListCard = {
		"sap.card": {
			"type": "List",
			"header": {
				"title": "L3 Request list content Card",
				"subTitle": "Card subtitle",
				"icon": {
					"src": "sap-icon://accept"
				},
				"status": {
					"text": "100 of 200"
				}
			},
			"content": {
				"data": {
					"json": [
						{
							"Name": "Notebook Basic 15",
							"Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
							"Id": "HT-1000",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Information",
							"info": "27.45 EUR",
							"infoState": "Success"
						},
						{
							"Name": "Notebook Basic 17",
							"Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
							"Id": "HT-1001",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Success",
							"info": "27.45 EUR",
							"infoState": "Success"

						},
						{
							"Name": "Notebook Basic 18",
							"Description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
							"Id": "HT-1002",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Warning",
							"info": "9.45 EUR",
							"infoState": "Error"
						},
						{
							"Name": "Notebook Basic 19",
							"Description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
							"Id": "HT-1003",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Error",
							"info": "9.45 EUR",
							"infoState": "Error"
						},
						{
							"Name": "ITelO Vault",
							"Description": "Digital Organizer with State-of-the-Art Storage Encryption",
							"Id": "HT-1007",
							"SubCategoryId": "PDAs & Organizers",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Success",
							"info": "29.45 EUR",
							"infoState": "Success"
						},
						{
							"Name": "Notebook Professional 15",
							"Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
							"Id": "HT-1010",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Success",
							"info": "29.45 EUR",
							"infoState": "Success"
						},
						{
							"Name": "Notebook Professional 26",
							"Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
							"Id": "HT-1022",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Success",
							"info": "29.45 EUR",
							"infoState": "Success"
						},
						{
							"Name": "Notebook Professional 27",
							"Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
							"Id": "HT-1024",
							"SubCategoryId": "Notebooks",
							"icon": "../images/Woman_avatar_01.png",
							"state": "Success",
							"info": "29.45 EUR",
							"infoState": "Success"
						}
					]
				},
				"item": {
					"icon": {
						"src": "{icon}"
					},
					"title": {
						"label": "{{title_label}}",
						"value": "{Name}"
					},
					"description": {
						"label": "{{description_label}}",
						"value": "{Description}"
					},
					"highlight": "{state}",
					"info": {
						"value": "{info}",
						"state": "{infoState}"
					}
				}
			}
		}
	};

	var oManifest_AnalyticalCard = {
		"sap.card": {
			"type": "Analytical",
			"header": {
				"title": "L3 Request list content Card",
				"subTitle": "Card subtitle",
				"icon": {
					"src": "sap-icon://accept"
				},
				"status": {
					"text": "100 of 200"
				}
			},
			"content": {
				"chartType": "StackedBar",
				"legend": {
					"visible": true,
					"position": "Bottom",
					"alignment": "Center"
				},
				"plotArea": {
					"dataLabel": {
						"visible": true,
						"showTotal": false
					},
					"categoryAxisText": {
						"visible": false
					},
					"valueAxisText": {
						"visible": true
					}
				},
				"title": {
					"text": "Stacked Bar chart",
					"visible": true,
					"alignment": "Center"
				},
				"measureAxis": "valueAxis",
				"dimensionAxis": "categoryAxis",
				"data": {
					"json": [
						{
							"Week": "CW14",
							"Revenue": 431000.22,
							"Cost": 230000.00,
							"Cost1": 24800.63,
							"Cost2": 205199.37,
							"Cost3": 199999.37,
							"Target": 500000.00,
							"Budget": 210000.00
						},
						{
							"Week": "CW15",
							"Revenue": 494000.30,
							"Cost": 238000.00,
							"Cost1": 99200.39,
							"Cost2": 138799.61,
							"Cost3": 200199.37,
							"Target": 500000.00,
							"Budget": 224000.00
						},
						{
							"Week": "CW16",
							"Revenue": 491000.17,
							"Cost": 221000.00,
							"Cost1": 70200.54,
							"Cost2": 150799.46,
							"Cost3": 80799.46,
							"Target": 500000.00,
							"Budget": 238000.00
						},
						{
							"Week": "CW17",
							"Revenue": 536000.34,
							"Cost": 280000.00,
							"Cost1": 158800.73,
							"Cost2": 121199.27,
							"Cost3": 108800.46,
							"Target": 500000.00,
							"Budget": 252000.00
						},
						{
							"Week": "CW18",
							"Revenue": 675000.00,
							"Cost": 230000.00,
							"Cost1": 140000.91,
							"Cost2": 89999.09,
							"Cost3": 100099.09,
							"Target": 600000.00,
							"Budget": 266000.00
						},
						{
							"Week": "CW19",
							"Revenue": 680000.00,
							"Cost": 250000.00,
							"Cost1": 172800.15,
							"Cost2": 77199.85,
							"Cost3": 57199.85,
							"Target": 600000.00,
							"Budget": 280000.00
						},
						{
							"Week": "CW20",
							"Revenue": 659000.14,
							"Cost": 325000.00,
							"Cost1": 237200.74,
							"Cost2": 87799.26,
							"Cost3": 187799.26,
							"Target": 600000.00,
							"Budget": 294000.00
						}
					]
				},
				"dimensions": [
					{
						"label": "Weeks",
						"value": "{Week}"
					}
				],
				"measures": [
					{
						"label": "Revenue",
						"value": "{Revenue}"
					}
				]
			}
		}
	};

	var oManifest_ObjectCard = {
		"sap.app": {
			"type": "card"
		},
		"sap.card": {
			"type": "Object",
			"data": {
				"json": {
					"firstName": "Donna",
					"lastName": "Moore",
					"position": "Sales Executive",
					"phone": "+1 202 555 5555",
					"email": "my@mymail.com",
					"photo": "./Woman_avatar_01.png",
					"manager": {
						"firstName": "John",
						"lastName": "Miller",
						"photo": "./Woman_avatar_02.png"
					},
					"company": {
						"name": "Robert Brown Entertainment",
						"address": "481 West Street, Anytown OH 45066, USA",
						"email": "mail@mycompany.com",
						"emailSubject": "Subject",
						"website": "www.company_a.example.com",
						"url": "http://www.company_a.example.com"
					}
				}
			},
			"header": {
				"icon": {
					"src": "{photo}"
				},
				"title": "{firstName} {lastName}",
				"subTitle": "{position}"
			},
			"content": {
				"groups": [
					{
						"title": "Contact Details",
						"items": [
							{
								"label": "First Name",
								"value": "{firstName}"
							},
							{
								"label": "Last Name",
								"value": "{lastName}"
							},
							{
								"label": "Phone",
								"value": "{phone}",
								"type": "phone"
							},
							{
								"label": "Email",
								"value": "{email}",
								"type": "email"
							}
						]
					},
					{
						"title": "Organizational Details",
						"items": [
							{
								"label": "Direct Manager",
								"value": "{manager/firstName} {manager/lastName}",
								"icon": {
									"src": "{manager/photo}"
								}
							}
						]
					},
					{
						"title": "Company Details",
						"items": [
							{
								"label": "Company Name",
								"value": "{company/name}"
							},
							{
								"label": "Address",
								"value": "{company/address}"
							},
							{
								"label": "Email",
								"value": "{company/email}",
								"emailSubject": "{company/emailSubject}",
								"type": "email"
							},
							{
								"label": "Website",
								"value": "{company/website}",
								"url": "{company/url}",
								"type": "link"
							}
						]
					}
				]
			}
		}
	};

	var oManifest_TableCard = {
		"sap.card": {
			"type": "Table",
			"header": {
				"title": "Sales Orders for Key Accounts"
			},
			"content": {
				"data": {
					"json": [
						{
							"salesOrder": "5000010050",
							"customer": "Robert Brown Entertainment",
							"status": "Delivered",
							"statusState": "Success",
							"orderUrl": "http://www.sap.com",
							"percent": 30,
							"percentValue": "30%",
							"progressState": "Error",
							"iconSrc": "sap-icon://help"
						},
						{
							"salesOrder": "5000010051",
							"customer": "Entertainment Argentinia",
							"status": "Canceled",
							"statusState": "Error",
							"orderUrl": "http://www.sap.com",
							"percent": 70,
							"percentValue": "70 of 100",
							"progressState": "Success",
							"iconSrc": "sap-icon://help"
						},
						{
							"salesOrder": "5000010052",
							"customer": "Brazil Technologies",
							"status": "In Progress",
							"statusState": "Warning",
							"orderUrl": "http://www.sap.com",
							"percent": 55,
							"percentValue": "55GB of 100",
							"progressState": "Warning",
							"iconSrc": "sap-icon://help"
						},
						{
							"salesOrder": "5000010053",
							"customer": "Quimica Madrilenos",
							"status": "Delivered",
							"statusState": "Success",
							"orderUrl": "http://www.sap.com",
							"percent": 10,
							"percentValue": "10GB",
							"progressState": "Error",
							"iconSrc": "sap-icon://help"
						},
						{
							"salesOrder": "5000010054",
							"customer": "Development Para O Governo",
							"status": "Delivered",
							"statusState": "Success",
							"orderUrl": "http://www.sap.com",
							"percent": 100,
							"percentValue": "100%",
							"progressState": "Success",
							"iconSrc": "sap-icon://help"
						}
					]
				},
				"columns": [
					{
						"label": "Sales Order",
						"value": "{salesOrder}",
						"identifier": true
					},
					{
						"label": "Customer",
						"value": "{customer}"
					},
					{
						"label": "Status",
						"value": "{status}",
						"state": "{statusState}"
					},
					{
						"label": "Order ID",
						"value": "{orderUrl}",
						"url": "{orderUrl}"
					},
					{
						"label": "Progress",
						"progressIndicator": {
							"percent": "{percent}",
							"text": "{percentValue}",
							"state": "{progressState}"
						}
					},
					{
						"label": "Avatar",
						"icon": {
							"src": "{iconSrc}"
						}
					}
				]
			}
		}
	};

	var oManifest_AvatarHeader = {
		"sap.card": {
			"type": "List",
			"header": {
				"title": "L3 Request list content Card",
				"subTitle": "Card subtitle",
				"icon": {
					"text": "AJ",
					"shape": "Circle",
					"alt": "Some alternative text", // Will be ignored as its not present in the Avatar control atm.
					"backgroundColor": "#000000", // Will be ignored as its not present in the Avatar control atm.
					"color": "#FF0000" // Will be ignored as its not present in the Avatar control atm.
				},
				"status": {
					"text": "100 of 200"
				}
			}
		}
	};

	var oManifest_NumericHeader = {
		"sap.card": {
			"type": "List",
			"header": {
				"type": "Numeric",
				"data": {
					"json": {
						"n": "56",
						"u": "%",
						"trend": "Up",
						"valueColor": "Good"
					}
				},
				"title": "Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation ",
				"subTitle": "Forecasted goal achievement depending on business logic and other important information Forecasted goal achievement depending on business logic and other important information",
				"unitOfMeasurement": "EUR",
				"mainIndicator": {
					"number": "{n}",
					"unit": "{u}",
					"trend": "{trend}",
					"state": "{valueColor}"
				},
				"details": "Details, additional information, will directly truncate after there is no more space.Details, additional information, will directly truncate after there is no more space.",
				"sideIndicators": [
					{
						"title": "Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target",
						"number": "3252.234",
						"unit": "K"
					},
					{
						"title": "Long Deviation Long Deviation",
						"number": "22.43",
						"unit": "%"
					}
				]
			}
		}
	};

	var oManifest_NumericHeader2 = {
		"sap.card": {
			"type": "List",
			"header": {
				"type": "Numeric",
				"title": "Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation Project Cloud Transformation ",
				"subTitle": "Forecasted goal achievement depending on business logic and other important information Forecasted goal achievement depending on business logic and other important information",
				"unitOfMeasurement": "EUR",
				"mainIndicator": {
					"number": "56",
					"unit": "%",
					"trend": "Up",
					"state": "Good"
				},
				"details": "Details, additional information, will directly truncate after there is no more space.Details, additional information, will directly truncate after there is no more space.",
				"sideIndicators": [
					{
						"title": "Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target Long Target",
						"number": "3252.234",
						"unit": "K"
					},
					{
						"title": "Long Deviation Long Deviation",
						"number": "22.43",
						"unit": "%"
					}
				]
			}
		}
	};

	function testContentInitialization(oManifest, assert) {

		// Arrange
		var done = assert.async();

		var oCard = new Card("somecard", {
			manifest: oManifest,
			width: "400px",
			height: "600px"
		});

		// Act
		oCard.placeAt(DOM_RENDER_LOCATION);
		Core.applyChanges();

		// Assert
		assert.ok(oCard.getAggregation("_header"), "Card header shouldn't be empty.");
		assert.ok(oCard.getAggregation("_content"), "Card content shouldn't be empty.");
		assert.ok(oCard.getDomRef(), "Card should be rendered.");
		assert.equal(oCard.getDomRef().clientWidth, 400, "Card should have width set to 400px.");
		assert.equal(oCard.getDomRef().clientHeight, 600, "Card should have height set to 600px.");

		oCard.attachEvent("_contentUpdated", function () {
			oCard.getAggregation("_content").addEventDelegate({
				onAfterRendering: function () {

					// Assert
					assert.ok(oCard.getAggregation("_header").getDomRef(), "Card header should be rendered.");
					assert.ok(oCard.getAggregation("_content").getDomRef(), "Card content should be rendered.");

					// Cleanup
					oCard.destroy();
					done();
				}
			}, this);
		});
	}

	QUnit.module("Init");

	QUnit.test("Initialization - ListContent", function (assert) {
		testContentInitialization(oManifest_ListCard, assert);
	});

	QUnit.test("Initialization - AnalyticalContent", function (assert) {
		testContentInitialization(oManifest_AnalyticalCard, assert);
	});

	QUnit.module("Card headers", {
		beforeEach: function () {
			this.oCard = new Card("somecard", {
				width: "400px",
				height: "600px"
			});

			this.oCard.placeAt(DOM_RENDER_LOCATION);
			Core.applyChanges();
		},
		afterEach: function () {
			this.oCard.destroy();
			this.oCard = null;
		}
	});

	QUnit.test("Card - Default Header initialization", function (assert) {

		// Arrange
		var done = assert.async();

		// Act
		this.oCard.attachEvent("_headerUpdated", function () {

			// Assert
			var oHeader = this.oCard.getAggregation("_header");
			assert.ok(oHeader, "Card should have header.");
			assert.ok(oHeader.getDomRef(), "Card header should be created and rendered.");
			assert.ok(oHeader.getAggregation("_title") && oHeader.getAggregation("_title").getDomRef(), "Card header title should be created and rendered.");
			assert.ok(oHeader.getAggregation("_subtitle") && oHeader.getAggregation("_subtitle").getDomRef(), "Card header subtitle should be created and rendered.");
			assert.ok(oHeader.getAggregation("_avatar") && oHeader.getAggregation("_avatar").getDomRef(), "Card header avatar should be created and rendered.");

			assert.equal(oHeader.getAggregation("_title").getText(), oManifest_Header["sap.card"].header.title, "Card header title should be correct.");
			assert.equal(oHeader.getAggregation("_subtitle").getText(), oManifest_Header["sap.card"].header.subTitle, "Card header subtitle should be correct.");
			assert.equal(oHeader.getAggregation("_avatar").getSrc(), oManifest_Header["sap.card"].header.icon.src, "Card header icon src should be correct.");
			assert.equal(oHeader.getStatusText(), oManifest_Header["sap.card"].header.status.text, "Card header status should be correct.");

			done();
		}.bind(this));
		this.oCard.setManifest(oManifest_Header);
		Core.applyChanges();

		// Assert
		assert.ok(this.oCard.getAggregation("_header"), "Card header shouldn't be empty.");
		assert.notOk(this.oCard.getAggregation("_content"), "Card content should be empty.");
	});

	QUnit.test("Card - Default Header Avatar", function (assert) {

		// Arrange
		var done = assert.async();

		// Act
		this.oCard.attachEvent("_headerUpdated", function () {

			// Assert
			var oHeader = this.oCard.getAggregation("_header");
			assert.notOk(oHeader.getAggregation("_avatar").getSrc(), "Card header icon src should be empty.");
			assert.equal(oHeader.getAggregation("_avatar").getDisplayShape(), "Circle", "Card header icon shape should be 'Circle'.");
			assert.equal(oHeader.getAggregation("_avatar").getInitials(), "AJ", "Card header initials should be 'AJ'.");

			done();
		}.bind(this));
		this.oCard.setManifest(oManifest_AvatarHeader);
		Core.applyChanges();
	});

	QUnit.test("Card - Numeric Header generic", function (assert) {

		// Arrange
		var done = assert.async();

		// Act
		this.oCard.attachEvent("_headerUpdated", function () {

			// Assert
			var oHeader = this.oCard.getAggregation("_header");
			assert.ok(oHeader.getDomRef(), "Card Numeric header should be rendered.");

			// Assert properties
			assert.equal(oHeader.getAggregation("_title").getText(), oManifest_NumericHeader["sap.card"].header.title, "Card header title should be correct.");
			assert.equal(oHeader.getAggregation("_subtitle").getText(), oManifest_NumericHeader["sap.card"].header.subTitle, "Card header subtitle should be correct.");
			assert.equal(oHeader.getAggregation("_unitOfMeasurement").getText(), oManifest_NumericHeader["sap.card"].header.unitOfMeasurement, "Card header unitOfMeasurement should be correct.");
			assert.equal(oHeader.getAggregation("_details").getText(), oManifest_NumericHeader["sap.card"].header.details, "Card header details should be correct.");

			done();
		}.bind(this));
		this.oCard.setManifest(oManifest_NumericHeader);
		Core.applyChanges();
	});

	QUnit.test("Card - Numeric Header main indicator with json data", function (assert) {

		// Arrange
		var done = assert.async();

		// Act
		this.oCard.attachEvent("_headerUpdated", function () {
			var oHeader = this.oCard.getAggregation("_header");

			// Assert aggregation _mainIndicator
			assert.ok(oHeader.getAggregation("_mainIndicator").getDomRef(), "Card header main indicator aggregation should be set and rendered");
			assert.equal(oHeader.getAggregation("_mainIndicator").getValue(), oManifest_NumericHeader["sap.card"].header.data.json["n"], "Card header main indicator value should be correct.");
			assert.equal(oHeader.getAggregation("_mainIndicator").getScale(), oManifest_NumericHeader["sap.card"].header.data.json["u"], "Card header main indicator scale should be correct.");
			assert.equal(oHeader.getAggregation("_mainIndicator").getIndicator(), oManifest_NumericHeader["sap.card"].header.data.json["trend"], "Card header main indicator indicator should be correct.");
			assert.equal(oHeader.getAggregation("_mainIndicator").getValueColor(), oManifest_NumericHeader["sap.card"].header.data.json["valueColor"], "Card header main indicator valueColor should be correct.");

			done();
		}.bind(this));
		this.oCard.setManifest(oManifest_NumericHeader);
		Core.applyChanges();
	});

	QUnit.test("Card - Numeric Header main indicator without 'data'", function (assert) {

		// Arrange
		var done = assert.async();

		// Act
		this.oCard.attachEvent("_headerUpdated", function () {
			var oHeader = this.oCard.getAggregation("_header");

			// Assert aggregation _mainIndicator
			assert.ok(oHeader.getAggregation("_mainIndicator").getDomRef(), "Card header main indicator aggregation should be set and rendered");
			assert.equal(oHeader.getAggregation("_mainIndicator").getValue(), oManifest_NumericHeader2["sap.card"].header.mainIndicator.number, "Card header main indicator value should be correct.");
			assert.equal(oHeader.getAggregation("_mainIndicator").getScale(), oManifest_NumericHeader2["sap.card"].header.mainIndicator.unit, "Card header main indicator scale should be correct.");
			assert.equal(oHeader.getAggregation("_mainIndicator").getIndicator(), oManifest_NumericHeader2["sap.card"].header.mainIndicator.trend, "Card header main indicator indicator should be correct.");
			assert.equal(oHeader.getAggregation("_mainIndicator").getValueColor(), oManifest_NumericHeader2["sap.card"].header.mainIndicator.state, "Card header main indicator valueColor should be correct.");

			done();
		}.bind(this));
		this.oCard.setManifest(oManifest_NumericHeader2);
		Core.applyChanges();
	});

	QUnit.test("Card - Numeric Header side indicators", function (assert) {

		// Arrange
		var done = assert.async();

		// Act
		this.oCard.attachEvent("_headerUpdated", function () {
			var oHeader = this.oCard.getAggregation("_header");

			// Assert aggregation sideIndicators
			assert.ok(oHeader.getAggregation("sideIndicators"), "Card header side indicators should be set.");
			assert.equal(oHeader.getAggregation("sideIndicators").length, oManifest_NumericHeader["sap.card"].header.sideIndicators.length, "Card header should have two side indicators.");

			oHeader.getAggregation("sideIndicators").forEach(function (oIndicator, iIndex) {
				var oSideIndicator = oManifest_NumericHeader["sap.card"].header.sideIndicators[iIndex];
				assert.ok(oIndicator.getDomRef(), "Card header sideIndicators one should be rendered.");
				assert.equal(oIndicator.getTitle(), oSideIndicator.title, "Card header side indicator " + iIndex + " title should be correct.");
				assert.equal(oIndicator.getNumber(), oSideIndicator.number, "Card header side indicator " + iIndex + " number should be correct.");
				assert.equal(oIndicator.getUnit(), oSideIndicator.unit, "Card header side indicator " + iIndex + " unit should be correct.");
			});

			done();
		}.bind(this));
		this.oCard.setManifest(oManifest_NumericHeader);
		Core.applyChanges();
	});

	QUnit.module("Analytical Card", {
		beforeEach: function () {
			this.oCard = new Card({
				width: "400px",
				height: "600px"
			});

			this.oCard.placeAt(DOM_RENDER_LOCATION);
			Core.applyChanges();
		},
		afterEach: function () {
			this.oCard.destroy();
			this.oCard = null;
		}
	});

	QUnit.test("Analytical Card - using manifest", function (assert) {

		// Arrange
		var done = assert.async(),
			window = {
				"start": "firstDataPoint",
				"end": "lastDataPoint"
			};

		this.oCard.attachEvent("_contentUpdated", function () {
			var oContent = this.oCard.getAggregation("_content"),
				oChart = oContent.getAggregation("_content"),
				oVizProperites = oChart.getVizProperties();

			// Assert aggregation sideIndicators
			assert.ok(oContent, "Analytical Card content form manifest should be set");
			assert.ok(oChart.getDomRef(), "Analytical Card content - chart should be rendered");
			assert.equal(oChart.getVizType(), "stacked_bar", "Chart should have a vizType set");
			assert.equal(oVizProperites.legend.visible, true, "Chart should have a legend visible property set to true");
			assert.equal(oVizProperites.legendGroup.layout.position, "bottom", "Chart should have a legend position property set to bottom");
			assert.equal(oVizProperites.legendGroup.layout.alignment, "center", "Chart should have a legend alignment property set to center");
			assert.equal(oVizProperites.plotArea.window.end, window.end, "Chart should have a plotAreas window property set to this window object");
			assert.equal(oVizProperites.plotArea.window.start, window.start, "Chart should have a plotAreas window property set to this window object");
			assert.equal(oVizProperites.plotArea.dataLabel.visible, true, "Chart should have a plotArea.datalabel.visible set to true");
			assert.equal(oVizProperites.plotArea.dataLabel.showTotal, false, "Chart should have a plotArea.datalabel.showTotal set to false");
			assert.equal(oVizProperites.categoryAxis.title.visible, false, "Chart should have a categoryAxis.title.visible set to false");
			assert.equal(oVizProperites.valueAxis.title.visible, true, "Chart should have a valueAxis.title.visible set to false");
			assert.equal(oVizProperites.title.visible, true, "Chart should have a title.visible set to true");
			assert.equal(oVizProperites.title.text, "Stacked Bar chart", "Chart should have a title.text set to true");
			assert.equal(oVizProperites.title.alignment, "center", "Chart should have a title.alignment set to center");
			assert.equal(oChart.getFeeds()[0].getProperty("uid"), "valueAxis", "Chart should have a feed item whit property 'uid'");
			assert.equal(oChart.getFeeds()[0].getProperty("type"), "Measure", "Chart should have a feed item whit property 'Measure'");
			assert.equal(oChart.getFeeds()[1].getProperty("uid"), "categoryAxis", "Chart should have a feed item whit property 'uid'");
			assert.equal(oChart.getFeeds()[1].getProperty("type"), "Dimension", "Chart should have a feed item whit property 'Measure'");

			done();
		}.bind(this));

		// Act
		this.oCard.setManifest(oManifest_AnalyticalCard);
	});

	QUnit.module("Object Card", {
		beforeEach: function () {
			this.oCard = new Card({
				width: "400px",
				height: "600px"
			});

			this.oCard.placeAt(DOM_RENDER_LOCATION);
			Core.applyChanges();
		},
		afterEach: function () {
			this.oCard.destroy();
			this.oCard = null;
		}
	});

	QUnit.test("Object Card - using manifest", function (assert) {

		// Arrange
		var done = assert.async();
		var oHeaderPromise = new Promise(function (resolve) {
			this.oCard.attachEvent("_headerUpdated", function () {
				resolve();
			});
		}.bind(this));
		var oContentPromise = new Promise(function (resolve) {
			this.oCard.attachEvent("_contentUpdated", function () {
				resolve();
			});
		}.bind(this));

		Promise.all([oHeaderPromise, oContentPromise]).then(function () {
			var oObjectContent = this.oCard.getAggregation("_content");
			var oContent = oObjectContent.getAggregation("_content");
			var oHeader = this.oCard.getAggregation("_header");
			var aGroups = oContent.getContent();
			var oData = oManifest_ObjectCard["sap.card"].data.json;
			var oManifestContent = oManifest_ObjectCard["sap.card"].content;

			assert.equal(aGroups.length, 3, "Should have 3 groups.");

			// Header assertions
			assert.equal(oHeader.getTitle(), oData.firstName + " " + oData.lastName, "Should have correct header title.");
			assert.equal(oHeader.getSubtitle(), oData.position, "Should have correct header subtitle.");
			assert.equal(oHeader.getIconSrc(), oData.photo, "Should have correct header icon source.");

			// Group 1 assertions
			assert.equal(aGroups[0].getItems().length, 9, "Should have 9 items.");
			assert.equal(aGroups[0].getItems()[0].getText(), oManifestContent.groups[0].title, "Should have correct group title.");
			assert.equal(aGroups[0].getItems()[1].getText(), oManifestContent.groups[0].items[0].label + ":", "Should have correct item label.");
			assert.equal(aGroups[0].getItems()[2].getText(), oData.firstName, "Should have correct item value.");
			assert.equal(aGroups[0].getItems()[3].getText(), oManifestContent.groups[0].items[1].label + ":", "Should have correct item label.");
			assert.equal(aGroups[0].getItems()[4].getText(), oData.lastName, "Should have correct item value.");
			assert.equal(aGroups[0].getItems()[5].getText(), oManifestContent.groups[0].items[2].label + ":", "Should have correct item label.");
			assert.equal(aGroups[0].getItems()[6].getText(), oData.phone, "Should have correct item value.");
			assert.equal(aGroups[0].getItems()[6].getHref(), "tel:" + oData.phone, "Should have correct phone link.");

			// Group 2 assertions
			assert.equal(aGroups[1].getItems().length, 2, "Should have 2 items.");
			assert.equal(aGroups[1].getItems()[0].getText(), oManifestContent.groups[1].title, "Should have correct group title.");
			assert.equal(aGroups[1].getItems()[1].getItems()[0].getSrc(), oData.manager.photo, "Should have correct image source.");
			assert.equal(aGroups[1].getItems()[1].getItems()[1].getItems()[0].getText(), oManifestContent.groups[1].items[0].label + ":", "Should have correct item label");
			assert.equal(aGroups[1].getItems()[1].getItems()[1].getItems()[1].getText(), oData.manager.firstName + " " + oData.manager.lastName, "Should have correct item value.");

			// Group 3 assertions
			assert.equal(aGroups[2].getItems().length, 9, "Should have 9 items.");
			assert.equal(aGroups[2].getItems()[0].getText(), oManifestContent.groups[2].title, "Should have correct group title.");
			assert.equal(aGroups[2].getItems()[1].getText(), oManifestContent.groups[2].items[0].label + ":", "Should have correct item label.");
			assert.equal(aGroups[2].getItems()[2].getText(), oData.company.name, "Should have correct item value.");
			assert.equal(aGroups[2].getItems()[3].getText(), oManifestContent.groups[2].items[1].label + ":", "Should have correct item label.");
			assert.equal(aGroups[2].getItems()[4].getText(), oData.company.address, "Should have correct item value.");
			assert.equal(aGroups[2].getItems()[5].getText(), oManifestContent.groups[2].items[2].label + ":", "Should have correct item label.");
			assert.equal(aGroups[2].getItems()[6].getText(), oData.company.email, "Should have correct item value.");
			assert.equal(aGroups[2].getItems()[6].getHref(), "mailto:" + oData.company.email + "?subject=" + oData.company.emailSubject, "Should have correct item link.");
			assert.equal(aGroups[2].getItems()[8].getText(), oData.company.website, "Should have correct item value.");
			assert.equal(aGroups[2].getItems()[8].getHref(), oData.company.url, "Should have correct item URL.");

			done();
		}.bind(this));

		// Act
		this.oCard.setManifest(oManifest_ObjectCard);
	});

	QUnit.module("Table Card", {
		beforeEach: function () {
			this.oCard = new Card({
				width: "800px"
			});

			this.oCard.placeAt(DOM_RENDER_LOCATION);
			Core.applyChanges();
		},
		afterEach: function () {
			this.oCard.destroy();
			this.oCard = null;
		}
	});

	QUnit.test("Table Card - using manifest", function (assert) {

		// Arrange
		var done = assert.async();

		this.oCard.attachEvent("_contentUpdated", function () {
			var oManifestData = oManifest_TableCard["sap.card"].content.data.json;
			var oManifestContent = oManifest_TableCard["sap.card"].content;
			var oCardContent = this.oCard.getAggregation("_content");
			var oTable = oCardContent.getAggregation("_content");
			var aColumns = oTable.getColumns();
			var aCells = oTable.getItems()[0].getCells();

			// Assert
			assert.equal(aColumns.length, 6, "Should have 6 columns.");

			// Columns titles
			assert.equal(aColumns[0].getHeader().getText(), oManifestContent.columns[0].label, "Should have correct column title");
			assert.equal(aColumns[1].getHeader().getText(), oManifestContent.columns[1].label, "Should have correct column title");
			assert.equal(aColumns[2].getHeader().getText(), oManifestContent.columns[2].label, "Should have correct column title");
			assert.equal(aColumns[3].getHeader().getText(), oManifestContent.columns[3].label, "Should have correct column title");
			assert.equal(aColumns[4].getHeader().getText(), oManifestContent.columns[4].label, "Should have correct column title");
			assert.equal(aColumns[5].getHeader().getText(), oManifestContent.columns[5].label, "Should have correct column title");

			// Column cells types
			assert.ok(aCells[0].isA("sap.m.ObjectIdentifier"), "Column with provided 'identifier' should be of type 'ObjectIdentifier'");
			assert.ok(aCells[1].isA("sap.m.Text"), "Column with 'value' only should be of type 'Text'");
			assert.ok(aCells[2].isA("sap.m.ObjectStatus"), "Column with a 'state' should be of type 'ObjectStatus'");
			assert.ok(aCells[3].isA("sap.m.Link"), "Column with an 'url' should be of type 'Link'");
			assert.ok(aCells[4].isA("sap.m.ProgressIndicator"), "Column with a 'progressIndicator' should be of type 'ProgressIndicator'");
			assert.ok(aCells[5].isA("sap.f.Avatar"), "Column with an 'icon' should be of type 'Avatar'");

			// Column values
			assert.equal(aCells[0].getTitle(), oManifestData[0].salesOrder, "Should have correct identifier value.");
			assert.equal(aCells[1].getText(), oManifestData[0].customer, "Should have correct text value.");
			assert.equal(aCells[2].getText(), oManifestData[0].status, "Should have correct text value.");
			assert.equal(aCells[2].getState(), oManifestData[0].statusState, "Should have correct state.");
			assert.equal(aCells[3].getText(), oManifestData[0].orderUrl, "Should have correct text value.");
			assert.equal(aCells[3].getHref(), oManifestData[0].orderUrl, "Should have correct url value.");
			assert.equal(aCells[4].getPercentValue(), oManifestData[0].percent, "Should have correct percentage.");
			assert.equal(aCells[4].getDisplayValue(), oManifestData[0].percentValue, "Should have correct progress text.");
			assert.equal(aCells[4].getState(), oManifestData[0].progressState, "Should have correct progress state.");
			assert.equal(aCells[5].getSrc(), oManifestData[0].iconSrc, "Should have correct icon src.");

			done();
		}.bind(this));

		// Act
		this.oCard.setManifest(oManifest_TableCard);
	});

	QUnit.module("Card Accessibility", {
		beforeEach: function () {
			this.oRb = sap.ui.getCore().getLibraryResourceBundle("sap.f");
			this.oCard = new Card("somecard", {
				width: "400px",
				height: "600px"
			});
			this.oNumericHeaderCard = new Card("numericCard", {
				width: "400px",
				height: "600px"
			});

			this.oCard.placeAt(DOM_RENDER_LOCATION);
			this.oNumericHeaderCard.placeAt(DOM_RENDER_LOCATION);
			Core.applyChanges();
		},
		afterEach: function () {
			this.oCard.destroy();
			this.oCard = null;
			this.oNumericHeaderCard.destroy();
			this.oNumericHeaderCard = null;
			this.oRb = null;
		}
	});

	QUnit.test("Card", function (assert) {

		// Arrange
		var done = assert.async();
		var oHeaderPromise = new Promise(function (resolve) {
			this.oCard.attachEvent("_headerUpdated", function () {
				resolve();
			});
		}.bind(this));
		var oContentPromise = new Promise(function (resolve) {
			this.oCard.attachEvent("_contentUpdated", function () {
				resolve();
			});
		}.bind(this));

		Promise.all([oHeaderPromise, oContentPromise]).then(function () {

			// Assert
			var oCardDomRef = this.oCard.getDomRef(),
				oHeader = this.oCard.getAggregation("_header"),
				oHeaderDomRef = oHeader.getDomRef(),
				oContentDomRef = document.getElementsByClassName("sapFCardContent")[0],
				sAriaLabelledByIds = oHeader._getTitle().getId() + " " + oHeader._getSubtitle().getId() + " " + oHeader._getAvatar().getId();

			// Assert Card Container
			assert.equal(oCardDomRef.getAttribute("role"), "region", "Card container should have a role - region");
			assert.equal(oCardDomRef.getAttribute("aria-roledescription"), this.oRb.getText("ARIA_ROLEDESCRIPTION_CARD"), "Card container should have aria-roledescription - Card");
			assert.equal(oCardDomRef.getAttribute("aria-labelledby"), oHeader._getTitle().getId(), "Card container should have aria-lebelledby - pointing to the title id if there is one");

			// Assert Card Header
			assert.equal(oHeaderDomRef.getAttribute("role"), "group", "Card header should have a role - group");
			assert.equal(oHeaderDomRef.getAttribute("aria-roledescription"), this.oRb.getText("ARIA_ROLEDESCRIPTION_CARD_HEADER"), "Card header should have aria-roledescription - Card Header");
			assert.equal(oHeaderDomRef.getAttribute("aria-labelledby"), sAriaLabelledByIds, "Card container should have aria-lebelledby - pointing to the title, subtitle and avatar ids if there is one");
			assert.equal(oHeaderDomRef.getAttribute("tabindex"), 0, "Card header should have tabindex=0");

			// Assert Card Content
			assert.equal(oContentDomRef.getAttribute("role"), "group", "Card content should have a role - group");
			assert.equal(oContentDomRef.getAttribute("aria-label"), this.oRb.getText("ARIA_LABEL_CARD_CONTENT"), "Card container should have aria-label - Card Content");
			done();
		}.bind(this));

		// Act
		this.oCard.setManifest(oManifest_ListCard);
	});

	QUnit.test("Card - Numeric Header", function (assert) {

		// Arrange
		var done = assert.async();

		this.oNumericHeaderCard.attachEvent("_headerUpdated", function () {
			var oHeader = this.oNumericHeaderCard.getAggregation("_header"),
				oHeaderDomRef = oHeader.getDomRef(),
				sAriaLabelledByIds = oHeader._getTitle().getId() + " " + oHeader._getSubtitle().getId() + " " + oHeader._getUnitOfMeasurement().getId() + " " + oHeader._getMainIndicator().getId() +  oHeader._getSideIndicatorIds() + " " + oHeader._getDetails().getId();

			assert.equal(oHeaderDomRef.getAttribute("role"), "group", "Card header should have a role - group");
			assert.equal(oHeaderDomRef.getAttribute("aria-roledescription"), this.oRb.getText("ARIA_ROLEDESCRIPTION_CARD_HEADER"), "Card header should have aria-roledescription - Card Header");
			assert.equal(oHeaderDomRef.getAttribute("aria-labelledby"),  sAriaLabelledByIds, "Card container should have aria-lebelledby - pointing to the title, subtitle and avatar ids if there is one");
			assert.equal(oHeaderDomRef.getAttribute("tabindex"), 0, "Card header should have tabindex=0");
			done();
		}.bind(this));

		// Act
		this.oNumericHeaderCard.setManifest(oManifest_NumericHeader);
	});

});