// reference https://simplestepscode.com/javascript-quiz-tutorial/#step1
//First we have to make our questions and answers

const questions = [
    {
        question: "Who has the most NBA championship rings of all time?",
        answers: {
            a:'Bill Russell',
            b: 'Michael Jordan',
            c: 'Kobe Bryant',
            d: 'Kareem Abdul-Jabbar'
        },
        correctAns: 'a'
    },
    {
        question: "What University did Lebron James play for",
        answers: {
            a:'Duke',
            b: 'Ohio State',
            c: 'Wake Forest',
            d: 'none'
        },
        correctAns: 'd'
    },
    {
        question: "How many continents are there in the world?",
        answers: {
            a:'5',
            b: '7',
            c: '29',
            d: '1'
        },
        correctAns: 'b'
    },
    {
        question: "What U.S bill has the face of Andrew Jackson?",
        answers: {
            a:'$1 bill',
            b: '$2 bill',
            c: '$20 bill',
            d: '$10 bill'
        },
        correctAns: 'c'
    },
    {
        question: "Which of the following cities is NOT a capital of a U.S state?",
        answers: {
            a:'Boston',
            b: 'Lansing',
            c: 'New York City',
            d: 'Tallahassee'
        },
        correctAns: 'c'
    }
]

const list = document.getElementById('quiz')

let submitButton = document.getElementById('submit')

questions.question.forEach((item)=>{
let li= document.createElement("li")
li.innerText = item
list.appendChild(li)

} ) 

function showqs(){ 
    
}

function rightAnswer(){
    
}

