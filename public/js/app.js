angular.module('stringClass', []).
  controller('stringCtrl', ['$scope', ($scope) => {
    $scope.methods = [{ id: 0, label: 'hasVowels' },
    { id: 1, label: 'toUpper' },
    { id: 2, label: 'toLower' },
    { id: 3, label: 'ucFirst' },
    { id: 4, label: 'isQuestion' },
    { id: 5, label: 'words' },
    { id: 6, label: 'wordCount' },
    { id: 7, label: 'inverseCase' },
    { id: 8, label: 'alternatingCase' },
    { id: 9, label: 'getMiddle' },
    { id: 10, label: 'numberWords' },
    { id: 11, label: 'isDigit' },
    { id: 12, label: 'doubleCheck' },
    { id: 13, label: 'toCurrency' },
    { id: 14, label: 'fromCurrency' }];

    $scope.stringExtension = () => {
      const input = $scope.userInput;
      const method = $scope.selectedMethod.label;
      if (!input) {
        $scope.result = "Please, enter a valid input!";
        return;
      }
      $scope.result = input[method]();
    }
  }]);