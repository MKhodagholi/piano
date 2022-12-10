import "./styles/main.scss";
import { notes, NoteType } from "./notes";
import Octave from "./components/Octave/Octave";
import React from "react";

function isCharacterKeyPress(evt: any) {
  if (typeof evt.which == "undefined") {
    // This is IE, which only fires keypress events for printable keys
    return true;
  } else if (typeof evt.which == "number" && evt.which > 0) {
    // In other browsers except old versions of WebKit, evt.which is
    // only greater than zero if the keypress is a printable key.
    // We need to filter out backspace and ctrl/alt/meta key combinations
    return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;
  }
  return false;
}

function App() {
  const keyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isCharacterKeyPress(e.code)) return;
    else {
      const key = e.code.charAt(3).toLowerCase();
      let note: NoteType | undefined = notes.find((note) => note.key === key);
      if (note) {
        const audio: HTMLAudioElement = new Audio(
          `/sounds/piano_${note.note}.mp3`
        );
        audio.play();
      }
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const note = e.currentTarget.value;
    const audio: HTMLAudioElement = new Audio(`/sounds/piano_${note}.mp3`);
    audio.play();
  };

  return (
    <div>
      <Octave
        notes={notes}
        clickHandler={handleClick}
        keyBoardHandler={keyPress}
      />
    </div>
  );
}

export default App;
