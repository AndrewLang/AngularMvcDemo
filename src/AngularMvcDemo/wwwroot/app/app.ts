
//import * as angular from 'angular2/angular2';
import {bootstrap, Component, View, Directive, ElementRef, Attribute, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Injectable} from 'angular2/angular2';

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
    selector:'[x-large]'
})
class XLarge {
    constructor(element: ElementRef) {
        element.nativeElement.style.fontSize = 'x-large';
    }
}

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: "/view/friendeditor/",      // Call ASP MVC to retrieve the partial view
    directives: [CORE_DIRECTIVES]           // Call Core directives
})
class AppComponent {
    title: string;
    Persons: Array<Person>;
    newName: string;

    constructor(friendService: FriendService) {
        console.log("Start app component.");
        this.title = "My first Angular 2 App";
        //var friendService = new FriendService();
        this.Persons = friendService.Persons;
    }
    addFriend(newFriend) {
        if (newFriend.value) {
            var friend = new Person(newFriend.value);
            this.Persons.push(friend);
            newFriend.value = null;
        }
    }
    removeFriend(friend) {
        if (friend) {
            var index = this.Persons.indexOf(friend);

            if (index != undefined) {
                this.Persons.splice(index, 1);
            }
        }
    }
}


bootstrap(AppComponent, [FriendService]);