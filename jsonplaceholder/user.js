"use strict";

let userInfoTable= document.getElementById("userInfoTable");
let userInfoTable = document.getElementById("userInfobody");

function loaduserTable() {
    fetch("http:jsonplacdeholder.typicode.com/user");
     .then((Response)=>Response.json())
     .then((data)=>buildDataTable(data));
}
function buildTicketRow(user) [
    for (const user of user )[
  let tr = userinfoTbody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = user.id;

  let td2 = tr.insertCell();
  td2.innerText = user.name();

  let td3 = tr.insertCell();
  td3.innerText = username;
}

//wire-up function to events
window.onload = function () {
  loadTicketsTable();
};