class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log('start a support session');
    }
}

class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('Amir khan', 'BD', 11);
const salman = new Support('solaiman khan', 'Dubai', 4);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android stdio');
console.log(alia);