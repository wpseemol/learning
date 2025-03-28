const rect = {
    width: 20,
    height: 10,
    getArea: function() {
        return this.width * this.height;
    },
    drow: function() {
        console.log('Drawing rectangle with width:', this.width, 'and height:', this.height);
    }

    
}


rect.drow();