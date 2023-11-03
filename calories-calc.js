const submitPPM = document.getElementById("submit");
const submitKcal = document.getElementById("finalSubmit");
let cpm;
submitPPM.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const female = document.getElementById("female");
  const male = document.getElementById("male");
  const pal = document.getElementById("pal").value;
  const result = document.getElementById("result");

  if (male.checked) {
    const PPMResult = 10 * weight + 6.25 * height - 5 * age + 5;
    const cpmResult = PPMResult * pal;
    cpm = cpmResult;

    result.innerHTML =
      "Twoja całkowita przemiana materii (zero kaloryczne) to: " + cpmResult;
  }
  if (female.checked) {
    const PPMResult = 10 * weight + 6.25 * height - 5 * age - 161;
    const cpmResult = PPMResult * pal;
    cpm = cpmResult;

    result.innerHTML =
      "Twoja całkowita przemiana materii (zero kaloryczne) to: " + cpmResult;
  }
  if (
    (male.checked == false && female.checked == false) ||
    weight === "" ||
    height === "" ||
    age === "" ||
    pal === ""
  ) {
    alert("Musisz uzupełnić wszystkie pola!");
  }
});

submitKcal.addEventListener("click", (e) => {
  e.preventDefault();

  const bulk = document.getElementById("bulk");
  const cut = document.getElementById("cut");
  const percentChoice = document.getElementById("percent");
  const percentValue = document.getElementById("weightPercent").value;
  const caloriesLabel = document.getElementById("finalCalories");
  const calories = (cpm * 15) / 100;

  if (bulk.checked) {
    let bulkCal = cpm + calories;
    caloriesLabel.innerHTML =
      "Powinieneś spożywać około: " + bulkCal + " kcal aby przytyć";
  }
  if (cut.checked) {
    let cutCal = cpm - calories - 100;
    caloriesLabel.innerHTML =
      "Powinieneś spożywać około: " + cutCal + " kcal aby schudnąć";
  }
  if (percentChoice.checked) {
    let percentCal = cpm + (cpm * percentValue) / 100;
    caloriesLabel.innerHTML =
      "Powinieneś spożywać około: " +
      percentCal +
      " kcal aby osiągnąć cel procentowy";
  }
  if (
    bulk.checked == false &&
    cut.checked == false &&
    percentChoice.checked == false
  ) {
    alert("Musisz uzupełnić wszystkie pola!");
  }
  if (percentChoice.checked && percentValue === "") {
    alert(
      "Wartość procentowa była pusta, kalkulator pokaże wartość zera kalorycznego!"
    );
  }
});
