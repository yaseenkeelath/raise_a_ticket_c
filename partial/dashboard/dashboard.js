/* global Chart */
angular
    .module("Dots1")
    .controller("DashboardCtrl", function ($scope) {
        $scope.ticketdata = {
            assigned: 178,
            resolved: 177,
            unresolved: 1,
            unassigned: 178,
            pending: 1,
            overdue: 0,
            duetoday: 0,
            duetommorow: 0,
        };

        $scope.buttontype = function (type) {
            if ($scope.mybarchart) {
                $scope.mybarchart.destroy();
            }
            $scope.mybarchart = new Chart(
                document.getElementById("mybarchart").getContext("2d"),
                {
                    type: type,
                    data: {
                        labels: [
                            "1 hour",
                            "2 hours",
                            "3 hours",
                            "4 hours",
                            "5 hours",
                            "6 hours",
                            "7 hours",
                            "8 hours",
                            "9 hours",
                            "10 hours",
                        ],
                        datasets: [
                            {
                                label: "Assigned Data",
                                data: [10, 15, 8, 12, 6, 9, 11, 7, 13, 10],
                                backgroundColor: "rgb(0,128,0)",
                                borderColor: "rgba(255, 99, 132, 1)",
                                borderWidth: 1,
                            },
                            {
                                label: "Resolved within SLA",
                                data: [8, 10, 5, 9, 4, 7, 8, 6, 11, 9],
                                backgroundColor: "rgb(255, 0, 127)",
                                borderColor: "rgba(54, 162, 235, 1)",
                                borderWidth: 1,
                            },
                            {
                                label: "Resolved outside SLA",
                                data: [2, 5, 3, 3, 2, 2, 3, 1, 2, 1],
                                backgroundColor: "rgba(0, 0, 255)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "Hours",
                                    color: "#333",
                                    font: {
                                        size: 16,
                                    },
                                },
                            },
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: "Count",
                                    color: "#333",
                                    font: {
                                        size: 16,
                                    },
                                },
                            },
                        },
                    },
                }
            );
        };
        $scope.buttontype("bar");
    });
