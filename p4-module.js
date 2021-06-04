/*
Class: CIT 281
Name: Benjamin Jensen 
*/

const data = require("./p4-data");


function getQuestions() {
  return data.data.map((q) => q.question);
}

console.log

function getAnswers() {
  return data.data.map((a) => a.answer);
}

//not sure if this worked
function getQuestionsAnswers() {
  let clonedData = [...data.data];
  return clonedData;
}

function getQuestion(number = "") {
  let num = Number.parseInt(number);

  let question = data.data[number - 1]?.question || '';
  
  let error = '';
  
  let object = {
    question: question,
    number: num,
    error: error,
  };
  if(Number.isInteger(object.number) == false) {
    object.error = 'Question number must be an integer'
  }
  
  else if(object.number < 1){
    object.error = 'Question number must be >= 1';
  }

  else if(object.number > 3){
    object.error = "Answer number must be less than the number of questions (3)";

  }
  
  return object;
};


function getAnswer(number = ""){
  const num = Number.parseInt(number);

  // fetching the question
  let answer = data.data[number - 1]?.answer || '';

  // creating the error string
  let error = '';
  // returning the required object
  let object = {
    error: error,
    number: num,
    answer: answer,
  };
  if(Number.isInteger(object.number) == false) {
    object.error = 'Question number must be an integer'
  }
  
  else if(object.number < 1){
    object.error = 'Question number must be >= 1';
  }

  else if(object.number > 3){
    object.error = "Answer number must be less than the number of questions (3)";

  }

  return object;
};



function getQuestionAnswer(number = ""){
  let num = Number.parseInt(number);
  let answer = data.data[number - 1]?.answer || '';
  let error = '';
  let question = data.data[number - 1]?.question || '';
  
  let object = {
    error: error,
    question: question,
    number: num,
    answer: answer,
    
    
  };
  
  if(Number.isInteger(object.number) == false) {
    object.error = 'Question number must be an integer'
  }
  
  else if(object.number < 1){
    object.error = 'Question number must be >= 1';
  }

  else if(object.number > 3){
    object.error = "Answer number must be less than the number of questions (3)";

  }

  return object;
};


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit


// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}

module.exports = {
  getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer
};
