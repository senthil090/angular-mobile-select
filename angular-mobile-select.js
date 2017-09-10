(function()
{
    'use strict';



  var app =  angular
        .module('ngmobileselect',['ngAnimate'])

  app.run(function($rootScope) { 
	angular.element(document).on("click", function(e) { 
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
		 }); 
	});

   app.controller('angularTest', ['$scope','$rootScope',
                                         function($scope,$rootScope) {
      	$scope.country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe"];

		$scope.country = "Zimbabwe";

		$scope.switcher =[ {"key":"Yes"},{"key":"No"}]

		$scope.switch = "";

	}]);

   app.directive("ngmSelect", function($rootScope) {
   	return { 
   		restrict: "E",
   		scope: { placeholder: "@", list: "=", selected: "=", property: "@" },
 		template: '<div class="ngm-select" ng-class="{\'ngm-select-input-bottom\':isDropped}">'+
   					'<div class="ngm-select-placeholder">'+
   						'<span class="ngm-select-floating-label" ng-class ="{\'ngm-select-float-label\': selected[property] || selected}">{{placeholder}}</span>'+
   					'</div>'+
   					'<div class="ngm-select-selected-item" ng-click="open()">'+
   						'{{selected[property] || selected || placeholder}}'+
   					'</div>'+
   					'<div class="ngm-select-load-container">'+
	   					'<div class="ngm-select-load-list" ng-if="isDropped">'+
	   						'<div class="ngm-select-load-header">{{placeholder}}</div>'+
	   						'<div class="ngm-select-load-list-container">'+
	   							'<div class="ngm-select-list-item" ng-click="select(item)" ng-repeat="item in list">{{item[property] || item}}</div>'+
	   						'</div>'+
	   					'</div>'+
   					'</div>'+
				  '</div>',
		link : function(scope){
			$rootScope.$on("documentClicked", function(inner, target) { 
	 			if (!$(target[0]).is(".ngm-select-selected-item")) 
	 				scope.$apply(function() { 
	 					scope.isDropped  = false;
	 				}); 
	 						
	 					
	 		});

	 		scope.open = function(){
	 			scope.isDropped = true;
	 		}

	 		scope.select = function(item){
	 			scope.selected = item;
	 		}
		}
   	}

    });

   app.animation('.ngm-select-load-list', function() {
		return {
		enter: function(element, done) {
			$(element).hide().slideDown();
			return function(cancelled) {

			};
		},
		leave: function(element, done) {
			$(element).slideUp();
		}
		};
   });



 })();