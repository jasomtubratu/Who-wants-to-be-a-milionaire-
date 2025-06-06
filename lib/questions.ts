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
    category: "Science",
    explanation: "Mars is called the Red Planet because of iron oxide (rust) on its surface, which gives it a reddish appearance.",
    hostNotes: "Easy starter question. Mars is easily recognizable by its red color in the night sky."
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
    category: "Art",
    explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519. It's housed in the Louvre Museum in Paris.",
    hostNotes: "Classic art question. The Mona Lisa is probably the most famous painting in the world."
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
    category: "Geography",
    explanation: "Tokyo has been Japan's capital since 1868, when the imperial court moved there from Kyoto.",
    hostNotes: "Straightforward geography. Tokyo is one of the world's largest metropolitan areas."
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
    category: "Science",
    explanation: "Oxygen has the chemical symbol 'O' and is essential for most life on Earth. It makes up about 21% of our atmosphere.",
    hostNotes: "Basic chemistry. Gold is Au, Osmium is Os, Oganesson is Og."
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
    category: "Literature",
    explanation: "William Shakespeare wrote Romeo and Juliet around 1595. It's one of his most famous tragedies about young love.",
    hostNotes: "First milestone question. Shakespeare is the most famous English playwright."
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
    category: "Geography",
    explanation: "Kangaroos are native to Australia and are found nowhere else in the wild. They're Australia's national symbol.",
    hostNotes: "Animal geography. Kangaroos are marsupials unique to Australia."
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
    category: "Geography",
    explanation: "The Pacific Ocean covers about 46% of Earth's water surface and is larger than all land areas combined.",
    hostNotes: "The Pacific is massive - it's larger than all continents put together."
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
    category: "Literature",
    explanation: "Harper Lee published 'To Kill a Mockingbird' in 1960. It won the Pulitzer Prize and deals with racial injustice.",
    hostNotes: "Classic American literature. Lee famously published very little after this masterpiece."
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
    category: "Mathematics",
    explanation: "2 is the smallest prime number and the only even prime number. A prime number is only divisible by 1 and itself.",
    hostNotes: "Math concept question. 1 is not considered prime by modern definition."
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
    category: "Technology",
    explanation: "While Python, Java, and Ruby are all programming languages, Cobra is not a mainstream programming language.",
    hostNotes: "Second milestone. There is actually a Cobra language, but it's very obscure compared to the others."
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
    category: "History",
    explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg during its maiden voyage from Southampton to New York.",
    hostNotes: "Famous historical disaster. The ship was considered 'unsinkable' but sank in less than 3 hours."
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
    category: "Science",
    explanation: "Albert Einstein developed both special (1905) and general (1915) theories of relativity, revolutionizing our understanding of space and time.",
    hostNotes: "Einstein is probably the most famous scientist. His theories changed physics forever."
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
    category: "Geography",
    explanation: "Canberra was purpose-built as Australia's capital in 1913, chosen as a compromise between Sydney and Melbourne.",
    hostNotes: "Tricky question - many people think it's Sydney or Melbourne. Canberra was built specifically to be the capital."
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
    category: "History",
    explanation: "The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders of the Ancient World, built around 280 BC.",
    hostNotes: "Advanced history question. The lighthouse was over 100 meters tall and guided ships for over 1,000 years."
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
    category: "Science",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen is about 21%. This might surprise many people!",
    hostNotes: "Million dollar question! Many people think it's oxygen, but nitrogen is much more abundant."
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