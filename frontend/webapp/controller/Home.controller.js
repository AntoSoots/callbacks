sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Home", {
		onInit: function () {
			var oTable = this.getView().byId("table");
			oTable.bindItems({
				path: "calls>/",
				template: new sap.m.ColumnListItem({
					cells: [
						new sap.m.Text({
							text: "{calls>start}"
						}),
						new sap.m.Text({
							id: "GUID",
							text: "{calls>GUID}",
							visible: false
						}),
						new sap.m.Text({
							text: "{calls>queuename}"
						}),
						new sap.m.Text({
							text: "{calls>OrigCallerNbr}"
						}),
						new sap.m.Button({
							text: "{i18n>delete}",
							type: "Transparent",
							icon:"sap-icon://delete",
							press: function(oEvent) {
								var oItem = oEvent.getSource().getParent();
								var iIndex = oEvent.getSource().getParent().getParent().indexOfItem(oItem);
								var oCallbackId = sap.ui.getCore().byId("GUID-__clone"+iIndex).getProperty("text");			
								$.ajax({
									url: "http://localhost:3000/backend/delete.php",
									type: "POST",
									data: {id: oCallbackId},
								})
							}
							
						})
					]
				})
			});
			oTable.setGrowing(true);
			oTable.setGrowingThreshold(50);
		}
	});
});