function isInt(value) {

    var er = /^-?[0-9]+$/;

    return er.test(value);
}

function isStringOnly(value) { //ei hyväksy välejä 

    var er = /^[a-zA-Z]+$/;

    return er.test(value);
}

function isNumeric(n) { //ES6 ainoastaan, ei toimi IE, mut toimii Edge (vähän niin kuin IE nykyään)
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function doesTableContainOnlyInt(table){ //ES6 ainoastaan, ei toimi IE, mut toimii Edge (vähän niin kuin IE nykyään)
    for (a of table) if(!isInt(a)) return false;
    return true;
}
function doesTableContainOnlyNumeric(table){ //ES6 ainoastaan, ei toimi IE, mut toimii Edge (vähän niin kuin IE nykyään)
    for (a of table) if(!isNumeric(a)) return false;
    return true;
}

function doesTableContainOnlyString(table){ //ES6 ainoastaan, ei toimi IE, mut toimii Edge (vähän niin kuin IE nykyään)
    for (a of table) if(!isStringOnly(a)) return false;
    return true;
}
