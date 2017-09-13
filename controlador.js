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

  var misEstilos =angular

  .module('estilosApp', []);
  misEstilos

  .controller('controladorEstilos', function ($scope){

  $scope.opcionA = function () {

  }

  $scope.opcionB = function () {

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

  $scope.ocultarMenu = true

  }
  $scope.mostrarCaja = function () {
    $scope.ocultarMenu = false

  }

  })


});
