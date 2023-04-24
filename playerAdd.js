let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

var selectTeam = document.getElementById("input6");
for (var i = 0; i < localTeam.length; i++) {
  selectTeam.innerHTML += `
    <option value="${localTeam[i].teamFullName}">${localTeam[i].teamFullName}</option>
               
    `;
}
var newData = 10;
$("#addteamform").submit(function (e) {
  e.preventDefault();
  let input_val = $("#input6").val();
  let shortName = "";
  for (let i = 0; i < input_val.length; i++) {
    if (i == 0) {
      shortName += input_val[i++].toUpperCase();
      continue;
    } else if (input_val[i] == " ") {
      shortName += input_val[++i].toUpperCase();
      i++;
    }
  }
  var trueOrFal = "";
  if ($("#input3").val() == "true") {
    trueOrFal = true;
  } else {
    trueOrFal = false;
  }

  let addPlayer = {
    id: localPlayers.length,
    playerName: $("#input1").val(),
    from: shortName,
    price: $("#input2").val() + "Cr",
    isPlaying: trueOrFal,
    description: $("#input4").val(),
    playerImg: $("#input5").val(),
    playerTeam: $("#input6").val(),
  };

  localPlayers.push(addPlayer);
  localStorage.setItem("playerArray", JSON.stringify(localPlayers));

  location.href = "./index.html";
});
