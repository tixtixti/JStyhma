document.getElementById('click').onclick = function() {
     var kenka = document.getElementById('kenka').value;
    var pituus = document.getElementById('pituus').value;
    var nimi = document.getElementById('etunimi').value;
    
    var vastaus = (kenka+pituus)/7;
    
    alert(nimi + " " + vastaus );
};

document.getElementById('click2').onclick = function() {
    var kuusi = document.getElementById('kuusi').value;
    var i = 1;
    var j = 1;
    var lol = 0;
    var jslol = parseInt(kuusi);
    
    console.log(jslol);
    
    var node = document.createElement("DIV");                 
   while(i<jslol+1){
       j = kuusi;
       while(j>i){
            var textnode = document.createTextNode(" ");  
             node.appendChild(textnode);
             j--;
       }
       j=1;
       lol=i*2;
       while(j<lol){  
            var textnode = document.createTextNode("*");  
             node.appendChild(textnode); 
             j++;
       }
        var textnode2 = document.createTextNode("\n");
         node.appendChild(textnode2);
       i++;
   }
    document.getElementById("myList").appendChild(node);
};

document.getElementById('click3').onclick = function() {
     var ensi = document.getElementById('ensi').value;
    var toinen = document.getElementById('toinen').value;
     var node = document.createElement("DIV"); 
    if(ensi>toinen){
      
        while(toinen<=ensi){
            
            var nelja = toinen % 4;
            var sata = toinen % 100;
            var neljasataa = toinen %400;
            var neljak = toinen % 4000;
            
            if(toinen !== 4000 && nelja === 0 && (sata !== 0 || neljasataa === 0) ){
                
                 var textnode = document.createTextNode(toinen);  
                node.appendChild(textnode);
                 var textnode2 = document.createTextNode("\n");
              node.appendChild(textnode2);
            }
           
             toinen++;
        }
    } else {
         while(ensi<=toinen){
            
            var nelja = toinen % 4;
            var sata = toinen % 100;
            var neljasataa = toinen %400;
            var neljak = toinen % 4000;
            
            if(toinen !== 4000 && nelja === 0 && (sata !== 0 || neljasataa === 0) ){
                
                 var textnode = document.createTextNode(toinen);  
                node.appendChild(textnode);
                 var textnode2 = document.createTextNode("\n");
              node.appendChild(textnode2);
            }
           
             toinen--;
        }
    }
      document.getElementById("myList2").appendChild(node);
};

document.getElementById('click4').onclick = function() {
    var vastaus = parseInt(Math.floor(10*Math.random())); 
    console.log(vastaus);
    var massit= 0;
    var vaarin = false;
    
    var eka = parseInt(document.getElementById('eka').value);
    var toka = parseInt(document.getElementById('toka').value);
    var kolmas = parseInt(document.getElementById('kolmas').value);

    if(eka===vastaus){
       
        massit=massit+400;
        vaarin = true;
    }
     if(toka===vastaus){
          
        massit=massit+200;
         vaarin = true;
    }
     if(kolmas===vastaus){
         
        massit=massit+100;
         vaarin = true;
    }
    if(vaarin === false){
        massit=-100;
    }
     var node = document.createElement("DIV"); 
     var textnode = document.createTextNode(massit);  
    node.appendChild(textnode);
 document.getElementById("myList3").appendChild(node);
    
};


