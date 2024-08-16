// Function to get the title of the blog
function getBlogTitle() {
  const titleElement = document.querySelector('h3');
  return titleElement ? titleElement.textContent.trim() : '';
}

// Function to handle option clicks
function handleOptionClick(optionElement, index, correctIndex) {
  if (index === correctIndex) {
    alert('Correct!');
    document.querySelector('.quiz-overlay').style.display = 'none';
  } else {
    alert('Incorrect, try again.');
  }
}

// Function to create question elements
function createQuestionElement(question, options, correctIndex) {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const questionText = document.createElement('p');
  questionText.textContent = question;
  questionDiv.appendChild(questionText);

  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options-container');  

  options.forEach((option, index) => {
    const optionElement = document.createElement('p');
    optionElement.textContent = option;
    optionElement.classList.add('option');
    optionElement.addEventListener('click', () => {
      handleOptionClick(optionElement, index, correctIndex);
    });
    optionsContainer.appendChild(optionElement);
  });

  questionDiv.appendChild(optionsContainer);
  return questionDiv;
}

// Function to display questions based on the blog title
function displayQuestions() {
  const title = getBlogTitle();
  const quizContainer = document.querySelector('.quiz');
  
  // Clear existing questions
  quizContainer.innerHTML = "";

  const questions = {
    "The Art of Minimalism: How to Simplify Your Life": [
      {
        question: "What is minimalism primarily about?",
        options: [
          "a) Acquiring more possessions",
          "b) Stripping away the unnecessary",
          "c) Living a luxurious life",
          "d) Increasing clutter"
        ],
        correct: 1 // index of the correct option
      },
      {
        question: "What is a key benefit of minimalism?",
        options: [
          "a) Increased physical clutter",
          "b) Reduced mental clarity",
          "c) More peaceful and maintainable space",
          "d) More impulse buying"
        ],
        correct: 2 // index of the correct option
      }
    ],
    "The Evolution of Video Games: From Pong to VR": [
      {
        question: "What was the first popular video game?",
        options: [
          "a) Space Invaders",
          "b) Pong",
          "c) Super Mario Bros.",
          "d) DOOM"
        ],
        correct: 1 // index of the correct option
      },
      {
        question: "Which console introduced 3D graphics?",
        options: [
          "a) Nintendo Entertainment System",
          "b) PlayStation",
          "c) Xbox",
          "d) PlayStation 3"
        ],
        correct: 1 // index of the correct option
      }
    ],
    "Top 10 Unbelievable Facts About Space": [
      {
        question: "What is the largest volcano in the solar system?",
        options: [
          "a) Mount Everest",
          "b) Olympus Mons",
          "c) Mauna Kea",
          "d) Mount Fuji"
        ],
        correct: 1 // index of the correct option
      },
      {
        question: "What is a characteristic of black holes?",
        options: [
          "a) They are transparent",
          "b) They warp space and time",
          "c) They are cool and bright",
          "d) They have a thick atmosphere"
        ],
        correct: 1 // index of the correct option
      }
    ],
    "Why Cats Are Secretly Ruling the World": [
      {
        question: "What did ancient Egyptians believe about cats?",
        options: [
          "a) They were ordinary pets", 
          "b) They were worshipped as gods.", 
          "c) They were considered pests.", 
          "d) They were used for hunting."
        ],
        correct: 1 // index of the correct option
      },
      {
        question: "Where have cats been spotted, according to the text?",
        options: [
          "a) In the wild.", 
          "b) At the feet of royalty and in offices of world leaders.", 
          "c) Only in homes.", 
          "d) In laboratories."
        ],
        correct: 1 // index of the correct option
      }
    ],
    "The History of the Internet: How a Simple Idea Changed the World": [
      {
        question: "What is the main topic of this blog?",
        options: [
          "a) The development of the web.", 
          "b) The history of email.", 
          "c) The invention of social media.", 
          "d) The evolution of web design."
        ],
        correct: 0 // index of the correct option
      },
      {
        question: "Who were the key pioneers mentioned in the text?",
        options: [
          "a) Tim Berners-Lee and Vint Cerf", 
          "b) Mark Zuckerberg and Jack Dorsey", 
          "c) Steve Jobs and Bill Gates", 
          "d) Larry Page and Sergey Brin"
        ],
        correct: 0 // index of the correct option
      }
    ]
  };

  if (questions[title]) {
    const questionSet = questions[title];
    
    questionSet.forEach(q => {
      const questionElement = createQuestionElement(q.question, q.options, q.correct);
      quizContainer.appendChild(questionElement);
    });
  } else {
    const noQuestionsMessage = document.createElement('p');
    noQuestionsMessage.textContent = "No questions available for this blog.";
    quizContainer.appendChild(noQuestionsMessage);
  }
}

// Call the function to display questions
displayQuestions();
