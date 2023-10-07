window.shopDetailCtrl = function($scope,$routeParams,$http){
 $scope.det = {};   
let id = $routeParams.id;
let duongdan = SanphamAPI + "/" + id;    
$http.get(duongdan).then(function(response){
if(response.statusText == "OK"){
    $scope.det = response.data;
}
console.log($scope.det)
})

}