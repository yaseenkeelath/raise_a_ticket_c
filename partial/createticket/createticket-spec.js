describe('CreateticketCtrl', function() {

    beforeEach(module('Dots1'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('CreateticketCtrl', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);
        
    }));

});