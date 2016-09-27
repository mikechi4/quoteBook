angular.module('quoteBook')
  .controller('mainCtrl', function($scope, mainService){
      $scope.quotes = mainService.getQuotes();
      $scope.removeQuote = mainService.removeQuote;
      $scope.addQuote = function(){
        var newQuote = {
          text: $scope.newQuoteText,
          author: $scope.newQuoteAuthor
        }
        mainService.addQuote(newQuote);
        $scope.newQuoteText = '';
        $scope.newQuoteAuthor = '';
      }
  })
;
