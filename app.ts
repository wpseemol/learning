class Person {
    name: string;
    doSomeThing() {
        console.log(this.name);
    }

    constructor(name: string) {
        this.name = name;
    }
}

const seemol = new Person('Seemol chakroborti');

seemol.doSomeThing();
