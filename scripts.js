function fillArray() {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;
    let arr = [];
    
    for (let i = 0; i < rows; i++) {
        let innerArr = [];
        for (let j = 0; j < cols; j++) {
            let val = prompt("Enter the value for row " + (i+1) + " column " + (j+1));
            innerArr.push(val);
        }
        arr.push(innerArr);
    }
    
    let output = document.getElementById("output");
    output.innerHTML = "";
    
    for (let i = 0; i < arr.length; i++) {
        let row = "<p>";
        for (let j = 0; j < arr[i].length; j++) {
            row += arr[i][j] + " ";
        }
        row += "</p>";
        output.innerHTML += row;
    }
}
