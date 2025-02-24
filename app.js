var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.doSomeThing = function () {
        console.log(this.name);
    };
    return Person;
}());
var seemol = new Person('Seemol chakroborti');
seemol.doSomeThing();
