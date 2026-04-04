function addAppointment(){
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let table = document.getElementById("tableBody");

    let row = table.insertRow()
    
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)

    cell1.innerHTML = title
    cell2.innerHTML = date
    cell3.innerHTML = time

    cell4.innerHTML =
     "<button onclick = 'deleteROW(this)'>Delete</button>"
}

function deleteROW(btn){
    btn.parentNode.parentNode.remove();
}
