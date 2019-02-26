/*!
 * ${copyright}
 */

/*
 * Bootstrap to use sap ui integration in a HTML page in local evironment
 *
 * CAUTION: This file is only used in local test environments and cause individual loading of required files
 *          In production this file is replaced with an optimized bundling needed for Cards.
 *
 * - Initialize the ui5 loader
 * - Initialize custom element registration
 * - Based on the dependencies (tags that should be used) automatic registration of these tags
 *   tags are additionally maintained in the library.js file
 * Usage:
 *   <script src="https://some/path/sap-ui-integration.js" id="sap-ui-bootstrap" data-sap-ui-theme="sap_fiori_3">
 *   </script>
 *
 *   <ui-card manifest="./path/to/manifest" />
 */

(function (window) {
	"use strict";

	//extract base URL from script tag
	var oScriptTag, mMatch, sBaseUrl;
	var coreInstance,
		CustomElements;
	//identify the own script include
	oScriptTag = document.getElementById("sap-ui-bootstrap");

	if (oScriptTag) {
		mMatch = /^(?:.*\/)?resources\//.exec(oScriptTag.getAttribute("src"));
		if (mMatch) {
			sBaseUrl = mMatch[0];
		}
	}

	if (sBaseUrl == null) {
		throw new Error("sap-ui-boot.js: could not identify script tag!");
	}

	function loadScripts(urls, callback) {
		var pending = urls.length,
			errors = 0;

		if (pending === 0) {
			callback();
			return;
		}

		function listener(e) {
			pending--;
			if ( e.type === 'error' ) {
				errors++;
			}
			e.target.removeEventListener("load", listener);
			e.target.removeEventListener("error", listener);
			if ( pending === 0 && errors === 0 && callback ) {
				callback();
			}
		}

		for ( var i = 0; i < urls.length; i++ ) {
			var script = document.createElement("script");
			script.addEventListener("load", listener);
			script.addEventListener("error", listener);
			script.src = sBaseUrl + urls[i];
			document.head.appendChild(script);
		}
	}

	// define the necessary polyfills to be loaded
	var aPolyfills = [];
	if (/(trident)\/[\w.]+;.*rv:([\w.]+)/.exec(window.navigator.userAgent)) {
		aPolyfills.push("sap/ui/thirdparty/baseuri.js");
		aPolyfills.push("sap/ui/thirdparty/es6-promise.js");
		aPolyfills.push("sap/ui/thirdparty/es6-shim-nopromise.js");
	} else if (/(Version\/(11\.0)|PhantomJS).*Safari/.test(window.navigator.userAgent)) {
		// for Safari 11.0 the Promise polyfill is still needed
		aPolyfills.push("sap/ui/thirdparty/es6-promise.js");
	}

	// cascade 1: polyfills, can all be loaded in parallel
	loadScripts(aPolyfills, function () {
		// cascade 2: the loader
		loadScripts([
			"ui5loader.js"
		], function () {
			// cascade 3: the loader configuration script
			sap.ui.loader.config({
				async: true
			});
			loadScripts([
				"ui5loader-autoconfig.js"
			], function () {
				boot();
			});
		});
	});

	//initialize the loader
	function boot() {
		if (window.sap && window.sap.ui && window.sap.ui.getCore) {
			coreInstance = window.sap.ui.getCore();
			return initTags();
		}
		window.sap.ui.require(['/ui5loader-autoconfig', 'sap/ui/core/Core', 'sap/ui/integration/util/CustomElements'],
			function (config, Core, CE) {
				CustomElements = CE;
				Core.boot();
				coreInstance = Core;
				Core.attachInit(function () {
					initTags();
				});
				//pass on the core instance to Customelements interface
				CustomElements.coreInstance = coreInstance;
			});

	}

	function registerLibraryTags(sLibrary) {
		var oLibrary = coreInstance.getLoadedLibraries()[sLibrary];
		//collect the prefix and the relevant tags
		var sPrefix = oLibrary.defaultTagPrefix,
			aTags = Object.keys(oLibrary.customTags);

		//collect all the implementation classes and require them
		window.sap.ui.require(
			aTags.map(
				function (o, i) {
					return oLibrary.customTags[aTags[i]];
				}
			),
			function () {
				//after require, register the tags via CustomElements
				var args = arguments;
				aTags.forEach(
					function (o, i) {
						CustomElements.registerTag(aTags[i], sPrefix, args[i]);
					}
				);
			});
	}

	function initTags() {
		//need to wait for the onload event of the window to ensure that the MutationObserver reacts
		window.addEventListener("load", function () {
			//load the lib(s) and register
			coreInstance.loadLibraries(["sap/ui/integration"], {
				async: true
			}).then(function () {
				//register the tags for this library
				registerLibraryTags("sap.ui.integration");
			});
		});

	}
})(window);