//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', adduser);
document.getElementById('myBtn2').addEventListener('click', double);
document.getElementById('myBtn3').addEventListener('click', show);
document.getElementById('myBtn4').addEventListener('click', richest);
document.getElementById('myBtn5').addEventListener('click', calculate);

var myMap = new Map();





function adduser() {
    // console.log('test');




    //Get API
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let millio = data.results;
            // console.log(millio);
            //var pt = millio[0].picture.medium ;
            var name = millio[0].name.first ;
            //var photo = '<img src = "${pt}" />' ;
            var mn = Math.floor(Math.random() * 1000000);
            //Get Data Value
            var table = document.getElementsByTagName('table')[0];
            var newRow = table.insertRow(table.rows.length/2+1);
            var cel1 = newRow.insertCell(0);
            //var cel2 = newRow.insertCell(1);
            var cel3 = newRow.insertCell(1);
            cel1.innerHTML = name;
            //cel2.innerHTML = photo;
            cel3.innerHTML = mn;

            myMap.set(name, mn);


            for (const [key, value] of myMap.entries()) {
            console.log(key, value);
}

});

}

function double() {

  var table = document.getElementsByTagName('table')[0];

 var i = 0 ;

  for (const [key, value] of myMap.entries()) {
  value1 = myMap.get(key) ;
  value1 = value1 * 2 ;
  myMap.set(key,value1);
  console.log(key, value1);



  var newRow = table.insertRow(table.rows[i]);
  var cel1 = newRow.insertCell(0);
  var cel3 = newRow.insertCell(1);
  cel1.innerHTML = key;
  cel3.innerHTML = value1;
  document.getElementsByTagName("tr")[myMap.size+1].remove();
  i++ ;

}

}
function show() {
  var table = document.getElementsByTagName('table')[0];

 var i = 0 ;

  for (const [key, value] of myMap.entries()) {
  value1 = myMap.get(key) ;
  var newRow = table.insertRow(table.rows[i]);
  var cel1 = newRow.insertCell(0);
  var cel3 = newRow.insertCell(1);
  if(parseInt(value1) > 1000000) {

    cel1.innerHTML = key;
    cel3.innerHTML = value1; }
  document.getElementsByTagName("tr")[myMap.size+1].remove();
  i++ ;

}


}

function richest() {

var table = document.getElementsByTagName('table')[0];

 var i = 0 ;

let m2= new Map([...myMap.entries()].sort((a,b) =>  a[1] - b[1])) ;
console.log(m2);

for (const [key, value] of m2.entries()) {
value1 = myMap.get(key) ;
var newRow = table.insertRow(table.rows[i]);
var cel1 = newRow.insertCell(0);
var cel3 = newRow.insertCell(1);
if(parseInt(value1) > 100000) {

  cel1.innerHTML = key;
  cel3.innerHTML = value1; }
document.getElementsByTagName("tr")[myMap.size+1].remove();
i++ ;

}
}


function calculate() {
var somme = 0 ;
  for (const [key, value] of myMap.entries()) {
  var value1 = parseInt(myMap.get(key)) ;
  somme += value1 ;
}

document.getElementById("demo").innerHTML = "somme est   "  +somme+ "  Dollars" ;
}