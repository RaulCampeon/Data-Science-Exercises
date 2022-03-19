function openNav() {
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

$( ".active" ).click(function() {

  var buttonInnerHTML = this.innerHTML;

  delete activeUnits[buttonInnerHTML];

  updateExerciseMap();
});

$(".start").click(function(event){
  
  var self = this;
  
  if($(this).text() == 'Iniciar' || $(this).text() == 'Siguiente'){
    $(this).addClass("pressed")
    
    setTimeout(function() {
      $(self).removeClass('pressed');
      $(self).text('Solución');
    }, 100);

    getRandomExercise()

    document.getElementById('image-ejercicio').src=exercisePath;
    document.getElementById('image-solucion').src='';

  } else {

    $(this).addClass("pressed")
    
    setTimeout(function() {
      $(self).removeClass('pressed');
      $(self).text('Siguiente');
    }, 100);

    document.getElementById('image-solucion').src=solutionPath;
  }

});

function getRandomExercise(){

  const randomExerciseIndex = Math.floor(Math.random() * totalExercises) + 1;
  const randomExerciseUnit = exerciseMap[randomExerciseIndex][0];
  const randomExerciseNumber = exerciseMap[randomExerciseIndex][1];

  console.log('Unit', randomExerciseUnit);
  console.log('Number', randomExerciseNumber);

  exercisePath = 'Unidades/' + randomExerciseUnit + '/Ejercicios/Ejercicio ' + randomExerciseNumber + '.png'
  solutionPath = 'Unidades/' + randomExerciseUnit + '/Soluciones/Ejercicio ' + randomExerciseNumber + ' Solución.png'
}

function updateExerciseMap(){

  exerciseMap = []
  totalExercises = 1;
  
  for (const [key, value] of Object.entries(activeUnits)) {
    for(var i=1; i < value + 1; i++) {
      exerciseMap[totalExercises] = [key]
      exerciseMap[totalExercises][1] = i;
      totalExercises += 1
    }
  }
};

// Cuenta de ejercicios por unidad
const exerciseUnits = {
  'Sets, Limites, Series' : 89,
  'Counting' : 18,
  'Discrete Random Variables' : 44,
  'Continuous Random Variables' : 49,
  'Bayesian Inference' : 40,
  'Limit Theorem' : 25,
  'Bernoulloi, Poisson' : 46,
  'Markov Chains' : 24,
  'Linear Classifiers' : 42,
  'Linear Regression, Non-Linear Classifiers' : 33,
  'Neural Networks' : 33,
  'Unsupervised Learning' : 35,
  'Reinforcment Learning' : 16,
  'Estimators and Confidence Intervals' : 34,
  'Gaussian Distribution' : 13,
  'Modeling' : 43,
  'Concepts' : 9,
  'Hypothesis Testing': 3,
  'Methods of Estimation': 81,
  'Derivadas': 30
};

var activeUnits = {... exerciseUnits};
var exerciseMap = []
var randomExercise = 1;
var totalExercises = 1;

updateExerciseMap();