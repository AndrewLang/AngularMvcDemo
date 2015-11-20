/// <reference path="../models/person.ts" />
var Services;
(function (Services) {
    var FriendService = (function () {
        function FriendService() {
            this.Persons = [
                new Models.Person("Arav"),
                new Models.Person("Martin"),
                new Models.Person("Kai"),
                new Models.Person("Andrew")
            ];
        }
        return FriendService;
    })();
    Services.FriendService = FriendService;
})(Services || (Services = {}));
