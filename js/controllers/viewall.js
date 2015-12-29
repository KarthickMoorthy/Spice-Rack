// create angular controller
var news= angular.module('Spicerack-app');
news.controller('viewallController', function($scope,$http,$location,$timeout) {


 // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid, user) {
      console.log('view reservation enter');

        
        
        
        var jsonData = JSON.stringify(regData);
        console.log(jsonData);

        
        var request = $.ajax({
          url: 'http://localhost:8080/Spicerack/rest/cust/news',
          type: 'POST',
          data:jsonData,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          dataType: 'json',
		  complete: function(response) {
              console.log(response.responseText);
              // $timeout(function() {
               
              $scope.$apply();
              
             // });//end time out here
          }
         
        }); // */ //END OF AJAX
      

  }  //
  
  
});
