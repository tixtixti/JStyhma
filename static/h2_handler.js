
function init() {
    var node = document.createElement("DIV");

    for(var i = 0; i < taulukoita.length; ++i) {
        node.appendChild(document.createTextNode(taulukoita[i].toString() + "\n"));
    }

    document.getElementById("arrays_output").appendChild(node);
}

document.getElementById('run_button').onclick = function () {
    var node = document.createElement("DIV");

    for(var i = 0; i < taulukoita.length; ++i) {
        var intT = containsOnlyIntegers(taulukoita[i]);
        var numericT = containsOnlyNumbers(taulukoita[i]);
        var StringT = containsOnlyStrings(taulukoita[i]);

        var types = []

        if (intT) {
            types.push("kokonaisluku taulukko");
        }

        if (numericT) {
            types.push("numeerinen taulukko");
        }

        if (StringT) {
            types.push("merkkijono taulukko");
        }

        if (!intT && !numericT && !StringT) {
            types.push("epäkelpo taulukko");
        }

        text = taulukoita[i].toString() + ": " + types.join(", ");
        var textnode = document.createTextNode(text + "\n-----\n");
        node.appendChild(textnode);
    }

    document.getElementById("run_output").appendChild(node);
};

document.getElementById('test_button').onclick = function () {
    var value = document.getElementById('textfield').value;

    var textnode;

    if (isValidInteger(value)) {
        textnode = document.createTextNode(value + " is Int");
    } else if (isValidFloat(value)) {
        textnode = document.createTextNode(value +" is Float");
    } else {
        textnode = document.createTextNode(value + " is of unknown type");
    }

    var node = document.createElement("DIV");
    node.appendChild(textnode);
    document.getElementById("test_output").appendChild(node);
};