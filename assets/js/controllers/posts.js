module.exports = function($scope, $http) {

    // Just return an array for testing.
    $scope.posts = [
      {id: 1, title: "Post Number 1", body: "This is my body text"},
      {id: 2, title: "Post Number 2", body: "This is my seconds post body text"}
    ]

    // Below is an example with $http.
    // $http.get('api/posts').success(function(data) {
    //     $scope.posts = data;
    // });
};
