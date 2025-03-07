function PartnersController($scope, $http, $routeParams, Partners, $dialog, $translate, $location, PartnerService) {
    $scope.partnerList = [];
    $scope.query = '';
    $scope.totalItems = 0;
    $scope.currentPage = 1;
    $scope.pagination = { limit: 10 };
    $scope.selectedSortType = 'text';

    // ✅ Fix: Correct function name
    $scope.loadPartners = function(page) {
        var queryParam = $scope.query ? '?search=' + encodeURIComponent($scope.query) : '';
        $http.get('/rest-api/partners' + queryParam).then(function(response) {
            $scope.partnerList = response.data.partners;
            $scope.totalItems = response.data.total;
        }).catch(function(error) {
            console.error('Error loading partners:', error);
            alert('Failed to load partners.');
        });
    };

    $scope.triggerSearch = function (event) {
        if (event.keyCode === 13) {
            $scope.loadPartners(1);
        }
    };

    $scope.selectSortType = function (sortOption) {
        $scope.selectedSortType = sortOption.value;
        $scope.loadPartners(1);
    };

    $scope.newPartner = { text: '', code: '' };

    $scope.showAddForm = function() {
        $location.path('/create-partner');
    };

    $scope.createPartner = function () {
        if (!$scope.newPartner.text || !$scope.newPartner.code) {
            alert('Please fill in all required fields.');
            return;
        }

        PartnerService.save('/rest-api/partners/save', $scope.newPartner)
            .then(function (response) {
                alert('Partner created successfully!');
                $scope.newPartner = { text: '', code: '' };
                $location.path('/partners');
            })
            .catch(function (error) {
                console.error('Error creating partner:', error);
                alert('Failed to create partner. Please try again.');
            });
    };

    $scope.editPartner = function (id) {
        $location.path('/edit-partner/' + id);
    };

    $scope.deletePartner = function (id) {
        if (confirm('Are you sure you want to delete this partner?')) {
            PartnerService.delete('/rest-api/partners/' + id)
                .then(function () {
                    alert('Partner deleted successfully!');
                    $scope.loadPartners(1);
                })
                .catch(function (error) {
                    console.error('Error deleting partner:', error);
                    alert('Failed to delete partner.');
                });
        }
    };

    $scope.clearSearch = function () {
        $scope.query = '';
        $scope.loadPartners(1);
    };

    $scope.loadPartners(1);
}
