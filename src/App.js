import React, { useState } from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./App.css";

const App = () => {

  const [textToCopy,setTextToCopy]=useState()
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening= ()=>SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="main">
        <h1>Voice Assistant</h1>
        <p>everything you speak will display here......</p>
        <div className="box">
          <div className="main-content" onClick={()=>setTextToCopy(transcript)}>{transcript}</div>
          <div className="button">
            <button onClick={setCopied}>
              {isCopied ? "copied" : "copy to clipboard"}
            </button>
            <button onClick={startListening}>start speaking</button>
            <button onClick={SpeechRecognition.stopListening}>stop speaking</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
