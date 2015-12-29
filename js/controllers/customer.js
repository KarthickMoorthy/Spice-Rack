
angular.module('Spicerack-app').controller('customerController', function($scope,$http,$filter,$location) {
        
  $scope.submitForm = function(isValid,user) {

        //console.log(user);
        user.email = localStorage.email2;
        var jsonData = JSON.stringify(user);
        console.log(jsonData);
      var request = $.ajax({
          url: 'http://localhost:8080/DataSynchWmr/rest/personel/save',
          type: 'POST',
          data:jsonData,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          dataType: 'json',
		  complete: function(response) {
              if(response.responseText == 'success'){
                console.log("customerdetails success");
                $scope.msgalert='customer data saved succesfully.Click continue';
              }
              else if(response.responseText == 'emailExist'){
                 console.log("email exists");
                 //alert('Email is already in use, Please Register with different email, or login in with existing');
                 $scope.msgalert='You have already saved Personal info'; 
                //$location.path('/login');
              }
              else if(response.responseText == 'noemail'){
                  $scope.msgalert='Please Log In Once again to continue'; 
                console.log("no email provided");
                $location.path('/login');
              }
              else if(response.responseText == 'fail'){
                $scope.msgalert='Customer Detail not saved Please ensure all fields are entered properly';
              }
              $scope.$apply();
          }
          
        });
     
  }
  $scope.mycontinue= function(){
          $location.path('/viewall');
        };
  

});







 