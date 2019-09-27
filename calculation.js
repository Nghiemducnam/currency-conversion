function showMessage() {
    let a = parseInt(document.getElementById("amount").value);
    let b = parseInt(document.getElementById("From").value);
    let c = parseInt(document.getElementById("To").value);
    let d = a * c / b;
    alert('result: ' + d);
}