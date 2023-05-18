function add() {
  let userTable = document.getElementById("tableusers");
  let newrow = userTable.insertRow(0);
  let newCol0 = newrow.insertCell(0);
  let newCol1 = newrow.insertCell(1);
  let newCol2 = newrow.insertCell(2);
  let newCol3=newrow.insertCell(3);
  newCol0.innerHTML = document.getElementById("name").value;
  newCol1.innerHTML = document.getElementById("course").value;
  newCol2.innerHTML = document.getElementById("number").value;
  newCol3.innerHTML=Number(document.getElementById("number").value)-Number(document.getElementById("course").value);
  console.log("--------", userTable);
  
}
function additems(){
    document.getElementById("simple1").value= document.getElementById("simple2").value;
    console.log( document.getElementById("simple1").value)
   console.log( document.getElementById("simple2").value)
}