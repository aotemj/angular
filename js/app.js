(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var todoApp =angular.module("todoApp",[]);
	todoApp.controller("todoController",["$scope",function($scope){
		$scope.arr=[];
		/*1.添加数据*/
		$scope.add=function(){
			if(!$scope.newItem) return;
			$scope.arr.push({
				"id":Math.random(),
				"name":$scope.newItem,
				"completed":false
			});
			/*添加完成后清空输入框*/
			$scope.newItem="";
		};
/*2.删除数据*/
	$scope.delete=function($index){
		$scope.arr.splice($index,1);
	};
/*3.修改事件内容*/
	$scope.change=function($index){
		$scope.isEditingId=$index;
	};
	$scope.save=function(){
		console.log("1");
		$scope.isEditingId=-1;
	};
	/*4.批量修改事件状态*/
		$scope.toggleAll=function(){
			for(var k in $scope.arr){
				$scope.arr[k].completed=$scope.checkAll;
			}
		};

	/*5.添加修改事件的总数*/
	$scope.getCount=function(){
		var count=0;
		for(var k in $scope.arr){
			if($scope.arr[k].completed==false){
				count++;
			}
		}
		return count;
	};

	/*6.批量清除已完成事件*/
	$scope.remove=function(){
		for(var i =$scope.arr.length-1;i>=0;i--){
			if($scope.arr[i].completed==true){
				$scope.arr.splice(i,1);
			}
		}
	};
	/*7.过滤显示数据:*/
	$scope.all=function(){
			$scope.isCompleted={undefined};
	};
	$scope.active=function(){
		$scope.isCompleted={"completed":false};
	};
	$scope.completed=function(){
		$scope.isCompleted={"completed":true};
	};
	/*8.添加过滤显示数据样式:*/
	// <a ng-class="{selected:isCompleted.completed==undefined}" href="#/" ng-click="all()">All</a>
		}]);
})(angular);
