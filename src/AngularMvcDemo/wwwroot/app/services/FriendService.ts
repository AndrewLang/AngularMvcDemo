/// <reference path="../models/person.ts" />


 module Services {
    export class FriendService {
        Persons: Array<Models.Person>;

        constructor() {
            this.Persons = [
                new Models.Person("Arav"),
                new Models.Person("Martin"),
                new Models.Person("Kai"),
                new Models.Person("Andrew")
            ];
        }
    }
}