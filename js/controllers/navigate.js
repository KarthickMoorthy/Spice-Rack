angular.module('Spicerack-app').controller('navctrl', function($scope,$location,$http,$rootScope) {
   
  
  $scope.isLoggedIn = function(loggedIn) {
      
       $scope.loggedIn=localStorage.loginflag;

        if(loggedIn ==  'true'){
            //console.log('Validate JS true');
            //console.log(loggedIn);
            if (typeof localStorage.loginflag != 'undefined'){
              $rootScope.greeting=localStorage.email2;  
            }
            return loggedIn;
             $scope.$apply();
        }
      else{
           //console.log('Validate JS false');
            return false;  
           $scope.$apply();
      }
  }
  
  
  
  $scope.mylogout= function(){
           localStorage.loginflag=false;
           localStorage.clear();
           
            $location.path('/');
        }
    });