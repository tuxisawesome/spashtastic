const allow = ["hi"];
const block = ["blocked", "go-odin"];

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let pass = getCookie("password");
  if (pass != "") {
    auth(pass, false);
  } else {
    if (window.location.href != "https://tuxisawesome.github.io/splashtastic/") {
      if (window.location.href != "https://tuxisawesome.github.io/splashtastic/logout") {
        window.location.href = "/";
      }
    }
  }
}
window.onload = checkCookie;

function success() {
  if (window.location.href == "https://tuxisawesome.github.io/splashtastic/") {
    window.location.href = "https://tuxisawesome.github.io/splashtastic/home";
  }
}

function auth(v, cookie) {
  if (allow.includes(v)) {
    if (cookie) {
      setCookie("password", pin.value, 7);
    }
    success();
  } else if (block.includes(pin.value)) {
    if (window.location.href != "https://tuxisawesome.github.io/splashtastic/") {
      if (window.location.href != "https://tuxisawesome.github.io/splashtastic/logout") {
        const element = document.body;
        element.innerHTML = "<h1>Loading...</h1>";
        window.location.href = "/";
      }
    }
    alert(
      "Auth Failed. The pin is not in our database. Please contact the owner in order to get a pin.",
    );
  } else {
    if (window.location.href != "https://tuxisawesome.github.io/splashtastic/") {
      if (window.location.href != "https://tuxisawesome.github.io/splashtastic/logout") {
        const element = document.body;
        element.innerHTML = "<h1>Loading...</h1>";
        window.location.href = "https://tuxisawesome.github.io/splashtastic/";
      }
    }
    window.alert(
      "Auth Failed. The pin is not in our database. Please contact the owner in order to get a pin.",
    );
  }
}

const pin = document.getElementById("pintext");
const button = document.getElementById("submit");

button.addEventListener("click", login);

function login() {
  auth(pin.value, true);
}

function deleteCookie() {
  document.cookie = "password" + "=; Max-Age=-99999999;";
  window.location.href = "https://tuxisawesome.github.io/splashtastic/logout";
}

function goodbyeworld() {
  var strWindowFeatures =
    "location=yes,height=640,width=480,scrollbars=yes,status=yes";
  var URL = "https://www.google.com;url=" + location.href;
  while (1 == 1) {
    var win = window.open(URL, "_blank", strWindowFeatures);
  }
}
