
define(
    //-------------------------------------------------------------------
    // DEPENDENCIES
    //-------------------------------------------------------------------
    ['jquery', 'knockout','ccRestClient','navigation','ccConstants'],
    //-------------------------------------------------------------------
    // MODULE DEFINITION
    //-------------------------------------------------------------------
    function ($, ko,ccRestClient,navigation,ccConstants) {

        "use strict";

        var widgetViewModel;

        return {
			
		titulo: ko.observable(),			

		onLoad: function (widget){
			widgetViewModel = widget;

			widgetViewModel.titulo("1° Titulo");

			setTimeout(function(){					
				widgetViewModel.titulo("2° Nuevo Titulo");				
			},3000);


		},
		beforeAppear: function(){	   

		}
        };
    }
);
