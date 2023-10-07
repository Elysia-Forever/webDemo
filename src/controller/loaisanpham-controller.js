window.LoaiCtrl = function($scope,$http){
$scope.loaispTable = [];
 $scope.nhapDL = {
    tenLoai : ""
 };
 
$http.get(LoaiSPAPI).then(function(response){
    $scope.loaispTable = response.data;
})
 //THêm loại sản phẩm 
 $scope.themLoaisp = function(event){
    event.preventDefault();
    $http.post(LoaiSPAPI,$scope.nhapDL).then(function(response){
        alert('thêm thành công')
    })
 }
 //xoas loai sp
 $scope.xoaLoaisp = function(event,index,id){
    event.preventDefault();
    let xoa = LoaiSPAPI + "/" + id;
    $http.delete(xoa).then(function(){
        alert('Xóa thành công')
    })
 }

 //Chọn dòng trên table
 $scope.selectLoaisp = function(event,index,id){
    event.preventDefault();
    $scope.viTri1 = $scope.loaispTable[index];

    alert('Đã chọn hãng sản phẩm thứ '+ (Number(index)+1) )
 }
 //sửa loai sp
 $scope.suaLoaisp = function(event){
    event.preventDefault();
    let id = $scope.viTri1.id;
    let ap = LoaiSPAPI +"/"+ id;
    $http.put(ap,$scope.nhapDL).then(function(){

    })
 }
}
