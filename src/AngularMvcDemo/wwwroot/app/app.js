var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//import * as angular from 'angular2/angular2';
var angular2_1 = require('angular2/angular2');
var Person = (function () {
    function Person(name) {
        this.Name = name;
    }
    return Person;
})();
exports.Person = Person;
var FriendService = (function () {
    function FriendService() {
        this.Persons = [
            new Person("Arav"),
            new Person("Martin"),
            new Person("Kai"),
            new Person("Andrew")
        ];
    }
    return FriendService;
})();
exports.FriendService = FriendService;
var XLarge = (function () {
    function XLarge(element) {
        element.nativeElement.style.fontSize = 'x-large';
    }
    XLarge = __decorate([
        angular2_1.Directive({
            selector: '[x-large]'
        })
    ], XLarge);
    return XLarge;
})();
var AppComponent = (function () {
    function AppComponent(friendService) {
        console.log("Start app component.");
        this.title = "My first Angular 2 App";
        //var friendService = new FriendService();
        this.Persons = friendService.Persons;
    }
    AppComponent.prototype.addFriend = function (newFriend) {
        if (newFriend.value) {
            var friend = new Person(newFriend.value);
            this.Persons.push(friend);
            newFriend.value = null;
        }
    };
    AppComponent.prototype.removeFriend = function (friend) {
        if (friend) {
            var index = this.Persons.indexOf(friend);
            if (index != undefined) {
                this.Persons.splice(index, 1);
            }
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: "/view/friendeditor/",
            directives: [angular2_1.CORE_DIRECTIVES] // Call Core directives
        })
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [FriendService]);
