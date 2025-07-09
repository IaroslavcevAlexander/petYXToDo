import './App.css'
import Header from './components/Header'
import MenuSection from './components/MenuSection'
import TaskDrawer from './components/TaskDrawer'
import WorkSpace from './components/WorkSpace'
import AddSection from './components/AddSection'
import PlansSection from './components/PlansSection'
import PrioritySection from './components/PrioritySection'
import { useRef, useState, useEffect } from 'react'
import TodaySection from './components/TodaySection'
import CompletedSection from './components/CompletedSection'
import DeletedSection from './components/DeletedSection';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('today');
  const inputRef = useRef(null);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


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
        completed: false,
        deleted: false
    };

    if (document.activeElement !== inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 0);
    }

    setNotes([newNote, ...notes]);
    setNote('');
  };

  const handleMarkAsDeleted = (index) => {
    updateNote(index, { deleted: true });
  };

  const handleRestore = (index) => {
    updateNote(index, { deleted: false });
  };

  const handleDeleteNote = (index) => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index))
  };

  // const sortedNotes = [...notes].sort((a, b) => {
  //   if (a.important && !b.important) return -1;
  //   if (!a.important && b.important) return 1;

  //   return b.createdAt - a.createdAt;
  // });

  const toggleCompleted = (index) => {
    const task = notes[index];

    if (task.completed) {
      updateNote(index, {
        completed: false,
        markedForRemoval: false
      });
    } else {
        updateNote(index, { markedForRemoval: true });

        setTimeout(() => {
          updateNote(index, {
            completed: true,
            markedForRemoval: false
          });
        }, 100);
    }
  } 

  const toggleImportant = (index) => {
    updateNote(index,{ important: !notes[index].important });

  };

  return (
    <>

      <div class="wave-gradient"></div>

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
        handleMarkAsDeleted={handleMarkAsDeleted}
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

      {activeTab === 'deleted' && (
        <DeletedSection 
          notes={notes}
          handleRestore={handleRestore}
          handleDeleteNote={handleDeleteNote}
          collapsed={menuCollapsed}
          activeTab={activeTab}
        />
      )}
    </>
  );
}

export default App;
