angular
    .module("Dots1", ["ui.bootstrap", "ui.router", "ngAnimate"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/raiseAticket");

        $stateProvider
            .state("raiseAticket", {
                url: "/raiseAticket",
                templateUrl: "partial/raise_a_ticket/raise_a_ticket.html",
                controller: "RaiseATicketCtrl",
            })
            .state("changePassword", {
                url: "/changePassword",
                templateUrl: "partial/tickets/tickets.html",
                controller: "TicketsCtrl",
            })
            .state("dashboard", {
                url: "/dashboard",
                templateUrl: "partial/dashboard/dashboard.html",
                controller: "DashboardCtrl",
            })
            .state("resources", {
                url: "/resources",
                templateUrl: "partial/resources/resources.html",
                controller: "ResourcesCtrl",
            })
            .state("login", {
                url: "/login",
                templateUrl: "partial/login/login.html",
                controller: "LoginCtrl",
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "partial/signup/signup.html",
                controller: "SignupCtrl",
            })
            .state('creatTicket',{
                url:'/creatTicket',
                templateUrl:'partial/createticket/createticket.html',
                controller:'CreateticketCtrl',
            });
    })
    .run(function ($rootScope) {
        $rootScope.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === "$apply" || phase === "$digest") {
                if (fn && typeof fn === "function") {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };
    });
