sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "jquery.sap.global",
],

function (Controller, JSONModel, jquery) {
    "use strict";
    return Controller.extend("customActivity.Teste2", {
        onInit: function (username) {
                var oModel = new JSONModel();
                debugger;
               oModel.loadData("/XMII/Illuminator?QueryTemplate=" + "KLima/MDO_selColaborador" + 
                    "&Param.1=" + username + 
                    "&Content-Type=text/json", "", false); 
               return oModel;
        },    

    });

}
);

//this.getView().setModel(_username,"Usarname")

//this._oDetailDialog.setModel(new JSONModel(oRequest), "dialogModel");
