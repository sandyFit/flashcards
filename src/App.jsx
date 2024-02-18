import React, { useState } from 'react'

const App = () => {
  return (
      <div>
          <Flashcards/>
    </div>
  )
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

const Flashcards = () => {
    // useState hook to manage the state of the selected question ID.
    // Initially, no question is selected, so selectedId is null.
    const [selectedId, setSelectedId] = useState(null);

    // Define a function to handle clicking on a flashcard.
    const handleClick = (id) => {
        // Toggle the selected state: if the clicked ID is already selected,
        // deselect it (set to null); otherwise, set it as the selectedId.
        setSelectedId(id !== selectedId ? id : null);
    };

    // Render the flashcards.
    return (
        <div className='flashcards'>
            {questions.map(question => (
                // For each question, create a div that can be clicked.
                // The div is given a key for React to manage the list efficiently.
                // The className changes based on whether the question is selected.
                <div
                    key={question.id}
                    onClick={() => handleClick(question.id)}
                    className={question.id === selectedId ? 'selected' : ''}
                >
                    {/* The content changes based on whether the question is selected:
                    if selected, show the answer; otherwise, show the question. */}
                    <p>{ question.id === selectedId ? question.answer : question.question}</p>
                </div>
            ))}
            
        </div>

    )

}

export default App;
