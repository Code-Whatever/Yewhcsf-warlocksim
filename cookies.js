function loadCookie() {
  document.getElementById("tailoring").checked = getCookie("tailoring") == "true";
  
  if (getCookie("fightStart") !== "noCookie")
    document.getElementById("fightStart").value = Number(getCookie("fightStart"));
  
  if (getCookie("fightEnd") !== "noCookie")
    document.getElementById("fightEnd").value = Number(getCookie("fightEnd"));
  
  if (getCookie("bossShadowRes") !== "noCookie")
    document.getElementById("bossShadowRes").value = Number(getCookie("bossShadowRes"));
  
  if (getCookie("bossFireRes") !== "noCookie")
    document.getElementById("bossFireRes").value = Number(getCookie("bossFireRes"));
  
  if (getCookie("bossLevel") !== "noCookie")
    document.getElementById("bossLevel").value = Number(getCookie("bossLevel"));
  
  if (getCookie("race") !== "noCookie")
    document.getElementById("race").value = getCookie("race");
  
  
  document.getElementById("curseShadow").checked = getCookie("curseShadow") == "true";
  document.getElementById("shadowWeaving").checked = getCookie("shadowWeaving") == "true";
  document.getElementById("curseElements").checked = getCookie("curseElements") == "true";
  document.getElementById("Scorch").checked = getCookie("Scorch") == "true";
  document.getElementById("supremeFlask").checked = getCookie("supremeFlask") == "true";
  document.getElementById("brilliantOil").checked = getCookie("brilliantOil") == "true";
  document.getElementById("arcaneElixir").checked = getCookie("arcaneElixir") == "true";
  document.getElementById("shadowElixir").checked = getCookie("shadowElixir") == "true";
  document.getElementById("holiday").checked = getCookie("holiday") == "true";
  document.getElementById("fireElixir").checked = getCookie("fireElixir") == "true";
  document.getElementById("manaPotion").checked = getCookie("manaPotion") == "true";
  document.getElementById("demonicRune").checked = getCookie("demonicRune") == "true";
  document.getElementById("runnTumTuber").checked = getCookie("runnTumTuber") == "true";
  document.getElementById("nightfinSoup").checked = getCookie("nightfinSoup") == "true";
  document.getElementById("magebloodPotion").checked = getCookie("magebloodPotion") == "true";
  document.getElementById("hakkarBuff").checked = getCookie("hakkarBuff") == "true";
  document.getElementById("onyxiaBuff").checked = getCookie("onyxiaBuff") == "true";
  document.getElementById("songflower").checked = getCookie("songflower") == "true";
  document.getElementById("diremaulBuff").checked = getCookie("diremaulBuff") == "true";
  document.getElementById("darkMoonFaire").checked = getCookie("darkMoonFaire") == "true";
  document.getElementById("tracesOfSilithus").checked = getCookie("tracesOfSilithus") == "true";
  document.getElementById("arcaneIntellect").checked = getCookie("arcaneIntellect") == "true";
  document.getElementById("markOfTheWild").checked = getCookie("markOfTheWild") == "true";
  document.getElementById("moonkinAura").checked = getCookie("moonkinAura") == "true";
  document.getElementById("blessingOfWisdom").checked = getCookie("blessingOfWisdom") == "true";
  document.getElementById("blessingOfKings").checked = getCookie("blessingOfKings") == "true";
  document.getElementById("manaSpringTotem").checked = getCookie("manaSpringTotem") == "true";
  document.getElementById("disableLifeTap").checked = getCookie("lifeTap") == "false";
  
  for (var i=0; i<50; i++) {
    var currentID = document.getElementsByClassName('wrapper')[i].children[0].id;
    var currentCookie = getCookie(currentID);
    if (currentCookie !== "noCookie")
      document.getElementById(currentID).parentNode.children[1].innerHTML = currentCookie;
    console.log(currentCookie)
  }
  talentFunc();
  
  console.log('Cookies Loaded')
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  if (arguments.length == 2) {
    exdays = 365;
  }
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;// + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "noCookie";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}