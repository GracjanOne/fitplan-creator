const submitPPM = document.getElementById("submit");
const submitKcal = document.getElementById("finalSubmit");
let cpm;
submitPPM.addEventListener("click", (e) => {
  e.preventDefault();
  //Pobieranie
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;

  const male = document.getElementById("male");
  const pal = document.getElementById("pal").value;
  const result = document.getElementById("result");

  
  if (male.checked) {
    const PPMResult = 10*weight + 6.25*height - 5*age +5
    const cpmResult = PPMResult * pal
    cpm = cpmResult;
    console.log("PPM wynosi: ", PPMResult)
    console.log("CPM wynosi: ", cpmResult)
    result.innerHTML = "Twoja całkowita przemiana materii (zero kaloryczne) to: " + cpmResult
  }
  else{
    const PPMResult = 10*weight + 6.25*height - 5*age -161
    const cpmResult = PPMResult * pal
    cpm = cpmResult;
    console.log("PPM wynosi: ", PPMResult)
    console.log("CPM wynosi: ", cpmResult)
    result.innerHTML = "Twoja całkowita przemiana materii (zero kaloryczne) to: " + cpmResult
  }
  
  
});

submitKcal.addEventListener("click", (e)=> {
  e.preventDefault();
  //Zmienne
  const bulk = document.getElementById("bulk");
  const cut = document.getElementById("cut");
  const percentChoice = document.getElementById("percent");
  const percentValue = document.getElementById("weightPercent").value;
  const caloriesLabel = document.getElementById("finalCalories");
  const calories = cpm * 15/100
  
  if(bulk.checked){
    let bulkCal = cpm+calories;
    caloriesLabel.innerHTML = "Powinieneś pożywać około: " + bulkCal +" kcal";
  }
  if(cut.checked){
    let cutCal = cpm-calories-100;
    caloriesLabel.innerHTML = "Powinieneś pożywać około: " + cutCal +" kcal";
  }
  if(percentChoice.checked){
    let percentCal = cpm+(cpm*(percentValue)/100);
    caloriesLabel.innerHTML = "Powinieneś pożywać około: " + percentCal +" kcal";
  }
})




