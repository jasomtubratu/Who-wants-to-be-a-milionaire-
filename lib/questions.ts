import { Question } from "./types";

export const moneyLadder = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000
];

export const questions: Question[] = [
  {
    id: "q1",
    text: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false }
    ],
    value: 100,
    category: "Science"
  },
  {
    id: "q2",
    text: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Michelangelo", isCorrect: false }
    ],
    value: 200,
    category: "Art"
  },
  {
    id: "q3",
    text: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", isCorrect: false },
      { text: "Seoul", isCorrect: false },
      { text: "Tokyo", isCorrect: true },
      { text: "Bangkok", isCorrect: false }
    ],
    value: 300,
    category: "Geography"
  },
  {
    id: "q4",
    text: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Gold", isCorrect: false },
      { text: "Oxygen", isCorrect: true },
      { text: "Osmium", isCorrect: false },
      { text: "Oganesson", isCorrect: false }
    ],
    value: 500,
    category: "Science"
  },
  {
    id: "q5",
    text: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", isCorrect: false },
      { text: "Jane Austen", isCorrect: false },
      { text: "William Shakespeare", isCorrect: true },
      { text: "Mark Twain", isCorrect: false }
    ],
    value: 1000,
    category: "Literature"
  },
  {
    id: "q6",
    text: "Which country is home to the kangaroo?",
    answers: [
      { text: "New Zealand", isCorrect: false },
      { text: "South Africa", isCorrect: false },
      { text: "Australia", isCorrect: true },
      { text: "Brazil", isCorrect: false }
    ],
    value: 2000,
    category: "Geography"
  },
  {
    id: "q7",
    text: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", isCorrect: false },
      { text: "Indian Ocean", isCorrect: false },
      { text: "Arctic Ocean", isCorrect: false },
      { text: "Pacific Ocean", isCorrect: true }
    ],
    value: 4000,
    category: "Geography"
  },
  {
    id: "q8",
    text: "Who is the author of 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", isCorrect: true },
      { text: "J.K. Rowling", isCorrect: false },
      { text: "Stephen King", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false }
    ],
    value: 8000,
    category: "Literature"
  },
  {
    id: "q9",
    text: "What is the smallest prime number?",
    answers: [
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "3", isCorrect: false }
    ],
    value: 16000,
    category: "Mathematics"
  },
  {
    id: "q10",
    text: "Which of these is NOT a programming language?",
    answers: [
      { text: "Python", isCorrect: false },
      { text: "Java", isCorrect: false },
      { text: "Cobra", isCorrect: true },
      { text: "Ruby", isCorrect: false }
    ],
    value: 32000,
    category: "Technology"
  },
  {
    id: "q11",
    text: "What year did the Titanic sink?",
    answers: [
      { text: "1912", isCorrect: true },
      { text: "1905", isCorrect: false },
      { text: "1920", isCorrect: false },
      { text: "1931", isCorrect: false }
    ],
    value: 64000,
    category: "History"
  },
  {
    id: "q12",
    text: "Which scientist proposed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", isCorrect: false },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Niels Bohr", isCorrect: false },
      { text: "Galileo Galilei", isCorrect: false }
    ],
    value: 125000,
    category: "Science"
  },
  {
    id: "q13",
    text: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", isCorrect: false },
      { text: "Melbourne", isCorrect: false },
      { text: "Perth", isCorrect: false },
      { text: "Canberra", isCorrect: true }
    ],
    value: 250000,
    category: "Geography"
  },
  {
    id: "q14",
    text: "Which ancient wonder was located in Alexandria?",
    answers: [
      { text: "The Colossus of Rhodes", isCorrect: false },
      { text: "The Hanging Gardens", isCorrect: false },
      { text: "The Lighthouse", isCorrect: true },
      { text: "The Temple of Artemis", isCorrect: false }
    ],
    value: 500000,
    category: "History"
  },
  {
    id: "q15",
    text: "What is the most abundant gas in Earth's atmosphere?",
    answers: [
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon Dioxide", isCorrect: false },
      { text: "Argon", isCorrect: false },
      { text: "Nitrogen", isCorrect: true }
    ],
    value: 1000000,
    category: "Science"
  }
];

export const lifelines = [
  {
    id: "fifty",
    name: "50:50",
    description: "Removes two incorrect answers",
    icon: "scissors",
    used: false
  },
  {
    id: "phone",
    name: "Phone a Friend",
    description: "Call a friend for help",
    icon: "phone",
    used: false
  },
  {
    id: "audience",
    name: "Ask the Audience",
    description: "See what the audience thinks",
    icon: "users",
    used: false
  }
];