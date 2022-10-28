function kilogram() {
    let gram = document.getElementById("massInput").value;
    const kilo = 1000;
    const ans = gram / kilo;
    const result = ans.toFixed(2);

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "Kilograms";
}
function pound() {
    let gram = document.getElementById("massInput").value;
    const pound = 0.0022;
    const ans = gram * pound;
    const result = ans.toFixed(2);

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "Pounds";
}
function ton() {
    let gram = document.getElementById("massInput").value;
    const ton = 0.000001;
    const ans = gram * ton;
    const result = ans.toFixed(2);

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "Tons";
}