app.directive ('appNav', function(){
    return { 
    restrict: 'E', 
    scope: { 
      items: '=' 
    }, 
    templateUrl: 'views/appNav.html' 
  };  
});