document.querySelector(".togg").onclick = function () {
  //fonction bouton qui fait apparaitre ou disparaitre la div #hardskill1 qui contient les compétences//
  if (
    window.getComputedStyle(document.querySelector("#hardskill1")).display ==
    "none"
  ) {
    document.querySelector("#hardskill1").style.display = "block";
  } else {
    document.querySelector("#hardskill1").style.display = "none";
  }
};

document.querySelector(".togg1").onclick = function () {
  //fonction bouton qui fait apparaitre ou disparaitre la div #hardskill1 qui contient les compétences pour la partie smartphone//
  if (
    window.getComputedStyle(document.querySelector("#hardskill1")).display ==
    "none"
  ) {
    document.querySelector("#hardskill1").style.display = "block";
  } else {
    document.querySelector("#hardskill1").style.display = "none";
  }
};
