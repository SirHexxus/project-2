import React, { useState, useEffect } from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Speech = ({ handleVoice, name }) => {
  // use voiceinput
  let getVoice = () => {
    // start listening
    recognition.start();
    console.log('listening...');

    // handle input
    recognition.onresult = e => {
      let last = e.results.length - 1;
      let transcript = e.results[last][0].transcript;
      let mobileRepeatBug =
        last === 1 && transcript === e.results[0][0].transcript;

      if (!mobileRepeatBug) {
        console.log(transcript);
        handleVoice(transcript, name);
      }
    };

    recognition.onspeechend = () => {
      recognition.stop();
      console.log('no longer listening.');
    };
  };

  return (
    <div>
      <i className='material-icons' onClick={getVoice}>
        mic
      </i>
    </div>
  );
};

export default Speech;
