class Calc {
    multiply(x , y) {
        return x * y;
    }
    sum(x , y) {
        return x + y;
    }
    sub(x , y) {
        return x- y;
    }    
    divide(x, y) {
        return x / y;
    }
}


let calc = new Calc();
module.exports = Calc;