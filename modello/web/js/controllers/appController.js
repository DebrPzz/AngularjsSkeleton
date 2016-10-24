app.controller('AppController', function(){
    
   var vm=this;
   vm.nav = [
       {
           url:'#/',
           title:'Home'
       },
       {
           url:'#/register',
           title:'Registro'
       }
   ];
   vm.today = new Date();
});
