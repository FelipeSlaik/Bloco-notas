import React from "react";
import logo from './assets/logo-projeto-react.svg'
import { NoteCard } from "./components/note-card";
import { NewNoteCard } from "./components/new-note-card";

const note = {
  date: new Date(),
  content: 'Hello World'
}


export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW-Expert" />

      <form className="w-full">
        <input
          type="text" placeholder='Busque suas notas...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-800" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">

        <NewNoteCard />
        <NoteCard note={note} />

      </div>
    </div>
  )
}

