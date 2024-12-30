
var ani = ["cat", "dog", "lion"];
console.log(ani);

var person = {
    fn: 'John',
    ln: 'Doe',
    id: 5566,
    address: {
        street: 'Vijay Nagar',
        flat: 505
    },
    getinfo: function () {
        return this.fn + " " + this.ln;
    }
};

console.log(person.getinfo());
console.log(person);

var person2 = new Object();
person2.name = 'Arihant';
person2.age = 20;
person2.isMarried = false;
person2.address = {};
person2.address.street = 'L Colony';
person2['address']['f no:'] = 505;
console.log(person2);
