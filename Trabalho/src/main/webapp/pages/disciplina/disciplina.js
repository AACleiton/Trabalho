module = angular.module("App", []);

module.controller("DisciplinaController", ["$scope","$http", DisciplinaController]);


function DisciplinaController($scope,$http) {
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    $scope.atualizar = funcaoCarregar();
    
    $scope.disciplinas = [];
    $scope.disciplina = {
        id : "",
        nome : "",
        cargaHoraria : "",
        peso : ""
    };
    
    $scope.isNovo = true;
    
    function funcaoEditar(vitima) {
        $scope.disciplina = angular.copy(vitima);
        $scope.isNovo = false;
    }

    function sucesso(){
        alert("sucesso");
        funcaoCarregar();
    }
    
    function erro(){
        alert("algo deu errado");
    }

    function funcaoExcluir(vitima) {
        $http.delete("/disciplinas/" + vitima.id, vitima).success(sucesso).error(erro);
    }
    
    function funcaoSalvar() {
        if($scope.isNovo){
            $http.post("/disciplinas",$scope.disciplina).success(sucesso).error(erroDeTipos);
            $scope.isNovo = true;
        }else{
            $http.put("/disciplinas/" + $scope.disciplina.id, $scope.disciplina).success(sucesso).error(erro);
        }
        
        function erroDeTipos(){
            alert("Verifique se os campos estão com os dados corretos!!!!!!!");
        }
    }
    
    function funcaoCarregar() {
        $http.get("/disciplinas").success(onSuccess).error(onError);
        
        function onSuccess(data, status) {
            $scope.disciplinas = data;       
            console.log(data);
        }
        function onError(data, status) {
            alert("Deu erro: " + data);
        }
    }
    
    function funcaoIniciar() {
        funcaoCarregar();
        console.log(">>> Disciplinas carregadas....");
    }
        
}

