
/*
 * Angular 2 decorators and services
 */
import {bootstrap, FORM_PROVIDERS, ELEMENT_PROBE_PROVIDERS, Directive, Attribute,Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Person} from './models/Person.ts';
import {FriendService} from './services/FriendService.ts';




@Directive({
    // using [ ] means selecting an attribute
    selector: '[set-font]'
})
class SetFont {
    constructor(element: ElementRef, @Attribute('set-font') color: string) {
        console.log("ente directive");
        element.nativeElement.style.color = color;
    }
}



@Component({
    selector: 'my-app'
})
@View({
    templateUrl: "/view/friendeditor/",      // Call ASP MVC to retrieve the partial view
    directives: [CORE_DIRECTIVES, SetFont]           // Call Core directives and custom directives
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


bootstrap(AppComponent, [
    FriendService,
// These are dependencies of our App
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS
]).then(
    success => console.log('App Bootstrapped!'),
    error => console.log(error));