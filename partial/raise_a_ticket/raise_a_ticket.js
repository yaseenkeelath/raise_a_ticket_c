angular.module("Dots1").controller("RaiseATicketCtrl", function ($scope) {

        $scope.requestBy = ["Option 1", "Option 2"];
        $scope.modeOfRequest = ["Option A", "Option B"];
        $scope.firstdropdown = ["Category 1", "Category 2"];
        $scope.secondDropdown = ["High", "Medium", "Low"];
        $scope.thirdDropdown = ["Group A", "Group B"];
        $scope.fourthDropdown = ["Agent 1", "Agent 2"];

        $scope.formData = {
            requestBySend: "",
            modeOfRequest: "",
            category: "",
            Priority: "",
            Group: "",
            Agent: "",
            subject: "",
            description: "",
        };

        $scope.dataList = [];

      /*   // Function to fetch existing data
        $scope.init = function () {
            dataService.getData().then(
                function (response) {
                    $scope.dataList = response.data;
                },
                function (error) {
                    console.log("Error fetching data", error);
                }
            );
        }; */

     /*    // Function to submit data
        $scope.submitdata = function () {
            dataService.sendData($scope.formData).then(
                function (response) {
                    console.log("Data sent successfully", response.data);
                    // Reset form data after successful submission
                    $scope.formData = {
                        requestBySend: "",
                        modeOfRequest: "",
                        category: "",
                        Priority: "",
                        Group: "",
                        Agent: "",
                        subject: "",
                        description: "",
                    };
                    // Re-fetch data to update the list
                    $scope.init();
                },
                function (error) {
                    console.log("Error sending data", error);
                }
            );
        }; */

        // File upload functionality (if required)
       /*  $scope.myFile = null;
        $scope.uploadFile = function () {
            if ($scope.myFile) {
                const formData = new FormData();
                formData.append("file", $scope.myFile);
                dataService.uploadFile(formData).then(
                    function (response) {
                        console.log(
                            "File uploaded successfully",
                            response.data
                        );
                    },
                    function (error) {
                        console.log("Error uploading file", error);
                    }
                );
            }
        };

        // Initialize controller
        $scope.init(); */
    });
