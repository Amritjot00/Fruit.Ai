import React, { useState } from 'react';
import './Translator.css';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('English');
  const [toLanguage, setToLanguage] = useState('Spanish');

  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Chinese', 'Japanese'];

  const handleTranslate = () => {
    // For demo purposes, just reversing the text
    setOutputText(inputText.split('').reverse().join(''));
  };

  return (
    <div className="translator-container">
      <h2 className="translator-title">Fruit.AI Translator</h2>
      
      <div className="translator-box">
        <div className="language-selection">
          <label>From:</label>
          <select
            value={fromLanguage}
            onChange={(e) => setFromLanguage(e.target.value)}
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>

          <label>To:</label>
          <select
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
          >
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className="text-areas">
          <textarea
            className="input-text"
            placeholder="Enter text to translate..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <textarea
            className="output-text"
            placeholder="Translation will appear here..."
            value={outputText}
            readOnly
          />
        </div>

        <button className="translate-button" onClick={handleTranslate}>
          Translate
        </button>
      </div>
    </div>
  );
};

export default Translator;
