var app = angular.module('controllers.home', []);

app.controller('HomeController', function (SocketService) {
    var vm = this;

    vm.doEmit = function () {
        console.log(SocketService);
        SocketService.emit('join:room', 'Room 1');
    };
});