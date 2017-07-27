app.controller('projectCtrl', function($scope, $routeParams) {
	$scope.projectName = project[$routeParams.id].projectName;
	$scope.description = project[$routeParams.id].description;
	$scope.date = project[$routeParams.id].date;
	$scope.technic = project[$routeParams.id].technic;
	$scope.tag = project[$routeParams.id].tag;
	$scope.categories = project[$routeParams.id].categories;
	$scope.website = project[$routeParams.id].website;
});

let project = [{"projectName":"Video Menagement Dashboard",
				"description":"this project",
				"image":"",
				"date":"1",
				"technic":"2",
				"tag":"3",
				"categories":"4",
				"website":"5"},

				{}];