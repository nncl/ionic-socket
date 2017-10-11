var app = angular.module('controllers.home', []);

app.controller('HomeController', function (SocketService) {
    var vm = this;
    vm.msg = null;

    vm.doListen = function () {
        SocketService.on('message', function (msg) {
            console.log('Received new message', msg);
            vm.msg = msg;
        });
    };

    vm.doListen();
});