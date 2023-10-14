import React, { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('');

    // Function to count words in the input text
    const countWords = (inputText) => {
        const words = inputText.trim().split(/\s+/);
        return words.length;
    };

    return ( < div className = "container text-center mt-5" >
        <
        h1 > Word Counter < /h1>

        <
        textarea className = "form-control mb-3"
        placeholder = "Start typing here..."
        value = { text }
        onChange = {
            (e) => setText(e.target.value)
        }
        /> <
        p > Word Count: { countWords(text) } < /p> < /
        div >
    );
}

export default App;