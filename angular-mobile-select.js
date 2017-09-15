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

   app.directive("ngmSelect", function($rootScope) {
   	return { 
   		restrict: "E",
   		scope: { placeholder: "@", list: "=", selected: "=", property: "@" },
 		template: '<div class="ngm-select" ng-class="{\'ngm-select-input-bottom\':isDropped}">'+
   					'<div class="ngm-select-placeholder">'+
   						'<span class="ngm-select-floating-label" ng-class ="{\'ngm-select-float-label\': selected[property] || selected , \'ngm-select-active-float-label\': isDropped}">{{placeholder}}</span>'+
   					'</div>'+
   					'<div class="ngm-select-selected-item" ng-click="open()">'+
   						'{{selected[property] || selected || placeholder}}'+
   					'</div>'+
   					'<div class="ngm-select-load-container" ng-class={\'ngm-select-backdrop\':isDropped}>'+
	   					'<div class="ngm-select-load-list" ng-if="isDropped">'+
	   						'<div class="ngm-select-load-header">{{placeholder}}</div>'+
	   						'<div class="ngm-select-load-list-container" ng-class={\'ngm-select-full-view\':isFullView}>'+
	   							'<div class="ngm-select-list-item" ng-class={\'ngm-select-disabled-item\':item.disabled} ng-click="item.disabled || select(item)" ng-repeat="item in list">{{item[property] || item}}</div>'+
	   						'</div>'+
	   					'</div>'+
   					'</div>'+
				  '</div>',
		link : function(scope){

			scope.isFullView = false;

			$rootScope.$on("documentClicked", function(inner, target) { 

				if($(target[0]).is(".ngm-select-load-header")){
					scope.$apply(function() {
						scope.isFullView = true;
					});
				}
	 			if (!$(target[0]).is(".ngm-select-selected-item") && !$(target[0]).is(".ngm-select-load-header")) {
	 				scope.$apply(function() { 
						 scope.isDropped  = false;
						 scope.isFullView = false;
					 }); 		
				}
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