let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

$("#addteamform").submit(function (e) {
  e.preventDefault();

  let inp_val = $("#input1").val();
  let shortName = "";
  for (let i = 0; i < inp_val.length; i++) {
    if (i == 0) {
      shortName += inp_val[i++].toUpperCase();
      continue;
    } else if (inp_val[i] == " ") {
      shortName += inp_val[++i].toUpperCase();
      i++;
    }
  }

  let addData = {
    id: localTeam.length,
    teamFullName: $("#input1").val(),
    sName: shortName,
    teamIcon: $("#input3").val(),
    WonCount: $("#input4").val(),
  };

  localTeam.push(addData);
  localStorage.setItem("teamArray", JSON.stringify(localTeam));

  location.href = `./team.html?name=${addData.sName}`;
  localStorage.removeItem('teamFullName','kochin');
});
