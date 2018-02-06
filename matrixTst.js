class Matrix {
    constructor(w, h, c = () => undefined) {
        this.w = w;
        this.h = h;
        this.c = [];

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                this.c[y * w + x] = c(x, y);
            }
        }
    }
    
    get(x, y) {
        return this.c[y * this.w + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }

    Symbol.iterator = new MatrixIterator(this);
}


class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.h) return {done: true};

        let value = {x: this.x, y: this.y,
                     value: this.matrix.get(this.x, this.y)};

        this.x++;
        if (this.x == this.matrix.w) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

       
