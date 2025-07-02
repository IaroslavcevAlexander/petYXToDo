import './App.css'
import Header from './components/Header'
import MenuSection from './components/MenuSection'
import TaskDrawer from './components/TaskDrawer'
import WorkSpace from './components/WorkSpace'
import AddSection from './components/AddSection'
import PlansSection from './components/PlansSection'
import PrioritySection from './components/PrioritySection'
import { useRef, useState } from 'react'
import TodaySection from './components/TodaySection'
import CompletedSection from './components/CompletedSection'

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('today');
  const inputRef = useRef(null);

  const updateNote = (index, updates) => {
    setNotes(prev => {
    const newNotes = [...prev];
    newNotes[index] = {
      ...newNotes[index],
      ...updates
    };
    return newNotes;
    });
  };

  const handleAddNote = () => {
    const trimmed = note.trim();
    if (trimmed === '') return;

    const newNote = {
        text: trimmed,
        date: new Date().toLocaleDateString(),
        important: activeTab === "important",
        completed: false
    };

    if (document.activeElement !== inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 0);
    }

    setNotes([...notes, newNote]);
    setNote('');
  };

  const toggleCompleted = (index) => {
    updateNote(index,{ completed: !notes[index].completed });
  }

  const toggleImportant = (index) => {
    updateNote(index,{ important: !notes[index].important });

  };

  return (
    <>
      <Header />
      {/* lol */}

      <MenuSection 
        collapsed={menuCollapsed}
        setCollapsed={setMenuCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <TaskDrawer
        collapsed={menuCollapsed}
        setCollapsed={setMenuCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <WorkSpace collapsed={menuCollapsed} />

      <AddSection 
        note={note}
        setNote={setNote}
        handleAddNote={handleAddNote}
        collapsed={menuCollapsed}
        inputRef={inputRef}
      />

      <TodaySection 
        notes={notes} 
        toggleCompleted={toggleCompleted} 
        toggleImportant={toggleImportant}
        collapsed={menuCollapsed}
        activeTab={activeTab}
      />

      <CompletedSection 
        notes={notes} 
        toggleCompleted={toggleCompleted}
        collapsed={menuCollapsed}
        activeTab={activeTab}
      />

      {activeTab === 'all' && (
      <PlansSection 
        notes={notes} 
        toggleCompleted={toggleCompleted} 
        toggleImportant={toggleImportant}
        collapsed={menuCollapsed}
        activeTab={activeTab}
      />
      )}

      {activeTab === 'important' && (
      <PrioritySection 
        notes={notes}
        toggleImportant={toggleImportant}
        toggleCompleted={toggleCompleted} 
        collapsed={menuCollapsed}
        activeTab={activeTab}
      />

      )}
    </>
  );
}

export default App;
