var task_manager_app = angular.module('appTaskManager', []);
task_manager_app.controller('ctrl_task', function ($scope, $http){
	$http.get("task.json").then(function (response) {
      		$scope.task = response.data.tasks;
  	});

  	$scope.sort_options = ['title', '-task_priority', '-created_at'];
  	$scope.filter_options = ['High', 'Low', 'Normal'];
           $scope.add = function(){
	      	// var date = new Date();
	       //     $scope.ddMMMMyyyy = $filter('date')(new Date(), 'dd, MMMM yyyy');
	       	$scope.created_at = new Date();
	       	$scope.task.push({ title: $scope.title, description: $scope.description, created_at: $scope.created_at, task_priority : $scope.task_priority });
		$scope.title = '';
		$scope.description = '';
		$scope.created_at ='';
		$scope.task_priority = '';

	        	setTimeout(function(){
		  	$('.overlay').removeClass('active');
			$('.pop-up').hide();
	  	},1500)
        	}
})
/***************************************************
COMMON JS
***************************************************/
$(document).ready(function(){	
	header_height();

	$('.overlay, .pop-up-close').click(function(){
		$('.overlay').removeClass('active');
		$('.pop-up').hide();
	})
	$('.btn-add-new-task').click(function(){
		$('.overlay').addClass('active');
		$('.new-task-form').show();
	})

	$('.btn-attach-other').click(function(){
		$('.doc-upload-wrapper').append('<div class="form-group"><input type="file" class="form-control" id="document_id" placeholder="Document Name" name="name" accept="file_extension"/></div>')
	})
	$('html, body').on('click', '.links-wrapper>.read-more', function(e){
		e.preventDefault()
		$('.task-details-popup').show();
		$('.overlay').addClass('active')
		var txt= $(this).parents('li').html()
		$('.task-details-popup .popup-content').html(txt)
	})
})

$(window).resize(function(){
	header_height()
})
function header_height(){
	var header_ht = $('header').outerHeight()+15;
	$('.content-wrapper').css({
		'padding-top': header_ht+'px'
	})
}
