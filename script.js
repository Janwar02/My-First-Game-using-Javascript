// reference https://simplestepscode.com/javascript-quiz-tutorial/#step1
//First we have to make our questions and answers

let question1 = 
    {
        question: "Who has the most NBA championship rings of all time?",
        answers: ['Bill Russell', 'Michael Jordan', 'Kobe Bryant', 'Kareem Abdul-Jabbar'],
        correctAns:0
    }
 let question2={
        question: 'What University did Lebron James play for?',
        answers: ['Duke', 'Ohio State', 'Wake Forest', 'none'],
        correctAns: 3
    }
 let question3= {
        question: "How many continents are there in the world?",
        answers: ['5', '7', '29', '1'],
        correctAns: 1
    }
 let question4= {
        question: "What U.S bill has the face of Andrew Jackson?",
        answers: ['$1 bill','$2 bill', '$20 bill', '$10 bill'],
        correctAns: 2
    }
 let question5=   {
        question: "Which of the following cities is NOT a capital of a U.S state?",
        answers: [
            'Boston',
            'Lansing',
            'New York City',
             'Tallahassee'
        ],
        correctAns: 2
    }
let data = [
    "Who has the most NBA championship rings of all time?",
    "What University did Lebron James play for?",
    "How many continents are there in the world?",
    "What U.S bill has the face of Andrew Jackson?",
    "Which of the following cities is NOT a capital of a U.S state?"
]
 
// we have to show our questions in our browser using DOM manipulation and Query selector
function showQuestion(q){ 
    let questionsList = document.querySelector('.questions-list')
    for (i=0; i< data.length; i++) {
        let question= document.createElement("li")
        text = data[i]
        question.innerHTML = `${i +1 }. ${text}`
        questionsList.appendChild(question)
    }
    let ans = document.querySelectorAll('.answer')
}
showQuestion(question2)

