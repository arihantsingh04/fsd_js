
var a = 5;

function add() {
    var b = 15;
    console.log(a + b);

    function m1() {
        var c = 15;
        console.log(b + c);
    }

    m1();
}

add();
