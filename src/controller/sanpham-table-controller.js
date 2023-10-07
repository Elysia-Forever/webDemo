window.SanphamTableCtrl = function ($scope, $http) {
  $scope.spTable = [];
  $scope.input_sp = {
    hang: "doran",
    name: "",
    price: 1,
    image: "1.jpg",
    LoaiSP: "quan",
    id: "",
  };

$scope.LoaiSP_input = [];
//ĐẨY dữ liệu lên option
$http.get(LoaiSPAPI).then(function(response){
  $scope.LoaiSP_input = response.data;
  console.log($scope.LoaiSP_input)
})

//Load table
  $http.get(SanphamAPI).then(function (response) {
    if (response.statusText == "OK") {
      $scope.spTable = response.data;
    }
  });

  //xóa
  $scope.xoasp = function (event, index, id) {
    event.preventDefault();

    let api = SanphamAPI + "/" + id;
    $http.delete(api).then(function () {
      alert('Xóa thành công')
    });
  };

  //detail
  $scope.detailsp = function (event, id, index) {
    event.preventDefault();
  
    let api = SanphamAPI + "/" + id;
    $http.get(api).then(function (response) {
      $scope.input_sp = response.data;
    });
    $scope.viTri = $scope.spTable[index];
  };
  //Thêm sp
  $scope.themsp = function (event) {
    event.preventDefault();
    let a = document.getElementById("inputGroupFile01").files[0].name;
    $scope.input_sp.image = a;
    $http.post(SanphamAPI, $scope.input_sp).then(function () {});
  };

  //Sửa sp
  $scope.suasp = function (event) {
    event.preventDefault();
   let a = SanphamAPI + "/" + $scope.viTri.id;
   $http.put(a,$scope.input_sp).then(function () {
 alert("Sửa thành công")
  })
};
}
