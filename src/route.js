var app = angular.module("myModule", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: NhanvatController,
    })
    .when("/shop", {
      templateUrl: "./pages/shop.html",
      controller: SanphamCtrl,
    })
    .when("/blog", {
      templateUrl: "./pages/blog.html",
    })
    .when("/page", {
      templateUrl: "./pages/page.html",
    })
    .when("/contact", {
      templateUrl: "./pages/contact.html",
    })
    .when("/home/detail/:id", {
      templateUrl: "./pages/detail.html",
      controller: "detailTrangchuCtrl",
    })
    .when("/giohang", {
      templateUrl: "pages/giohang.html",
    })
    .when("/da-mua", {
      templateUrl: "pages/sp-da-mua.html",
    })
    .when("/tintuc", {
      templateUrl: "pages/tintuc.html",
    })
    .when("/lienhe", {
      templateUrl: "pages/lienhe.html",
    })
    .when("/shop/detail1/:id", {
      templateUrl: "pages/detal-shop.html",
      controller : shopDetailCtrl
    })
    .when("/qlsp",{
      templateUrl: "pages/quanlysp.html",
      controller : SanphamTableCtrl
    })
    .when("/qlLoaisp",{
      templateUrl : "pages/quanlyLoaisp.html",
      controller : LoaiCtrl
    })
    .otherwise({
      redirectTo: "/home",
    });
});

app.controller(
  "detailTrangchuCtrl",
  function ($scope, $rootScope, $routeParams) {
    var id = $routeParams.id;
    var arr = $rootScope.listNhanvat;
    for (let index = 0; index < arr.length; index++) {
      if (id == arr[index].id) {
        $scope.detailTC = arr[index];
      }
    }
  }
);
