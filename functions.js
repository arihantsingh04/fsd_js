
function sayHello(name, age) {
    console.log(name + " is " + age + " years old");
}

function mul(a, b) {
    return a * b;
}

var res = mul(5, 10);
console.log(res);

var add2 = (a, b) => {
    console.log(a + b);
};
add2(10, 20);
