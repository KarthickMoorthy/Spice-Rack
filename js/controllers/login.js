angular.module('Spicerack-app').controller('loginController', function($scope,$location,$http,$rootScope) {
    
    
  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid, give) {
        
    // check to make sure the form is completely valid
        localStorage.loginflag= false;
        
        console.log(localStorage.loginflag);
        var flag = false;
        
        var loginData = {   
            "email": give.email,
            "password":give.password1
            
        }
        var jsonData = JSON.stringify(loginData);
        
      
        var request = $.ajax({
            
          url: 'http://localhost:8080/Spicerack/rest/login/auth',
          type: 'POST',
          data:jsonData,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          dataType: 'json',
		  complete: function(response) {
              if(response.responseText == 'success'){ 
                  console.log("login success");
                  localStorage.email2 = give.email;
                  localStorage.loginflag=true;
                  flag = true;
                  $location.path('/customerdetails');
              }
              else if(response.responseText == 'fail'){
                  flag = false;
                  localStorage.loginflag=false;
                   //$location.path('/login');
                   console.log(localStorage.loginflag);
                   $scope.msgalert='Login Failed. Email and Password incorrect';
              }
              $scope.$apply();
          }
          
        }); 
      

  }
  
  $scope.mywelcome = function($rootScope) {
       console.log(localStorage.email2);
       $rootScope.greeting=localStorage.email2;
       console.log(greeting);
     
  }
});