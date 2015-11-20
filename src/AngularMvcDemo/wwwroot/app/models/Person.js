var Models;
(function (Models) {
    var Person = (function () {
        function Person(name) {
            this.Name = name;
        }
        return Person;
    })();
    Models.Person = Person;
})(Models || (Models = {}));
