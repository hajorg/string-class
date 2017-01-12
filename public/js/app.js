/* eslint no-undef: 0 */
angular.module('stringClass', []).controller('stringCtrl',
  ['$scope', ($scope) => {
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
        $scope.result = 'Please, enter a valid input!';
        return;
      }
      try {
        $scope.result = input[method]();
      } catch (err) {
        $scope.result = err.message;
      }
    };
  }]);
// Get the modal
const modal = document.getElementById('myModal');
// Get the button that opens the modal
const about = document.getElementById('about');
// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];
// When the user clicks the button, open the modal
about.onclick = (event) => {
  event.preventDefault();
  modal.style.display = 'block';
};
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
