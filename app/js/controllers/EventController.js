'use strict'

eventsApp.controller('EventController', ['$scope', function ($scope) {
    $scope.event = {
        name: "Angular Boot Camp",
        date: "10/01/2019",
        time: "17:25",
        location: {
            address: "Google Headquarters",
            city: "Mountain View",
            province: "CA"

        },
        imgUrl: "/img/angularjs-logo.png",
        session: [
            {
                name: "Directive Master Class",
                creatorName: "Bob Smith",
                duration: "1 hr",
                level: "Advanced",
                abstract: "In this session you woll learn the ins and outs of directives."
            },

            {
                name: "Scopes for fun and profit",
                creatorName: "John Dow",
                duration: "30 mins",
                level: "Introductory",
                abstract: "This session will take a closer look at scopes."
            },

            {
                name: "Well behaved Controllers",
                creatorName: "Jane Doe",
                duration: "2 hours",
                level: "Intermediate",
                abstract: "Controllers are the beginnig of everything."
            }
        ]
    }
}]);