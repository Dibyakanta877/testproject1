/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["testproject1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
