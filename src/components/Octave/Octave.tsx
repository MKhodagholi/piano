import { NoteType } from "../../notes";
import Note from "../Note/Note";
import "../../styles/_octave.scss";
import React from "react";

type Props = {
  notes: NoteType[];
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  keyBoardHandler: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};

const Octave: React.FC<Props> = ({ notes, clickHandler, keyBoardHandler }) => {
  return (
    <div tabIndex={0} className="octave" onKeyDown={keyBoardHandler}>
      {notes.map((note: NoteType) => (
        <Note note={note} key={note.id} clickHandler={clickHandler} />
      ))}
    </div>
  );
};

export default Octave;
