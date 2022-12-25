//declare variable based on the name of an object property
const myobject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myobject;
//console.log(b);

//destructuring array
const [p, q] = [45, 37, 91, 86];
//console.log(p, q);

//chaining

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

console.log(company.web.tech.third);