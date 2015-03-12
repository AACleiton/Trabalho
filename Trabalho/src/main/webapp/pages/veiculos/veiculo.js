module = angular.module("Prova", []);

module.controller("VeiculoController", ["$scope","$http", VeiculoController]);


function VeiculoController($scope,$http) {
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.veiculos = [];
    $scope.veiculo = {};
    $scope.isNovo = true;
    
    function funcaoEditar(vitima) {
        $scope.veiculo = angular.copy(vitima);
        $scope.isNovo = false;
    }

    
    function funcaoExcluir(vitima) {
    }
    
    function funcaoSalvar() {
    }
    
    function funcaoCarregar() {
        $http.get("/veiculos").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.veiculos = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        console.log(">>> veículos carregados....");
    }
        
}


