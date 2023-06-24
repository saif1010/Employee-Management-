import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';

function App() {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    const handleFormSubmit = (input) => {
        setUserInput(input);
        setResult(`You entered: ${input}`);
    };

    return (
        <div>
            <Header />
            <Form userInput={userInput} onFormSubmit={handleFormSubmit} />
            <Output result={userInput} />
        </div>
    );
}

export default App;
