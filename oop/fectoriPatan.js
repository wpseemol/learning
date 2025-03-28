/**
 * fecotry pattern is a creational pattern that uses factory methods to create objects
 * 
 * @param {*} width 
 * @param {*} height 
 * @returns 
 */

function createRect (width, height) {
  return {
    width: width,
    height: height,
    area: function () {
      return this.width * this.height
    },
    draw: function () {
      console.log('Drawing rectangle with width:', this.width, 'and height:', this.height)
    }
  }
}

const rect1 = createRect(10, 5)
rect1.draw()
rect1.area() 