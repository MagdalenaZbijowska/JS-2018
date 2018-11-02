angular.module('myApp.controllers').controller('secondCtrl',
    ['$rootScope','$scope', '$http', '$window', '$log',
        function ($rootScope, $scope, $http, $window, $log) {
            /////////////////////////////////////////////////////////////
            console.log('Loading second controller');
            $scope.M = {};

            $scope.M.bokA = 0;
            $scope.M.bokB = 0;
            $scope.M.bokC = 0;

            $scope.sprawdzTrojkat = function() {
                $scope.xxx = (Math.random() * 10);

                // == oznacza sprawdzenie czy lewa storna równa się prawej
                if ($scope.M.bokA==0) {
                    $scope.M.wynik = 'Bok A jest 0 -- trójkąt nie istnieje!';
                    return;
                }
                if ($scope.M.bokB==0) {
                    $scope.M.wynik = 'Bok B jest 0 -- trójkąt nie istnieje!';
                    return;
                }
                // A + B > C
                // A + C > B
                // B + C > A


                $scope.M.wynik = 'OK -- trójkąt istnieje';
            };

            $scope.liczbaMniejsza = function () {
                let a = $scope.A;
                let b = $scope.B;

                if (a<b) {
                    return "Liczba a jest mniejsza";
                } //...
                return "abc";
            };


        }
    ]
);