let a = document.getElementById("converter");

a.addEventListener("click", getConverter);

function getConverter() {
  let b = document.getElementById("con20").value;
  let c = 700;
  let rate = b * c;

  // document.getElementById("con20").value = "";
  document.getElementById("screen2").innerHTML =
    "N" + rate.toLocaleString("en-us");

  if (document.getElementById("con20").value == "") {
    document.getElementById("error").style.display = "block";
    document.getElementById("screen2").innerHTML = "";
  } else {
    document.getElementById("screen2").innerHTML =
      "N" + rate.toLocaleString("en-us");
  }
  if (document.getElementById("con20").value >= 3000) {
    document.getElementById("alert2").style.display = "block";
  }
  document.getElementById("alert2").style.animation = "movement 2s forwards";
}

function val22() {
  document.getElementById("screen2").innerHTML = "";
  document.getElementById("error").style.display = "none";
  document.getElementById("alert2").style.display = "none";
}

function abortit() {
  document.getElementById("alert2").style.display = "none";
}
