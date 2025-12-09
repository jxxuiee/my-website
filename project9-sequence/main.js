let introButton = document.getElementById("intro-button");
let oddButton = document.getElementById("odd-button");
let evenButton = document.getElementById("even-button");
let backButton = document.getElementById("back-button");

let intro = document.getElementById("intro");
let odd = document.getElementById("odd-selection");
let even = document.getElementById("even-selection");
let quilt = document.getElementById("quilt");

let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");
let square6 = document.getElementById("square6");
let square7 = document.getElementById("square7");
let square8 = document.getElementById("square8");
let square9 = document.getElementById("square9");

let songRecs = document.getElementById("song-recs");

introButton.addEventListener("click", function() {
  intro.classList.toggle("hide");
  odd.classList.toggle("hide");
});

oddButton.addEventListener("click", function() {
  let bpmChoice = document.querySelector('input[name="odd-selection"]:checked');

  if (!bpmChoice) {
    alert("Choose a BPM first!");
    return;
  }

  square1.src = bpmChoice.value;
  square3.src = bpmChoice.value;
  square5.src = bpmChoice.value;
  square7.src = bpmChoice.value;
  square9.src = bpmChoice.value;

  odd.classList.toggle("hide");
  even.classList.toggle("hide");
});

evenButton.addEventListener("click", function() {
  let genreChoice = document.querySelector('input[name="even-selection"]:checked');

  if (!genreChoice) {
    alert("Choose a genre!");
    return;
  }

  square2.src = genreChoice.value;
  square4.src = genreChoice.value;
  square6.src = genreChoice.value;
  square8.src = genreChoice.value;

  /* SONG RECOMMENDATIONS */
  if (genreChoice.id === "genre-rap") {
    songRecs.innerHTML = `
      <p>
        1. Travis Scott – Nightcrawler<br>
        2. EsDeeKid, Rico Ace – Phantom<br>
        3. Gunna – again<br>
        4. Don Toliver – No Pole<br>
        5. Playboi Carti – Teen X
      </p>
    `;
  } else if (genreChoice.id === "genre-house") {
    songRecs.innerHTML = `
      <p>
        1. Dom Dolla – Take It<br>
        2. Gravagerz – Chihiro<br>
        3. Kaytranada – YOU'RE THE ONE<br>
        4. Disclosure – Latch<br>
        5. Chris Lake, Aluna – Beggin'
      </p>
    `;
  } else if (genreChoice.id === "genre-pop") {
    songRecs.innerHTML = `
      <p>
        1. Tate McRae – HORSESHOE<br>
        2. Tate McRae – Revolving door<br>
        3. Sabrina Carpenter – When Did You Get Hot?<br>
        4. Madison Beer – bittersweet<br>
        5. Ariana Grande – supernatural
      </p>
    `;
  } else if (genreChoice.id === "genre-rnb") {
    songRecs.innerHTML = `
      <p>
        1. PARTYNEXTDOOR, Drake – SPIDER-MAN SUPERMAN<br>
        2. Brent Faiyaz – Clouded<br>
        3. Bryson Tiller – Let Em' Know<br>
        4. Tory Lanez – Turn Back Time<br>
        5. Jhené Aiko – Sativa
      </p>
    `;
  }

  even.classList.toggle("hide");
  quilt.classList.toggle("hide");
});

backButton.addEventListener("click", function() {
  quilt.classList.toggle("hide");
  intro.classList.toggle("hide");
});
