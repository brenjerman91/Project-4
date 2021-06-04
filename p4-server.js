/*
Class: CIT 281
Name: Benjamin Jensen 
*/
const fastify = require("fastify")();
const fs = require("fs");
const {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require("./p4-module.js");

// /cit/question route
fastify.get("/cit/question", (request, reply) => {
    const getTheQuestion = getQuestions();
    const questionToReturn = JSON.stringify(getTheQuestion);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(questionToReturn);
});

// /cit/answer route
fastify.get("/cit/answer", (request, reply) => {
    const getAnswerToReturn = getAnswers();
    const aToReturn = JSON.stringify(getAnswerToReturn);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(aToReturn);
  });

// /cit/questionanswer route
  fastify.get("/cit/questionanswer", (request, reply) => {
    const getQuestionAnswerToReturn = getQuestionsAnswers();
    const questionToReturn = JSON.stringify(getQuestionAnswerToReturn);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(questionToReturn);
  });

  

  
// /cit/question/:number route
  fastify.get("/cit/question/:number", (request, reply) => {
  const {number} = request.params;
  const result = getQuestion(parseInt(number))
  //do something with information
  
  reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: result.error, statuscode: 200, question: result.question, number: number});
  });










  //cit/answer/:number route
  fastify.get("/cit/answer/:number", (request, reply) => {
  const {number} = request.params;
  const result = getAnswer(parseInt(number))
  //do something with information
  
  reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: result.error, statuscode: 200, answer: result.answer, number: number});
  });



  //cit/questionanswer/:number route
  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    const result = getQuestionAnswer(parseInt(number))
    //do something with information
    
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: result.error, statuscode: 200, question: result.question, answer: result.answer, number: number});
    });


    //unmatched route handler 
    fastify.get("/*", (request, reply) => {
        reply
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send({error: "Route not found", statuscode: 404});
        });


  


const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
