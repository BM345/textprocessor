var app = angular.module("TextProcessor", []);

app.controller("MainController", ["$scope", function MainController($scope) {

  $scope.inputText = "";
  $scope.outputText = "";

  $scope.processText = function(text) {

    text = text.replace(/\n/g, " ");
    text = text.replace(/([0-9]*\.?[0-9]+)-(g|kg|m|km)/g, "$1 $2");
    text = text.replace(/\(([a-z])\)/g, "\n\n$1.)\n\n");
    text = text.replace(/\n /g, "\n");

    return text;
  }

  $scope.$watch('inputText', function() {
    $scope.outputText = $scope.processText($scope.inputText);
  });

  new ClipboardJS(".copyButton");

}]);