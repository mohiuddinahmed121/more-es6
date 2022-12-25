class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log('start a support session');
    }
}

const aamir = new Support('Amir khan');
const salman = new Support('solaiman khan');
console.log(aamir);
console.log(salman);