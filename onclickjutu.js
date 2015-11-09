document.getElementById('click6').onclick = function () {
    var node = document.createElement("DIV");

    var i = 0;
    while (i < taulukoita.length) {

        var textnode = document.createTextNode(taulukoita[i].taulukko + "\n");
        node.appendChild(textnode);

        var intt = doesTableContainOnlyInt(taulukoita[i].taulukko);
        var numericT = doesTableContainOnlyNumeric(taulukoita[i].taulukko);
        var StringT = doesTableContainOnlyString(taulukoita[i].taulukko);


        try {
            if (intt === true) {
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
            if (!intt && !numericT && !StringT) {
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
    var isint = isInt(value);
    var isString = isStringOnly(value);
    var isnumeric = isNumeric(value);


    try {
        if (isint === true) {
            var textnode = document.createTextNode(value + " is Int AND ");
            node.appendChild(textnode);
        }

        if (isString === true) {
            var textnode = document.createTextNode(value +" is String");
            node.appendChild(textnode);
        }

        if (isnumeric === true) {
            var textnode = document.createTextNode(value +" is Numeric");
            node.appendChild(textnode);
        }
        if (!isnumeric && !isint && !isString) {
            var textnode = document.createTextNode(value + " is Nothing");
            node.appendChild(textnode);
        }

    } finally {
        node.appendChild(textnode);
        document.getElementById("myList4").appendChild(node);
    }

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