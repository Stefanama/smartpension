'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('smartpensionApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

  }));

  it('should add a signatory to the company', function () {
        scope.company = {
            email: '',
            registration_number: null,
            legal_structure: '',
            name: '',
            signatories: [],
            admins: [{
                    email: '',
                    forename: '',
                    surname: ''
                    }
                    ]
        };
      
      
        scope.signatory={
            email: 'amarie.stefan@gmail.com',
            forename: 'Stefan',
            surname: 'Amarie'
        };
      
        scope.addSignatories(scope.signatory);
      
      expect(MainCtrl.company.signatories[0].email).toBe('amarie.stefan@gmail.com');
  });
});
