/*global QUnit */

sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/f/cards/BindingResolver"
],
function (JSONModel, BindingResolver) {
	"use strict";

	QUnit.module("BindingResolver resolveValue");

	QUnit.test("Simple binding syntax", function (assert) {

		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			id: "someid"
		});

		// Act
		var vId = BindingResolver.resolveValue("{id}", oModel);

		// Assert
		assert.equal(vId, "someid", "Should have correctly resolved simple binding syntax.");
	});

	QUnit.test("Simple binding syntax with path", function (assert) {
		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			items: [
				{
					id: 1
				},
				{
					id: 2
				},
				{
					id: 3
				}
			]
		});

		assert.equal(BindingResolver.resolveValue("{id}", oModel, "/items/0"), 1, "Should have correctly resolved simple binding syntax.");
	});

	QUnit.test("Complex binding syntax", function (assert) {

		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			id: "someid"
		});

		// Act
		var vId = BindingResolver.resolveValue("Test {id} test", oModel);

		// Assert
		assert.equal(vId, "Test someid test", "Should have correctly resolved complex binding syntax.");
	});

	QUnit.test("Expression binding syntax", function (assert) {

		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			id: "someid"
		});

		// Act
		var vResolved = BindingResolver.resolveValue("{= ${id} === 'someid' ? 'success' : 'error' }", oModel);

		// Assert
		assert.equal(vResolved, "success", "Should have correctly resolved expression binding syntax.");

		// Act
		oModel.setData({
			id: "someid2"
		});
		var vResolved2 = BindingResolver.resolveValue("{= ${id} === 'someid' ? 'success' : 'error' }", oModel);

		// Assert
		assert.equal(vResolved2, "error", "Should have correctly resolved expression binding syntax.");
	});

	QUnit.test("Simple string", function (assert) {

		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			id: "someid"
		});

		// Act
		var vResolved = BindingResolver.resolveValue("somestring", oModel);

		// Assert
		assert.equal(vResolved, "somestring", "Should have correctly resolved simple string.");
	});

	QUnit.test("Complex object", function (assert) {

		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			id: "someid",
			header: {
				title: {
					text: "The title of the header",
					visible: true
				}
			},
			content: {
				items: [
					{
						id: "item1"
					},
					{
						id: "item2"
					},
					{
						id: "item3"
					}
				]
			}
		});

		var oObjectToResolve = {
			header: {
				title: "{/header/title/text} some title",
				visible: "{= ${/header/title/visible} ? true : false}"
			},
			content: {
				items: [
					{
						id: "{/content/items/0/id}"
					},
					{
						id: "{/content/items/1/id}"
					},
					{
						id: "{/content/items/2/id}"
					},
					"{id}",
					""
				]
			}
		};

		// Act
		var vResolved = BindingResolver.resolveValue(oObjectToResolve, oModel);

		// Assert
		assert.equal(vResolved.header.title, "The title of the header some title", "Should have correctly resolved complex binding syntax.");
		assert.ok(vResolved.header.visible, "Should have correctly resolved expression binding syntax.");
		assert.equal(vResolved.content.items[0].id, "item1", "Should have correct id.");
		assert.equal(vResolved.content.items[1].id, "item2", "Should have correct id.");
		assert.equal(vResolved.content.items[2].id, "item3", "Should have correct id.");
		assert.equal(vResolved.content.items[3], "someid", "Should have correct value in array.");
		assert.equal(vResolved.content.items[4], "", "Should have correct value in array.");
	});

	QUnit.test("Incorrect values - without model", function (assert) {
		var obj = {};
		var arr = [];
		assert.equal(BindingResolver.resolveValue(""), "", "Should have correctly resolved empty string.");
		assert.equal(BindingResolver.resolveValue(undefined), undefined, "Should have correctly resolved undefined.");
		assert.equal(BindingResolver.resolveValue(null), null, "Should have correctly resolved null.");
		assert.equal(BindingResolver.resolveValue(true), true, "Should have correctly resolved true.");
		assert.equal(BindingResolver.resolveValue(false), false, "Should have correctly resolved false.");
		assert.equal(BindingResolver.resolveValue(obj), obj, "Should have correctly resolved empty object.");
		assert.equal(BindingResolver.resolveValue(arr), arr, "Should have correctly resolved empty array.");
	});

	QUnit.test("Incorrect values - with model", function (assert) {

		// Arrange
		var oModel = new JSONModel();
		oModel.setData({
			id: "someid"
		});

		var obj = {};
		var arr = [];
		assert.equal(BindingResolver.resolveValue("", oModel), "", "Should have correctly resolved empty string.");
		assert.equal(BindingResolver.resolveValue(undefined, oModel), undefined, "Should have correctly resolved undefined.");
		assert.equal(BindingResolver.resolveValue(null, oModel), null, "Should have correctly resolved null.");
		assert.equal(BindingResolver.resolveValue(true, oModel), true, "Should have correctly resolved true.");
		assert.equal(BindingResolver.resolveValue(false, oModel), false, "Should have correctly resolved false.");
		assert.equal(BindingResolver.resolveValue(obj, oModel), obj, "Should have correctly resolved empty object.");
		assert.equal(BindingResolver.resolveValue(arr, oModel), arr, "Should have correctly resolved empty array.");
	});
});