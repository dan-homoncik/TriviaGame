//needs to have a function to start the game and resets all game variables






$("#start-button").click(function() {
    $("#start-button").hide();
    gameStart();
});

var gameStart = function () {
    var correctAnswerCount = 0;
    var wrongAnswerCount = 0;
    var questionNum = 1;
    questionFunc();

};

//each question should be written to html from a function

var questionFunc = function() {

    var questionDiv = $("<div>");
    questionDiv.addClass("questionFormat");

    var answerUl = $("<ul>");

    var answerLi = $("<li>");
    answerLi.addClass("answerFormat");

    //loop through the object and display the questions/options
    for (q in questions){

        questionDiv.text(questions[q]);
        answerLi.text(answers[q]);
        
        $("#questions").append(questionDiv);
        $("#answers").append(answerLi);
        
        console.log(questions[q].question);
        console.log(questions[q].answers);
    }
};


//the trivia questions in a multidimensional array
var questions = {
    question1: {
        question: "Which European country did not qualify for the 2018 World Cup?",
        answers: ["Iceland", "Sweden", "Italy", "Denmark"]
    },

    question2: {
        question: "Which country has won the world cup 5 times?",
        answers: ["Brazil", "Germany", "Italy", "Argentina"]
    },

    question3: {
        question: "What was the name of the original world cup trophy?",
        answers: ["World Cup Trophy", "Jules Rimet", "Philip A. Anschutz", "Lombardi"]
    },

    question4: {
        question: "Who is the most prolific scorer in World Cup history?",
        answers: ["Iceland", "Sweden", "Italy", "Denmark"]
    },

    question5: {
        question: "Who won the previous World Cup in 2014?",
        answers: ["Brazil", "Germany", "Spain", "Italy"]
    },

    question6: {
        question: "Where will the 2020 world cup be played?",
        answers: ["USA/Mexico/Canada", "Morocco", "Qatar", "England"]
    },

    question7: {
        question: "What year was the first World Cup?",
        answers: ["1904", "1930", "1952", "1896"]
    },

    question8: {
        question: "Where was the first World Cup played?",
        answers: ["England", "Brazil", "France", "Uruguay"]
    },

    question9: {
        question: "Which is the smallest country by population to have ever qualified for a world cup?",
        answers: ["Iceland","Trinidad & Tobago", "Jamaica", "Kuwait"]
    },

    question10: {
        question: "When was the last time Brazil won the world cup?",
        answers: ["2002", "1998", "2006", "2010"]
    },
    
}
// answer key in an array
var answerKey = ["3", "1", "2", "4", "2", "3", "2", "4", "1", "1"];



//a different function will determine the clicked answer and count the user's score in the background


