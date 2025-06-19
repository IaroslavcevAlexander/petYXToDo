import './App.css'
import Header from './components/Header'
import MenuSection from './components/MenuSection'
import WorkSpace from './components/WorkSpace'
import AddSection from './components/AddSection'
import PlansSection from './components/PlansSection'
import PrioritySection from './components/PrioritySection'
import { useState } from 'react'

function App() {
  // const updateNote = (index, updates) => {
  //   setNotes(prev => {
  //   const newNotes = [...prev];
  //   newNotes[index] = {
  //     ...newNotes[index],
  //     ...updates
  //   };
  //   });
  // };

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const trimmed = note.trim();
    if (trimmed === '') return;

    setNotes([
      ...notes,
      {
        text: trimmed,
        date: new Date().toLocaleDateString(),
        important: false,
        completed: false
      }
    ]);
    setNote('');
  };

  const toggleComleted = (index) => {
      const updated = [...notes];
      updated[index].completed = !updated[index].completed;
      setNotes(updated)
  }

  const toggleImportant = (index) => {
    const updated = [...notes];
    updated[index].important = !updated[index].important;
    setNotes(updated);
  };

  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <>
      <Header />
      <MenuSection collapsed={menuCollapsed} setCollapsed={setMenuCollapsed} />
      <WorkSpace collapsed={menuCollapsed} />
      <AddSection 
        note={note}
        setNote={setNote}
        handleAddNote={handleAddNote}
        collapsed={menuCollapsed}
      />
      <PlansSection 
        notes={notes} 
        toggleComleted={toggleComleted} 
        toggleImportant={toggleImportant}
        collapsed={menuCollapsed}

      />
      <PrioritySection 
      notes={notes} 
      toggleImportant={toggleImportant}
     collapsed={menuCollapsed}
      />
    </>
  );
}

export default App;
