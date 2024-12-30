
function validatePhone() {
    var y = document.forms["mobileForm"]["call"].value;
    if (y.length != 10) {
        alert("Enter a 10-digit mobile number.");
        return false;
    } else if (!y.match(/^[0-9]{10}$/)) {
        alert("Only 10 digits please");
        return false;
    } else {
        alert("Valid mobile number");
        return true;
    }
}
