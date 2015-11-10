document.getElementById('click6').onclick = function () {
    var node = document.createElement("DIV");

    var i = 0;
    while (i < taulukoita.length) {

        var textnode = document.createTextNode(taulukoita[i].taulukko + "\n");
        node.appendChild(textnode);

        var intT = containsOnlyIntegers(taulukoita[i].taulukko);
        var numericT = containsOnlyNumbers(taulukoita[i].taulukko);
        var StringT = containsOnlyStrings(taulukoita[i].taulukko);


        try {
            if (intT === true) {
                var textnode = document.createTextNode("Integer Taulukko ja ");
                node.appendChild(textnode);
            }

            if (numericT === true) {
                var textnode = document.createTextNode("Numeerinen taulukko");
                node.appendChild(textnode);
            }

            if (StringT === true) {
                var textnode = document.createTextNode("String taulukko");
                node.appendChild(textnode);
            }
            if (!intT && !numericT && !StringT) {
                var textnode = document.createTextNode("Ei kelpo taulukko");
                node.appendChild(textnode);
            }

        } finally {

            var textnode = document.createTextNode("\n");
            node.appendChild(textnode);
            document.getElementById("myList5").appendChild(node);
        }
        var textnode = document.createTextNode("---------------- \n ");
        node.appendChild(textnode);
        i++;
    }
    document.getElementById("myList5").appendChild(node);
};

document.getElementById('click5').onclick = function () {
    var node = document.createElement("DIV");
    var value = document.getElementById('testeri').value;

    var isInt = isValidInteger(value)
    var isFloat = isValidFloat(value)

    var textnode;

    if (isInt === true) {
        textnode = document.createTextNode(value + " is Int");
        node.appendChild(textnode);
    } else if (isFloat === true) {
        textnode = document.createTextNode(value +" is Float");
        node.appendChild(textnode);
    } else {
        textnode = document.createTextNode(value + " is of unknown type");
    }

    node.appendChild(textnode);
    document.getElementById("myList4").appendChild(node);
};


function init() {
    var node = document.createElement("DIV");
    var i = 0;
    while (i < taulukoita.length) {
        var textnode = document.createTextNode(taulukoita[i].taulukko + "\n");
        node.appendChild(textnode);
        i++;
    }
    document.getElementById("lista").appendChild(node);
}