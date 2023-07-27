class shape {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    area = function () {
        return this.length * this.breadth;
    }

    perimeter = function () {
        return 2 * (this.length + this.breadth);
    }
}

const square = new shape(4, 4);

console.log(square);
console.log(square.area());