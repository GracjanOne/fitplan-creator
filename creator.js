window.onload = function () {
  //variables
  let gymChecked = false;
  let homeChecked = false;
  let isBeginner = false;
  let isIntermediate = false;
  let isAdvanced = false;
  let timesInWeek;
  let split;
  let workoutPlan = {
    Split: "",
    exersices: {},
  };

  //buttons
 
  const answears = document.querySelectorAll(".answear:not(.generating-button)");
  const lastQuestion = document.querySelector("#last-question");
  const gym = document.getElementById("gym");
  const home = document.getElementById("home");
  const beginner = document.getElementById("beginner");
  const intermediate = document.getElementById("intermediate");
  const advanced = document.getElementById("advanced");
  let intensity = document.querySelectorAll(".intensity");
  const generateButton = document.querySelector("#generate");
  const planContainer = document.getElementById("plan-container");
  const downloadButton = document.getElementById("download");
  const downloadContainer = document.getElementById("download-container");
  const nextQuestion = document.getElementById("next-question-button");
  const workoutTitle = document.querySelector("#workout-title");
  
  let selectedAnswear = null;

  answears.forEach((answear) => {
    answear.addEventListener("click", () => {
      
      if (selectedAnswear) {
        selectedAnswear.style.backgroundColor = ""; 
      }
  
      
      selectedAnswear = answear;
      answear.style.backgroundColor = "#691B1B";
    });
  });
  gym.addEventListener("click", () => {
    gymChecked = true;
    homeChecked = false;
  });
  home.addEventListener("click", () => {
    homeChecked = true;
    gymChecked = false;
  });
  beginner.addEventListener("click", () => {
    isBeginner = true;
    isIntermediate = false;
    isAdvanced = false;
  });
  intermediate.addEventListener("click", () => {
    isBeginner = false;
    isIntermediate = true;
    isAdvanced = false;
  });
  advanced.addEventListener("click", () => {
    isBeginner = false;
    isIntermediate = false;
    isAdvanced = true;
  });
  intensity.forEach((intensityChoose) => {
    intensityChoose.addEventListener("click", () => {
      timesInWeek = intensityChoose.value;
      if (timesInWeek === "3") {
        split = "FBW*3";
      }
      if (timesInWeek === "4") {
        split = "Push pull push pull";
      }
      if (timesInWeek === "5") {
        split = "Push pull legs push pull";
      }
      if (timesInWeek === "6") {
        split = "Push pull legs push pull legs";
      }
    });
  });
  let showedQuestion = document.querySelector("#questions .showed-question");

let counter = 0;
nextQuestion.addEventListener("click", () => {
  showedQuestion.style.display = "none";
  const nextSibling = showedQuestion.nextElementSibling;
  counter+=1
  if (nextSibling && nextSibling.tagName === "LI") {
    if(counter== 2){
      nextQuestion.style.display="none";
      generateButton.style.display = "block"
    }
    showedQuestion = nextSibling;
    showedQuestion.classList.add("showed-question");
    
  } 
});

  generateButton.addEventListener("click", () => {
    if (gymChecked == true) {
      workoutPlan.split = split;
      if (workoutPlan.split == "FBW*3" && isBeginner == false) {
        workoutPlan.exersices = {
          day1: {
            name: "FBW",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: chest.barbellBenchPress,
            fourthExersice: shoulders.militaryPress,
            fifthExersice: triceps.cablePushdowns,
            sixthExersice: biceps.dumbbellCurls,
          },
          day2: {
            name: "FBW",
            firstExersice: legs.squats,
            secondExersice: back.barbellRows,
            thirdExersice: chest.dumbbellBenchPress,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: triceps.closeGripBenchPress,
            sixthExersice: biceps.hammerCurls,
          },
          day3: {
            name: "FBW",
            firstExersice: legs.lunges,
            secondExersice: back.pullUps,
            thirdExersice: chest.inclinedumbbellBenchPress,
            fourthExersice: shoulders.cableLateralRaise,
            fifthExersice: triceps.frenchPress,
            sixthExersice: biceps.barbellCurls,
          },
        };
      }
      if (workoutPlan.split == "FBW*3" && isBeginner == true) {
        workoutPlan.exersices = {
          day1: {
            name: "FBW",
            firstExersice: legs.squats,
            secondExersice: back.pullUps,
            thirdExersice: chest.barbellBenchPress,
            fourthExersice: shoulders.militaryPress,
            fifthExersice: triceps.cablePushdowns,
            sixthExersice: biceps.dumbbellCurls,
          },
          day2: {
            name: "FBW",
            firstExersice: legs.squats,
            secondExersice: back.barbellRows,
            thirdExersice: chest.dumbbellBenchPress,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: triceps.closeGripBenchPress,
            sixthExersice: biceps.hammerCurls,
          },
          day3: {
            name: "FBW",
            firstExersice: legs.lunges,
            secondExersice: back.pullUps,
            thirdExersice: chest.inclinedumbbellBenchPress,
            fourthExersice: shoulders.cableLateralRaise,
            fifthExersice: triceps.cablePushdowns,
            sixthExersice: biceps.barbellCurls,
          },
        };
      }
      // 4 dni
      if (workoutPlan.split == "Push pull push pull") {
        workoutPlan.exersices = {
          day1: {
            name: "Push",
            firstExersice: legs.squats,
            secondExersice: chest.barbellBenchPress,
            thirdExersice: chest.inclinedumbbellBenchPress,
            fourthExersice: chest.machineChestFliys,
            fifthExersice: legs.legExtensions,
            sixthExersice: triceps.cablePushdown,
          },
          day2: {
            name: "Pull",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: back.tBarRows,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: legs.legCurls,
            sixthExersice: biceps.dumbbellCurls,
          },
          day3: {
            name: "Push",
            firstExersice: legs.hackSquats,
            secondExersice: chest.dumbbellBenchPress,
            thirdExersice: chest.inclinedumbbellBenchPress,
            fourthExersice: chest.machineChestFliys,
            fifthExersice: legs.legExtensions,
            sixthExersice: legs.calfRaises,
          },
          day4: {
            name: "Pull",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: back.oneArmDumbbellRows,
            fourthExersice: shoulders.cableLateralRaise,
            fifthExersice: legs.legCurls,
            sixthExersice: biceps.dumbbellCurls,
          },
        };
      }
      if (workoutPlan.split == "Push pull legs push pull") {
        workoutPlan.exersices = {
          day1: {
            name: "Push",
            firstExersice: chest.barbellBenchPress,
            secondExersice: chest.inclinedumbbellBenchPress,
            thirdExersice: chest.machineChestFliys,
            fourthExersice: triceps.tricepDips,
            fifthExersice: triceps.cablePushdown,
            sixthExersice: "-",
          },
          day2: {
            name: "Pull",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: back.tBarRows,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: shoulders.rearDeltRaises,
            sixthExersice: biceps.dumbbellCurls,
          },
          day3: {
            name: "Legs",
            firstExersice: legs.squats,
            secondExersice: legs.BulgarianSplitSquats,
            thirdExersice: legs.hipTrust,
            fourthExersice: legs.legExtensions,
            fifthExersice: legs.legCurls,
            sixthExersice: legs.calfRaises,
          },
          day4: {
            name: "Push",
            firstExersice: chest.barbellBenchPress,
            secondExersice: chest.inclinedumbbellBenchPress,
            thirdExersice: chest.cableChestFliys,
            fourthExersice: triceps.tricepDips,
            fifthExersice: triceps.frenchPress,
            sixthExersice: "-",
          },
          day5: {
            name: "Pull",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: back.tBarRows,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: shoulders.rearDeltRaises,
            sixthExersice: biceps.hammerCurls,
          },
        };
      }
      if (workoutPlan.split == "Push pull legs push pull legs") {
        workoutPlan.exersices = {
          day1: {
            name: "Push",
            firstExersice: chest.barbellBenchPress,
            secondExersice: chest.inclinedumbbellBenchPress,
            thirdExersice: chest.machineChestFliys,
            fourthExersice: triceps.tricepDips,
            fifthExersice: triceps.cablePushdown,
            sixthExersice: "-",
          },
          day2: {
            name: "Pull",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: back.tBarRows,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: shoulders.rearDeltRaises,
            sixthExersice: biceps.dumbbellCurls,
          },
          day3: {
            name: "Legs",
            firstExersice: legs.squats,
            secondExersice: legs.BulgarianSplitSquats,
            thirdExersice: legs.hipTrust,
            fourthExersice: legs.legExtensions,
            fifthExersice: legs.legCurls,
            sixthExersice: legs.calfRaises,
          },
          day4: {
            name: "Push",
            firstExersice: chest.barbellBenchPress,
            secondExersice: chest.inclinedumbbellBenchPress,
            thirdExersice: chest.cableChestFliys,
            fourthExersice: triceps.tricepDips,
            fifthExersice: triceps.frenchPress,
            sixthExersice: "-",
          },
          day5: {
            name: "Pull",
            firstExersice: back.deadlifts,
            secondExersice: back.pullUps,
            thirdExersice: back.tBarRows,
            fourthExersice: shoulders.lateralRaises,
            fifthExersice: shoulders.rearDeltRaises,
            sixthExersice: biceps.hammerCurls,
          },
          day6: {
            name: "Legs",
            firstExersice: legs.hackSquats,
            secondExersice: legs.BulgarianSplitSquats,
            thirdExersice: legs.RomanianDeadlifts,
            fourthExersice: legs.legExtensions,
            fifthExersice: legs.legCurls,
            sixthExersice: legs.calfRaises,
          },
        };
      }
    }
    if (homeChecked == true) {
    }
    showExercise();
    downloadButton.style.display = "block";
    lastQuestion.style.display="none"
    generateButton.style.display = "none";
    workoutTitle.innerHTML = "SPRAWDŹ SWÓJ <span style='color:#8F2222;'>PLAN</span>"
  });

  function showExercise() {
    const exerciseNames = [];
    for (const day in workoutPlan.exersices) {
      const exercisesForDay = workoutPlan.exersices[day];
      planContainer.innerHTML += `
          <div class="your-plan">
            <img src="" alt="">
            
            
          </div>
        `;
      for (const exerciseName in exercisesForDay) {
        if (exerciseName !== "name") {
          if (
            exercisesForDay[exerciseName] &&
            exercisesForDay[exerciseName].name
          ) {
            const exercise = exercisesForDay[exerciseName];
            if (exerciseNames.includes(exercise.name)) {
              continue;
            } else {
              exerciseNames.push(exercise.name);
              planContainer.innerHTML += `
              <p class="exercise-name">${exercise.name}</p> 
              <span class="needed-equipment">Potrzebne wyposażenie: ${exercise.equipment}</span>
              <button class="another-exercise-button red-button" >INNE ĆWICZENIE</button>  </br> </br>
            `;
              console.log("Plan przed:", workoutPlan);
            }
          }
        }
      }
    }
  }
  planContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("another-exercise-button")) {
      const currentExercise =
        event.target.previousElementSibling.previousElementSibling.textContent;
      const exerciseNameToFind = currentExercise;

      for (const day in workoutPlan.exersices) {
        if (typeof workoutPlan.exersices[day] === "object") {
          const exercisesForDay = workoutPlan.exersices[day];

          for (const exerciseName in exercisesForDay) {
            if (
              exerciseName !== "name" &&
              exercisesForDay[exerciseName] &&
              exercisesForDay[exerciseName].name
            ) {
              const exercise = exercisesForDay[exerciseName];
              if (exercise.name === exerciseNameToFind) {
                // Znaleziono ćwiczenie
                const objects = [chest, legs, back, shoulders, triceps, biceps];
                const keyToFind =
                  workoutPlan.exersices[day][exerciseName].targetArea;
                let alternativeExercises = [];

                for (const objKey in objects) {
                  const obj = objects[objKey];

                  for (const exKey in obj) {
                    const ex = obj[exKey];

                    if (
                      ex.targetArea === keyToFind &&
                      ex.name !== exercise.name
                    ) {
                      alternativeExercises.push(ex);
                    }
                  }
                }
                const random = Math.floor(
                  Math.random() * alternativeExercises.length
                );

                workoutPlan.exersices[day][exerciseName] =
                  alternativeExercises[random];

                console.log("Plan po: ", workoutPlan.exersices);
              }
            }
          }
        }
      }
    }

    planContainer.innerHTML = "";
    showExercise();
  });
  function createWorkoutSheet(day, sheetName, ws) {
    ws = XLSX.utils.aoa_to_sheet([
        [day.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
    ]);

    for (const exercise of day) {
        ws.data.push([
            exercise.name,
            exercise.reps,
            exercise.set,
            exercise.tempo,
            exercise.rir,
        ]);
    }

    ws.data.push([]);
}
  function addSheet(){
    for(day in workoutPlan.exersices){
      ([
        [workoutPlan.exersices.day.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        
      ])
      for(exercise in workoutPlan.exersices.day){
        ws += XLSX.utils.aoatosheet([
          [exercise.name, exercise.reps, exercise.set, exercise.tempo, exercise.rir],
        ])
      }
    }
    

  }
  downloadButton.addEventListener("click", async () => {
    const XLSX = await import(
      "https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs"
    );
    const cptable = await import(
      "https://cdn.sheetjs.com/xlsx-0.20.0/package/dist/cpexcel.full.mjs"
    );
    XLSX.set_cptable(cptable);

    const wb = XLSX.utils.book_new();
    let ws;
    //Zrob funkcje do generowania
    if (split == "FBW*3") {
      ws = XLSX.utils.aoa_to_sheet([
        [workoutPlan.exersices.day1.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day1.firstExersice.name,
          workoutPlan.exersices.day1.firstExersice.reps,
          workoutPlan.exersices.day1.firstExersice.set,
          workoutPlan.exersices.day1.firstExersice.tempo,
          workoutPlan.exersices.day1.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.secondExersice.name,
          workoutPlan.exersices.day1.secondExersice.reps,
          workoutPlan.exersices.day1.secondExersice.set,
          workoutPlan.exersices.day1.secondExersice.tempo,
          workoutPlan.exersices.day1.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.thirdExersice.name,
          workoutPlan.exersices.day1.thirdExersice.reps,
          workoutPlan.exersices.day1.thirdExersice.set,
          workoutPlan.exersices.day1.thirdExersice.tempo,
          workoutPlan.exersices.day1.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.fourthExersice.name,
          workoutPlan.exersices.day1.fourthExersice.reps,
          workoutPlan.exersices.day1.fourthExersice.set,
          workoutPlan.exersices.day1.fourthExersice.tempo,
          workoutPlan.exersices.day1.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.fifthExersice.name,
          workoutPlan.exersices.day1.fifthExersice.reps,
          workoutPlan.exersices.day1.fifthExersice.set,
          workoutPlan.exersices.day1.fifthExersice.tempo,
          workoutPlan.exersices.day1.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.sixthExersice.name,
          workoutPlan.exersices.day1.sixthExersice.reps,
          workoutPlan.exersices.day1.sixthExersice.set,
          workoutPlan.exersices.day1.sixthExersice.tempo,
          workoutPlan.exersices.day1.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day2.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day2.firstExersice.name,
          workoutPlan.exersices.day2.firstExersice.reps,
          workoutPlan.exersices.day2.firstExersice.set,
          workoutPlan.exersices.day2.firstExersice.tempo,
          workoutPlan.exersices.day2.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.secondExersice.name,
          workoutPlan.exersices.day2.secondExersice.reps,
          workoutPlan.exersices.day2.secondExersice.set,
          workoutPlan.exersices.day2.secondExersice.tempo,
          workoutPlan.exersices.day2.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.thirdExersice.name,
          workoutPlan.exersices.day2.thirdExersice.reps,
          workoutPlan.exersices.day2.thirdExersice.set,
          workoutPlan.exersices.day2.thirdExersice.tempo,
          workoutPlan.exersices.day2.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fourthExersice.name,
          workoutPlan.exersices.day2.fourthExersice.reps,
          workoutPlan.exersices.day2.fourthExersice.set,
          workoutPlan.exersices.day2.fourthExersice.tempo,
          workoutPlan.exersices.day2.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fifthExersice.name,
          workoutPlan.exersices.day2.fifthExersice.reps,
          workoutPlan.exersices.day2.fifthExersice.set,
          workoutPlan.exersices.day2.fifthExersice.tempo,
          workoutPlan.exersices.day2.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.sixthExersice.name,
          workoutPlan.exersices.day2.sixthExersice.reps,
          workoutPlan.exersices.day2.sixthExersice.set,
          workoutPlan.exersices.day2.sixthExersice.tempo,
          workoutPlan.exersices.day2.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day3.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day3.firstExersice.name,
          workoutPlan.exersices.day3.firstExersice.reps,
          workoutPlan.exersices.day3.firstExersice.set,
          workoutPlan.exersices.day3.firstExersice.tempo,
          workoutPlan.exersices.day3.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.secondExersice.name,
          workoutPlan.exersices.day3.secondExersice.reps,
          workoutPlan.exersices.day3.secondExersice.set,
          workoutPlan.exersices.day3.secondExersice.tempo,
          workoutPlan.exersices.day3.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.thirdExersice.name,
          workoutPlan.exersices.day3.thirdExersice.reps,
          workoutPlan.exersices.day3.thirdExersice.set,
          workoutPlan.exersices.day3.thirdExersice.tempo,
          workoutPlan.exersices.day3.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fourthExersice.name,
          workoutPlan.exersices.day3.fourthExersice.reps,
          workoutPlan.exersices.day3.fourthExersice.set,
          workoutPlan.exersices.day3.fourthExersice.tempo,
          workoutPlan.exersices.day3.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fifthExersice.name,
          workoutPlan.exersices.day3.fifthExersice.reps,
          workoutPlan.exersices.day3.fifthExersice.set,
          workoutPlan.exersices.day3.fifthExersice.tempo,
          workoutPlan.exersices.day3.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.sixthExersice.name,
          workoutPlan.exersices.day3.sixthExersice.reps,
          workoutPlan.exersices.day3.sixthExersice.set,
          workoutPlan.exersices.day3.sixthExersice.tempo,
          workoutPlan.exersices.day3.sixthExersice.rir,
        ],
      ]);
    }
    if (split == "Push pull push pull") {
      ws = XLSX.utils.aoa_to_sheet([
        [workoutPlan.exersices.day1.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day1.firstExersice.name,
          workoutPlan.exersices.day1.firstExersice.reps,
          workoutPlan.exersices.day1.firstExersice.set,
          workoutPlan.exersices.day1.firstExersice.tempo,
          workoutPlan.exersices.day1.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.secondExersice.name,
          workoutPlan.exersices.day1.secondExersice.reps,
          workoutPlan.exersices.day1.secondExersice.set,
          workoutPlan.exersices.day1.secondExersice.tempo,
          workoutPlan.exersices.day1.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.thirdExersice.name,
          workoutPlan.exersices.day1.thirdExersice.reps,
          workoutPlan.exersices.day1.thirdExersice.set,
          workoutPlan.exersices.day1.thirdExersice.tempo,
          workoutPlan.exersices.day1.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.fourthExersice.name,
          workoutPlan.exersices.day1.fourthExersice.reps,
          workoutPlan.exersices.day1.fourthExersice.set,
          workoutPlan.exersices.day1.fourthExersice.tempo,
          workoutPlan.exersices.day1.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.fifthExersice.name,
          workoutPlan.exersices.day1.fifthExersice.reps,
          workoutPlan.exersices.day1.fifthExersice.set,
          workoutPlan.exersices.day1.fifthExersice.tempo,
          workoutPlan.exersices.day1.fifthExersice.rir,
        ],

        [],
        [workoutPlan.exersices.day2.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day2.firstExersice.name,
          workoutPlan.exersices.day2.firstExersice.reps,
          workoutPlan.exersices.day2.firstExersice.set,
          workoutPlan.exersices.day2.firstExersice.tempo,
          workoutPlan.exersices.day2.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.secondExersice.name,
          workoutPlan.exersices.day2.secondExersice.reps,
          workoutPlan.exersices.day2.secondExersice.set,
          workoutPlan.exersices.day2.secondExersice.tempo,
          workoutPlan.exersices.day2.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.thirdExersice.name,
          workoutPlan.exersices.day2.thirdExersice.reps,
          workoutPlan.exersices.day2.thirdExersice.set,
          workoutPlan.exersices.day2.thirdExersice.tempo,
          workoutPlan.exersices.day2.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fourthExersice.name,
          workoutPlan.exersices.day2.fourthExersice.reps,
          workoutPlan.exersices.day2.fourthExersice.set,
          workoutPlan.exersices.day2.fourthExersice.tempo,
          workoutPlan.exersices.day2.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fifthExersice.name,
          workoutPlan.exersices.day2.fifthExersice.reps,
          workoutPlan.exersices.day2.fifthExersice.set,
          workoutPlan.exersices.day2.fifthExersice.tempo,
          workoutPlan.exersices.day2.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.sixthExersice.name,
          workoutPlan.exersices.day2.sixthExersice.reps,
          workoutPlan.exersices.day2.sixthExersice.set,
          workoutPlan.exersices.day2.sixthExersice.tempo,
          workoutPlan.exersices.day2.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day3.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day3.firstExersice.name,
          workoutPlan.exersices.day3.firstExersice.reps,
          workoutPlan.exersices.day3.firstExersice.set,
          workoutPlan.exersices.day3.firstExersice.tempo,
          workoutPlan.exersices.day3.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.secondExersice.name,
          workoutPlan.exersices.day3.secondExersice.reps,
          workoutPlan.exersices.day3.secondExersice.set,
          workoutPlan.exersices.day3.secondExersice.tempo,
          workoutPlan.exersices.day3.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.thirdExersice.name,
          workoutPlan.exersices.day3.thirdExersice.reps,
          workoutPlan.exersices.day3.thirdExersice.set,
          workoutPlan.exersices.day3.thirdExersice.tempo,
          workoutPlan.exersices.day3.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fourthExersice.name,
          workoutPlan.exersices.day3.fourthExersice.reps,
          workoutPlan.exersices.day3.fourthExersice.set,
          workoutPlan.exersices.day3.fourthExersice.tempo,
          workoutPlan.exersices.day3.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fifthExersice.name,
          workoutPlan.exersices.day3.fifthExersice.reps,
          workoutPlan.exersices.day3.fifthExersice.set,
          workoutPlan.exersices.day3.fifthExersice.tempo,
          workoutPlan.exersices.day3.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.sixthExersice.name,
          workoutPlan.exersices.day3.sixthExersice.reps,
          workoutPlan.exersices.day3.sixthExersice.set,
          workoutPlan.exersices.day3.sixthExersice.tempo,
          workoutPlan.exersices.day3.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day4.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day4.firstExersice.name,
          workoutPlan.exersices.day4.firstExersice.reps,
          workoutPlan.exersices.day4.firstExersice.set,
          workoutPlan.exersices.day4.firstExersice.tempo,
          workoutPlan.exersices.day4.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.secondExersice.name,
          workoutPlan.exersices.day4.secondExersice.reps,
          workoutPlan.exersices.day4.secondExersice.set,
          workoutPlan.exersices.day4.secondExersice.tempo,
          workoutPlan.exersices.day4.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.thirdExersice.name,
          workoutPlan.exersices.day4.thirdExersice.reps,
          workoutPlan.exersices.day4.thirdExersice.set,
          workoutPlan.exersices.day4.thirdExersice.tempo,
          workoutPlan.exersices.day4.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.fourthExersice.name,
          workoutPlan.exersices.day4.fourthExersice.reps,
          workoutPlan.exersices.day4.fourthExersice.set,
          workoutPlan.exersices.day4.fourthExersice.tempo,
          workoutPlan.exersices.day4.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.fifthExersice.name,
          workoutPlan.exersices.day4.fifthExersice.reps,
          workoutPlan.exersices.day4.fifthExersice.set,
          workoutPlan.exersices.day4.fifthExersice.tempo,
          workoutPlan.exersices.day4.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.sixthExersice.name,
          workoutPlan.exersices.day4.sixthExersice.reps,
          workoutPlan.exersices.day4.sixthExersice.set,
          workoutPlan.exersices.day4.sixthExersice.tempo,
          workoutPlan.exersices.day4.sixthExersice.rir,
        ],
      ]);
    }
    if (split == "Push pull legs push pull") {
      ws = XLSX.utils.aoa_to_sheet([
        [workoutPlan.exersices.day1.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day1.firstExersice.name,
          workoutPlan.exersices.day1.firstExersice.reps,
          workoutPlan.exersices.day1.firstExersice.set,
          workoutPlan.exersices.day1.firstExersice.tempo,
          workoutPlan.exersices.day1.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.secondExersice.name,
          workoutPlan.exersices.day1.secondExersice.reps,
          workoutPlan.exersices.day1.secondExersice.set,
          workoutPlan.exersices.day1.secondExersice.tempo,
          workoutPlan.exersices.day1.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.thirdExersice.name,
          workoutPlan.exersices.day1.thirdExersice.reps,
          workoutPlan.exersices.day1.thirdExersice.set,
          workoutPlan.exersices.day1.thirdExersice.tempo,
          workoutPlan.exersices.day1.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.fourthExersice.name,
          workoutPlan.exersices.day1.fourthExersice.reps,
          workoutPlan.exersices.day1.fourthExersice.set,
          workoutPlan.exersices.day1.fourthExersice.tempo,
          workoutPlan.exersices.day1.fourthExersice.rir,
        ],

        [],
        [workoutPlan.exersices.day2.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day2.firstExersice.name,
          workoutPlan.exersices.day2.firstExersice.reps,
          workoutPlan.exersices.day2.firstExersice.set,
          workoutPlan.exersices.day2.firstExersice.tempo,
          workoutPlan.exersices.day2.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.secondExersice.name,
          workoutPlan.exersices.day2.secondExersice.reps,
          workoutPlan.exersices.day2.secondExersice.set,
          workoutPlan.exersices.day2.secondExersice.tempo,
          workoutPlan.exersices.day2.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.thirdExersice.name,
          workoutPlan.exersices.day2.thirdExersice.reps,
          workoutPlan.exersices.day2.thirdExersice.set,
          workoutPlan.exersices.day2.thirdExersice.tempo,
          workoutPlan.exersices.day2.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fourthExersice.name,
          workoutPlan.exersices.day2.fourthExersice.reps,
          workoutPlan.exersices.day2.fourthExersice.set,
          workoutPlan.exersices.day2.fourthExersice.tempo,
          workoutPlan.exersices.day2.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fifthExersice.name,
          workoutPlan.exersices.day2.fifthExersice.reps,
          workoutPlan.exersices.day2.fifthExersice.set,
          workoutPlan.exersices.day2.fifthExersice.tempo,
          workoutPlan.exersices.day2.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.sixthExersice.name,
          workoutPlan.exersices.day2.sixthExersice.reps,
          workoutPlan.exersices.day2.sixthExersice.set,
          workoutPlan.exersices.day2.sixthExersice.tempo,
          workoutPlan.exersices.day2.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day3.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day3.firstExersice.name,
          workoutPlan.exersices.day3.firstExersice.reps,
          workoutPlan.exersices.day3.firstExersice.set,
          workoutPlan.exersices.day3.firstExersice.tempo,
          workoutPlan.exersices.day3.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.secondExersice.name,
          workoutPlan.exersices.day3.secondExersice.reps,
          workoutPlan.exersices.day3.secondExersice.set,
          workoutPlan.exersices.day3.secondExersice.tempo,
          workoutPlan.exersices.day3.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.thirdExersice.name,
          workoutPlan.exersices.day3.thirdExersice.reps,
          workoutPlan.exersices.day3.thirdExersice.set,
          workoutPlan.exersices.day3.thirdExersice.tempo,
          workoutPlan.exersices.day3.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fourthExersice.name,
          workoutPlan.exersices.day3.fourthExersice.reps,
          workoutPlan.exersices.day3.fourthExersice.set,
          workoutPlan.exersices.day3.fourthExersice.tempo,
          workoutPlan.exersices.day3.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fifthExersice.name,
          workoutPlan.exersices.day3.fifthExersice.reps,
          workoutPlan.exersices.day3.fifthExersice.set,
          workoutPlan.exersices.day3.fifthExersice.tempo,
          workoutPlan.exersices.day3.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.sixthExersice.name,
          workoutPlan.exersices.day3.sixthExersice.reps,
          workoutPlan.exersices.day3.sixthExersice.set,
          workoutPlan.exersices.day3.sixthExersice.tempo,
          workoutPlan.exersices.day3.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day4.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day4.firstExersice.name,
          workoutPlan.exersices.day4.firstExersice.reps,
          workoutPlan.exersices.day4.firstExersice.set,
          workoutPlan.exersices.day4.firstExersice.tempo,
          workoutPlan.exersices.day4.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.secondExersice.name,
          workoutPlan.exersices.day4.secondExersice.reps,
          workoutPlan.exersices.day4.secondExersice.set,
          workoutPlan.exersices.day4.secondExersice.tempo,
          workoutPlan.exersices.day4.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.thirdExersice.name,
          workoutPlan.exersices.day4.thirdExersice.reps,
          workoutPlan.exersices.day4.thirdExersice.set,
          workoutPlan.exersices.day4.thirdExersice.tempo,
          workoutPlan.exersices.day4.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.fourthExersice.name,
          workoutPlan.exersices.day4.fourthExersice.reps,
          workoutPlan.exersices.day4.fourthExersice.set,
          workoutPlan.exersices.day4.fourthExersice.tempo,
          workoutPlan.exersices.day4.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.fifthExersice.name,
          workoutPlan.exersices.day4.fifthExersice.reps,
          workoutPlan.exersices.day4.fifthExersice.set,
          workoutPlan.exersices.day4.fifthExersice.tempo,
          workoutPlan.exersices.day4.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.sixthExersice.name,
          workoutPlan.exersices.day4.sixthExersice.reps,
          workoutPlan.exersices.day4.sixthExersice.set,
          workoutPlan.exersices.day4.sixthExersice.tempo,
          workoutPlan.exersices.day4.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day5.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day5.firstExersice.name,
          workoutPlan.exersices.day5.firstExersice.reps,
          workoutPlan.exersices.day4.firstExersice.set,
          workoutPlan.exersices.day5.firstExersice.tempo,
          workoutPlan.exersices.day5.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.secondExersice.name,
          workoutPlan.exersices.day5.secondExersice.reps,
          workoutPlan.exersices.day5.secondExersice.set,
          workoutPlan.exersices.day5.secondExersice.tempo,
          workoutPlan.exersices.day5.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.thirdExersice.name,
          workoutPlan.exersices.day5.thirdExersice.reps,
          workoutPlan.exersices.day5.thirdExersice.set,
          workoutPlan.exersices.day5.thirdExersice.tempo,
          workoutPlan.exersices.day5.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.fourthExersice.name,
          workoutPlan.exersices.day5.fourthExersice.reps,
          workoutPlan.exersices.day5.fourthExersice.set,
          workoutPlan.exersices.day5.fourthExersice.tempo,
          workoutPlan.exersices.day5.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.fifthExersice.name,
          workoutPlan.exersices.day5.fifthExersice.reps,
          workoutPlan.exersices.day5.fifthExersice.set,
          workoutPlan.exersices.day5.fifthExersice.tempo,
          workoutPlan.exersices.day5.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.sixthExersice.name,
          workoutPlan.exersices.day5.sixthExersice.reps,
          workoutPlan.exersices.day5.sixthExersice.set,
          workoutPlan.exersices.day5.sixthExersice.tempo,
          workoutPlan.exersices.day5.sixthExersice.rir,
        ],
      ]);
    }
    if (split == "Push pull legs push pull legs") {
      ws = XLSX.utils.aoa_to_sheet([
        [workoutPlan.exersices.day1.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day1.firstExersice.name,
          workoutPlan.exersices.day1.firstExersice.reps,
          workoutPlan.exersices.day1.firstExersice.set,
          workoutPlan.exersices.day1.firstExersice.tempo,
          workoutPlan.exersices.day1.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.secondExersice.name,
          workoutPlan.exersices.day1.secondExersice.reps,
          workoutPlan.exersices.day1.secondExersice.set,
          workoutPlan.exersices.day1.secondExersice.tempo,
          workoutPlan.exersices.day1.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.thirdExersice.name,
          workoutPlan.exersices.day1.thirdExersice.reps,
          workoutPlan.exersices.day1.thirdExersice.set,
          workoutPlan.exersices.day1.thirdExersice.tempo,
          workoutPlan.exersices.day1.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day1.fourthExersice.name,
          workoutPlan.exersices.day1.fourthExersice.reps,
          workoutPlan.exersices.day1.fourthExersice.set,
          workoutPlan.exersices.day1.fourthExersice.tempo,
          workoutPlan.exersices.day1.fourthExersice.rir,
        ],

        [],
        [workoutPlan.exersices.day2.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day2.firstExersice.name,
          workoutPlan.exersices.day2.firstExersice.reps,
          workoutPlan.exersices.day2.firstExersice.set,
          workoutPlan.exersices.day2.firstExersice.tempo,
          workoutPlan.exersices.day2.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.secondExersice.name,
          workoutPlan.exersices.day2.secondExersice.reps,
          workoutPlan.exersices.day2.secondExersice.set,
          workoutPlan.exersices.day2.secondExersice.tempo,
          workoutPlan.exersices.day2.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.thirdExersice.name,
          workoutPlan.exersices.day2.thirdExersice.reps,
          workoutPlan.exersices.day2.thirdExersice.set,
          workoutPlan.exersices.day2.thirdExersice.tempo,
          workoutPlan.exersices.day2.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fourthExersice.name,
          workoutPlan.exersices.day2.fourthExersice.reps,
          workoutPlan.exersices.day2.fourthExersice.set,
          workoutPlan.exersices.day2.fourthExersice.tempo,
          workoutPlan.exersices.day2.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.fifthExersice.name,
          workoutPlan.exersices.day2.fifthExersice.reps,
          workoutPlan.exersices.day2.fifthExersice.set,
          workoutPlan.exersices.day2.fifthExersice.tempo,
          workoutPlan.exersices.day2.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day2.sixthExersice.name,
          workoutPlan.exersices.day2.sixthExersice.reps,
          workoutPlan.exersices.day2.sixthExersice.set,
          workoutPlan.exersices.day2.sixthExersice.tempo,
          workoutPlan.exersices.day2.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day3.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day3.firstExersice.name,
          workoutPlan.exersices.day3.firstExersice.reps,
          workoutPlan.exersices.day3.firstExersice.set,
          workoutPlan.exersices.day3.firstExersice.tempo,
          workoutPlan.exersices.day3.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.secondExersice.name,
          workoutPlan.exersices.day3.secondExersice.reps,
          workoutPlan.exersices.day3.secondExersice.set,
          workoutPlan.exersices.day3.secondExersice.tempo,
          workoutPlan.exersices.day3.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.thirdExersice.name,
          workoutPlan.exersices.day3.thirdExersice.reps,
          workoutPlan.exersices.day3.thirdExersice.set,
          workoutPlan.exersices.day3.thirdExersice.tempo,
          workoutPlan.exersices.day3.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fourthExersice.name,
          workoutPlan.exersices.day3.fourthExersice.reps,
          workoutPlan.exersices.day3.fourthExersice.set,
          workoutPlan.exersices.day3.fourthExersice.tempo,
          workoutPlan.exersices.day3.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.fifthExersice.name,
          workoutPlan.exersices.day3.fifthExersice.reps,
          workoutPlan.exersices.day3.fifthExersice.set,
          workoutPlan.exersices.day3.fifthExersice.tempo,
          workoutPlan.exersices.day3.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day3.sixthExersice.name,
          workoutPlan.exersices.day3.sixthExersice.reps,
          workoutPlan.exersices.day3.sixthExersice.set,
          workoutPlan.exersices.day3.sixthExersice.tempo,
          workoutPlan.exersices.day3.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day4.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day4.firstExersice.name,
          workoutPlan.exersices.day4.firstExersice.reps,
          workoutPlan.exersices.day4.firstExersice.set,
          workoutPlan.exersices.day4.firstExersice.tempo,
          workoutPlan.exersices.day4.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.secondExersice.name,
          workoutPlan.exersices.day4.secondExersice.reps,
          workoutPlan.exersices.day4.secondExersice.set,
          workoutPlan.exersices.day4.secondExersice.tempo,
          workoutPlan.exersices.day4.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.thirdExersice.name,
          workoutPlan.exersices.day4.thirdExersice.reps,
          workoutPlan.exersices.day4.thirdExersice.set,
          workoutPlan.exersices.day4.thirdExersice.tempo,
          workoutPlan.exersices.day4.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.fourthExersice.name,
          workoutPlan.exersices.day4.fourthExersice.reps,
          workoutPlan.exersices.day4.fourthExersice.set,
          workoutPlan.exersices.day4.fourthExersice.tempo,
          workoutPlan.exersices.day4.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.fifthExersice.name,
          workoutPlan.exersices.day4.fifthExersice.reps,
          workoutPlan.exersices.day4.fifthExersice.set,
          workoutPlan.exersices.day4.fifthExersice.tempo,
          workoutPlan.exersices.day4.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day4.sixthExersice.name,
          workoutPlan.exersices.day4.sixthExersice.reps,
          workoutPlan.exersices.day4.sixthExersice.set,
          workoutPlan.exersices.day4.sixthExersice.tempo,
          workoutPlan.exersices.day4.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day5.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day5.firstExersice.name,
          workoutPlan.exersices.day5.firstExersice.reps,
          workoutPlan.exersices.day5.firstExersice.set,
          workoutPlan.exersices.day5.firstExersice.tempo,
          workoutPlan.exersices.day5.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.secondExersice.name,
          workoutPlan.exersices.day5.secondExersice.reps,
          workoutPlan.exersices.day5.secondExersice.set,
          workoutPlan.exersices.day5.secondExersice.tempo,
          workoutPlan.exersices.day5.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.thirdExersice.name,
          workoutPlan.exersices.day5.thirdExersice.reps,
          workoutPlan.exersices.day5.thirdExersice.set,
          workoutPlan.exersices.day5.thirdExersice.tempo,
          workoutPlan.exersices.day5.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.fourthExersice.name,
          workoutPlan.exersices.day5.fourthExersice.reps,
          workoutPlan.exersices.day5.fourthExersice.set,
          workoutPlan.exersices.day5.fourthExersice.tempo,
          workoutPlan.exersices.day5.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.fifthExersice.name,
          workoutPlan.exersices.day5.fifthExersice.reps,
          workoutPlan.exersices.day5.fifthExersice.set,
          workoutPlan.exersices.day5.fifthExersice.tempo,
          workoutPlan.exersices.day5.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day5.sixthExersice.name,
          workoutPlan.exersices.day5.sixthExersice.reps,
          workoutPlan.exersices.day5.sixthExersice.set,
          workoutPlan.exersices.day5.sixthExersice.tempo,
          workoutPlan.exersices.day5.sixthExersice.rir,
        ],
        [],
        [workoutPlan.exersices.day6.name],
        ["Ćw.", "Powt.", "Serie", "Tempo", "Rir"],
        [
          workoutPlan.exersices.day6.firstExersice.name,
          workoutPlan.exersices.day6.firstExersice.reps,
          workoutPlan.exersices.day6.firstExersice.set,
          workoutPlan.exersices.day6.firstExersice.tempo,
          workoutPlan.exersices.day6.firstExersice.rir,
        ],
        [
          workoutPlan.exersices.day6.secondExersice.name,
          workoutPlan.exersices.day6.secondExersice.reps,
          workoutPlan.exersices.day6.secondExersice.set,
          workoutPlan.exersices.day6.secondExersice.tempo,
          workoutPlan.exersices.day6.secondExersice.rir,
        ],
        [
          workoutPlan.exersices.day6.thirdExersice.name,
          workoutPlan.exersices.day6.thirdExersice.reps,
          workoutPlan.exersices.day6.thirdExersice.set,
          workoutPlan.exersices.day6.thirdExersice.tempo,
          workoutPlan.exersices.day6.thirdExersice.rir,
        ],
        [
          workoutPlan.exersices.day6.fourthExersice.name,
          workoutPlan.exersices.day6.fourthExersice.reps,
          workoutPlan.exersices.day6.fourthExersice.set,
          workoutPlan.exersices.day6.fourthExersice.tempo,
          workoutPlan.exersices.day6.fourthExersice.rir,
        ],
        [
          workoutPlan.exersices.day6.fifthExersice.name,
          workoutPlan.exersices.day6.fifthExersice.reps,
          workoutPlan.exersices.day6.fifthExersice.set,
          workoutPlan.exersices.day6.fifthExersice.tempo,
          workoutPlan.exersices.day6.fifthExersice.rir,
        ],
        [
          workoutPlan.exersices.day6.sixthExersice.name,
          workoutPlan.exersices.day6.sixthExersice.reps,
          workoutPlan.exersices.day6.sixthExersice.set,
          workoutPlan.exersices.day6.sixthExersice.tempo,
          workoutPlan.exersices.day6.sixthExersice.rir,
        ],
      ]);
    }
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Plan Treningowy.xlsx");
  });
};

const chest = {
  barbellBenchPress: {
    name: "Wyciskanie sztangi na ławce poziomej",
    set: "3-4",
    reps: "4-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga, ławka",
    targetArea: "flat",
  },
  dumbbellBenchPress: {
    name: "Wyciskanie hantli na ławce poziomej",
    set: "3-4",
    reps: "4-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Hantle, ławka",
    targetArea: "flat",
  },
  inclineBarbellBenchPress: {
    name: "Wyciskanie sztangi na ławce dodatniej",
    set: "3-4",
    reps: "4-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Hantle, ławka regulowana",
    targetArea: "incline",
  },
  inclinedumbbellBenchPress: {
    name: "Wyciskanie hantli na ławce dodatniej",
    set: "3-4",
    reps: "4-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga, ławka regulowana",
    targetArea: "incline",
  },
  hammerMachine: {
    name: "Wyciskanie na maszynie hammer",
    set: "3-4",
    reps: "6-8",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Maszyna hammer",
    targetArea: "flat",
  },
  cableChestFliys: {
    name: "Rozpiętki na linkach",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2131",
    place: "gym",
    equipment: "Linki wyciągu",
    targetArea: "fliys",
  },
  machineChestFliys: {
    name: "Rozpiętki na maszynie",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2131",
    place: "gym",
    equipment: "Maszyna do rozpiętek",
    targetArea: "fliys",
  },
  dumbbellChestFliys: {
    name: "Rozpiętki z hantlami",
    set: "3-4",
    reps: "8-12",
    rir: 2,
    tempo: "22131",
    place: "gym",
    equipment: "Hantle, ławka",
    targetArea: "fliys",
  },
};
const legs = {
  squats: {
    name: "Przysiady ze sztangą na karku",
    set: "4",
    reps: "4-8",
    rir: 1,
    tempo: "21X1",
    place: "Gym",
    equipment: "Sztanga",
    targetArea: "quadriceps",
  },

  legPress: {
    name: "Wypychanie nóg na prasie",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Prasa do nóg",
    targetArea: "quadriceps",
  },
  lunges: {
    name: "Wykroki",
    set: "3-4",
    reps: "8-12",
    rir: 2,
    tempo: "20X1",
    place: "Gym",
    equipment: "Hantle",
    targetArea: "quadriceps",
  },
  legCurls: {
    name: "Uginanie nóg leżąc na brzuchu",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Maszyna do mięśni dwógłowych uda",
    targetArea: "hamstrings",
  },
  calfRaises: {
    name: "Unoszenie łydek",
    set: "3-4",
    reps: "10-15",
    rir: 1,
    tempo: "20X1",
    place: "Gym",
    equipment: "Maszyna do łydek (lub obciążenie z podwyższeniem)",
    targetArea: "calves",
  },
  stepUps: {
    name: "Wchodzenie na podwyższenie z hantlami",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "20X1",
    place: "Gym",
    equipment: "Hantle, ławka",
    targetArea: "quadriceps",
  },
  hipTrust: {
    name: "hiptrust",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Sztanga/hantel, ławka",
    targetArea: "glutes",
  },
  hackSquats: {
    name: "Hack Squats",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "20X1",
    place: "Gym",
    equipment: "Maszyna do hack squat",
    targetArea: "quadriceps",
  },
  legExtensions: {
    name: "Prostowanie nóg na maszynie",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Maszyna do prostowania nóg",
    targetArea: "quadriceps",
  },
  BulgarianSplitSquats: {
    name: "Przysiady bułagrskie",
    set: "3-4",
    reps: "8-12",
    rir: 2,
    tempo: "20X1",
    place: "Gym",
    equipment: "Hantle, ławka",
    targetArea: "quadriceps",
  },

  RomanianDeadlifts: {
    name: "Martwy ciąg rumuński",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Sztanga",
    targetArea: "glutes",
  },
  sissySquats: {
    name: "Sissy squat",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "20X1",
    place: "Gym",
    equipment: "-",
    targetArea: "quadriceps",
  },
};

const back = {
  pullUps: {
    name: "Podciąganie na drążku",
    set: "3-4",
    reps: "6-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Drążek do podciągania",
    targetArea: "upperBack",
  },
  barbellRows: {
    name: "Wiosłowanie sztangą w opadzie tułowia",
    set: "3-4",
    reps: "6-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga",
    targetArea: "upperBack",
  },
  dumbbellRows: {
    name: "Focze wiosłowanie hantlami",
    set: "3-4",
    reps: "6-8",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Hantle",
    targetArea: "upperBack",
  },
  latPulldowns: {
    name: "Przyciąganie wyciągu górnego do klatki",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Wyciąg górny",
    targetArea: "upperBack",
  },
  seatedCableRows: {
    name: "Wiosłowanie na wyciągu dolnym siedząc",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Wyciąg dolny",
    targetArea: "middleBack",
  },
  deadlifts: {
    name: "Martwy ciąg",
    set: "3-4",
    reps: "3-6",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga",
    targetArea: "lowerBack",
  },
  tBarRows: {
    name: "Wiosłowanie na maszynie T-Bar",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Maszyna t-bar",
    targetArea: "middleBack",
  },

  oneArmDumbbellRows: {
    name: "Wiesłowanie jednorącz hantlem na ławce",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Hantel",
    targetArea: "middleBack",
  },

  hyperextensions: {
    name: "Wyprosty na ławce rzymskiej",
    set: "3-4",
    reps: "10-15",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Ławka rzymska",
    targetArea: "lowerBack",
  },
  pullDowns: {
    name: "Lat pulldown",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Wyciąg górny",
    targetArea: "upperBack",
  },
  shrugs: {
    name: "Szrugsy",
    set: "2",
    reps: "8-12",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga/hantle",
    targetArea: "upperBack",
  },
};

const shoulders = {
  militaryPress: {
    name: "Wyciskanie sztangi nad głowę",
    set: "3-4",
    reps: "4-8",
    rir: 1,
    tempo: "20X1",
    place: "Gym",
    equipment: "Sztanga",
    targetArea: "shoulders",
  },
  cableLateralRaise: {
    name: "Wznosy bokiem na linkach wyciągu dolnego",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Wyciąg dolny",
    targetArea: "middleShoulders",
  },
  lateralRaises: {
    name: "Wznosy hantli w bok",
    set: "4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Hantle",
    targetArea: "middleShoulders",
  },

  rearDeltRaises: {
    name: "Wznosy bokiem w opadzie tułowia",
    set: "3",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "Gym",
    equipment: "Hantle",
    targetArea: "rearDeltoids",
  },

  facePulls: {
    name: "Facepulls",
    set: "3",
    reps: "8-12",
    rir: 2,
    tempo: "2111",
    place: "Gym",
    equipment: "Wyciąg górny",
    targetArea: "rearDeltoids",
  },
};

const biceps = {
  dumbbellCurls: {
    name: "Uginanie hantlami",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Hantle",
    targetArea: "normalCurls",
  },
  barbellCurls: {
    name: "Uginanie sztangi",
    set: "3-4",
    reps: "6-10",
    rir: 1,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga",
    targetArea: "normalCurls",
  },

  hammerCurls: {
    name: "Młotkowe uginanie nadgarstka",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Hantle",
    targetArea: "additional",
  },
};
const triceps = {
  tricepDips: {
    name: "Pompki na poręczach",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Poręcze do dipów",
    targetArea: "triceps",
  },
  cablePushdowns: {
    name: "Triceps pushdowns",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Wyciąg górny",
    targetArea: "triceps",
  },
  closeGripBenchPress: {
    name: "Wyciskanie wąskim uchwytem",
    set: "3-4",
    reps: "6-10",
    rir: 2,
    tempo: "20X1",
    place: "gym",
    equipment: "Sztanga, ławka",
    targetArea: "triceps",
  },
  frenchPress: {
    name: "Wyciskanie francuskie hantlami",
    set: "3-4",
    reps: "8-12",
    rir: 1,
    tempo: "2111",
    place: "gym",
    equipment: "Hantle",
    targetArea: "triceps",
  },
};
