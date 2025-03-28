/**
 * Constructor pattern object creation
 */

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

const rect = new Rect(10, 5)

rect.draw()
console.log(rect.area())

/**
 * about new keyword
 * 
 * 1. creates a brand new object.
 * 2. links to an object prototype.
 * 3. binds this to the new object scope.
 * 4. implicitly returns this.
 */

