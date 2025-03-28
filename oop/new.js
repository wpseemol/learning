

function Rect (width, height) {
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height
    };
    this.draw = function () {
        console.log('Drawing rectangle with width:', this.width, 'and height:', this.height)
    };
}

function myNew(constructor) {
    let obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    let argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

let rect = myNew(Rect, 10, 5);

console.log(rect.area());
rect.draw();