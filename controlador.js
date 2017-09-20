(function(){
  angular
  .module('directivas', [])

  .directive('usuario', function() {
    var valoresInternos = {};

    valoresInternos.scope={
      nombreUsuario : '@nombre',
      apellidoUsuario : '@apellido'
    }
      valoresInternos.template = "¡Bienvenido {{nombreUsuario}} {{apellidoUsuario}}!";

    return valoresInternos;
  });


})();

(function () {

  angular
  .module('estilos', [])

  .controller('controladorEstilos', ["$scope", function ($scope){

    $scope.imagenActiva = 'http://jorgesanchezmartinez.com/wp-content/uploads/2017/02/aceptar_incertidumbre_jorge_sanchez_martinez.png'



    $scope.opcionA = function () {
      $scope.imagenActiva = 'https://www.callofduty.com/content/dam/atvi/callofduty/hub/main-hub/iw-hub/common/nav/aw-art.jpg'
      $scope.opcion ='a'
    }

    $scope.opcionB = function () {
      $scope.imagenActiva ='https://store.playstation.com/store/api/chihiro/00_09_000/container/ID/en/999/UP0002-CUSA03005_00-ASIACODBO3GAME01/1502366730000/image?_version=00_09_000&platform=chihiro&w=225&h=225&bg_color=000000&opacity=100'
      $scope.opcion = 'b'
    }

    $scope.cambiarEstilo = function () {
      $scope.estilosAngular = {
         width:'600px',
         height:'200px',
         borderRadius:'10px'
       }
    }

    $scope.cambiarClase = function () {
      $scope.clasesAngular = 'segundoEstilo'
    }

    $scope.ocultarCaja = function () {

      $scope.ocultar_menu = true;
    }

    $scope.mostrarCaja = function () {
      $scope.ocultar_menu = false
    }

  }]);


})();



(function () {

angular
.module('eventosApp', [])

.controller('eventoscontroller',["$scope", function($scope) {
  $scope.a ="diego"
$scope.conteoClicks = 0;
$scope.saludo = function(){
$scope.conteoClicks++
}
}])
})();
(function () {
  angular
  .module('mytodo', [])
  .controller('controladortodo', function($scope){
      $scope.todolista = [{texto:'Aqui se agregan tus tareas', done:false}];

      $scope.todoagregar = function() {
          $scope.todolista.push({texto:$scope.input, done:false});
          $scope.input = "";
      };

      $scope.borrar = function() {
          var oldList = $scope.todolista;
          $scope.todolista = [];
          angular.forEach(oldList, function(x) {
              if (!x.done) $scope.todolista.push(x);
          });
          
      };
  });
}());
