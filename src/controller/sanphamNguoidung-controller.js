// json-server --watch db.json

window.SanphamCtrl = function ($scope, $http) {
  $scope.danhsachSP = [];
  $scope.dsLoaiSP = [];

  $http.get(SanphamAPI).then(function (response) {
    if (response.statusText == "OK") {
      $scope.danhsachSP = response.data;
    }
  });


  $http.get(LoaiSPAPI).then(function (response) {
    if (response.statusText == "OK") {
      $scope.dsLoaiSP = response.data;
    }
  });

  //ALL
  $scope.all = function (event) {
    event.preventDefault();
    $http.get(SanphamAPI).then(function (response) {
      $scope.danhsachSP = response.data;
    });
  };

  //Áo
  $scope.ao = function (event) {
    event.preventDefault();
    let sp = SanphamAPI + "?LoaiSP=ao";
    $http.get(sp).then(function (response) {
      $scope.danhsachSP = response.data;
    });
  };

  //Quần 
  $scope.quan = function (event) {
    event.preventDefault();
    let sp = SanphamAPI + "?LoaiSP=quan";
    $http.get(sp).then(function (response) {
      $scope.danhsachSP = response.data;
    });
  };

  //Loai sp
$scope.loaiSP = function (event,ten) {
event.preventDefault();
let loai = SanphamAPI + "?hang=" + ten;
$http.get(loai).then(function (response) {
  $scope.danhsachSP = response.data;
});
}
  
};
