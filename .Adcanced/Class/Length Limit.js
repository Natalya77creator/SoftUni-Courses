class Stringer {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
    }
 
    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }
 
    get innerLength() {
        return this._innerLength;
    }
 
    increase(value) {
        this.innerLength += value;
    }
 
    decrease(value) {
        this.innerLength -= value;
    }
 
    toString() {
        if (this.innerString.length < this.innerLength) {
            return this.innerString;
        } else if (this.innerString.length === this.innerLength) {
            return this.innerString.substring(0, this._innerLength);
        } else {
            return this.innerString.substring(0, this._innerLength) + '...';
        }
    }
}
 let test = new Stringer("Test", 5);
test.decrease(3);

