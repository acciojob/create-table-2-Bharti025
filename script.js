const table=document.getElementById("myTable");
function createTable() {
    //Write your code here
  let rows=prompt("Input number of rows");
let columns=prompt("Input number of columns");
	if(rows==0|| columns==0){
		alert("able cannot be created");
	}
	for(let i=0; i<rows; i++){
    let start=document.createElement("tr");
    for(let j=0; j<columns; j++){
        let data=document.createElement("td");
		 data.textContent="Row-"+i+" Column-"+"j";
		start.append(data);
	}
		table.append(start);
	}
}
