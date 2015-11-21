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
var router_1 = require('angular2/router');
//import {Injectable} from 'angular2/angular2';
var Person_ts_1 = require('./models/Person.ts');
var FriendService_ts_1 = require('./services/FriendService.ts');
/*
export class Person {
    Name: string;
    constructor(name: string) {
        this.Name = name;
    }
}
export class FriendService {
    Persons: Array<Person>;

    constructor() {
        this.Persons = [
            new Person("Arav"),
            new Person("Martin"),
            new Person("Kai"),
            new Person("Andrew")
        ];
    }
}

@Directive({
    selector: '[tooltip]',
    inputs: [
        'text: tooltip'
    ],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
class Tooltip {
    text: string;
    overlay: Overlay; // NOT YET IMPLEMENTED
    overlayManager: OverlayManager; // NOT YET IMPLEMENTED

    constructor(overlayManager: OverlayManager) {
        this.overlay = overlay;
    }
    onMouseEnter() {
        // exact signature to be determined
        this.overlay = this.overlayManager.open(this.text, ...);
    }
    onMouseLeave() {
        this.overlay.close();
        this.overlay = null;
    }
}
*/
var AppComponent = (function () {
    function AppComponent(friendService) {
        console.log("Start app component.");
        this.title = "My first Angular 2 App";
        //var friendService = new FriendService();
        this.Persons = friendService.Persons;
    }
    AppComponent.prototype.addFriend = function (newFriend) {
        if (newFriend.value) {
            var friend = new Person_ts_1.Person(newFriend.value);
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
angular2_1.bootstrap(AppComponent, [FriendService_ts_1.FriendService, router_1.ROUTER_PROVIDERS]);
