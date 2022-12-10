import React from "react";
import { NoteType } from "../../notes";

import "../../styles/_note.scss";

type Props = {
  note: NoteType;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Note: React.FC<Props> = ({ note, clickHandler }) => (
  <button
    value={note.note}
    className={`note ${note.color}`}
    onClick={clickHandler}
  ></button>
);

export default Note;
