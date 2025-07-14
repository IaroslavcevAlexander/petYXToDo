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
import Settings from './components/Settings';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    
  }, [notes]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [menuCollapsed, setMenuCollapsed] = useState(() => {
    const saved = localStorage.getItem('menuCollapsed');
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem('menuCollapsed', JSON.stringify(menuCollapsed))
  }, [menuCollapsed]);

  const [drawerCollapsed, setDrawerCollapsed] = useState(true);

  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem('activeTab');
    return saved ? JSON.parse(saved) : 'today';
  });
  useEffect(() => {
    localStorage.setItem('activeTab', JSON.stringify(activeTab));
  }, [activeTab]);

  const inputRef = useRef(null);

  const [viewMode, setViewMode] = useState(() => {
    const saved = localStorage.getItem('viewMode');
    return saved ? JSON.parse(saved) : 'list';
  });
  useEffect(() => {
    localStorage.setItem('viewMode', JSON.stringify(viewMode));

  }, [viewMode]);


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
        deleted: false,
        id: Date.now()
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

  // header

  const [showSettings, setShowSettings] = useState(false);

  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    'wave-gradient',
    'wave-gradient-1',
    'wave-gradient-2'
  ];

  const changeBackground = () => {
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  return (
    <>
      <div className={backgrounds[bgIndex]}></div>
      
      {showSettings && <Settings 
        onClose={() => setShowSettings(false)} 
        changeBackground={changeBackground} 
      />} 

      <Header 
       setShowSettings={setShowSettings}
      />
      {/* lol */}

      <MenuSection 
        collapsed={menuCollapsed}
        setCollapsed={setMenuCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <TaskDrawer
        setCollapsed={setMenuCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedIndex={selectedIndex}
        drawerCollapsed={drawerCollapsed}
        setDrawerCollapsed={setDrawerCollapsed}
        toggleImportant={toggleImportant}
        toggleCompleted={toggleCompleted} 
        notes={notes}
      />

      <WorkSpace collapsed={menuCollapsed} 
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

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
        viewMode={viewMode}
        setSelectedIndex={setSelectedIndex}
        setDrawerCollapsed={setDrawerCollapsed}
      />

      <CompletedSection 
        notes={notes} 
        toggleCompleted={toggleCompleted}
        collapsed={menuCollapsed}
        activeTab={activeTab}
        handleMarkAsDeleted={handleMarkAsDeleted}
        viewMode={viewMode}
        setSelectedIndex={setSelectedIndex}
        setDrawerCollapsed={setDrawerCollapsed}
      />

      {activeTab === 'all' && (
      <PlansSection 
        notes={notes} 
        toggleCompleted={toggleCompleted} 
        toggleImportant={toggleImportant}
        collapsed={menuCollapsed}
        activeTab={activeTab}
        viewMode={viewMode}
        setSelectedIndex={setSelectedIndex}
        setDrawerCollapsed={setDrawerCollapsed}
      />
      )}

      {activeTab === 'important' && (
      <PrioritySection 
        notes={notes}
        toggleImportant={toggleImportant}
        toggleCompleted={toggleCompleted} 
        collapsed={menuCollapsed}
        activeTab={activeTab}
        viewMode={viewMode}
        setSelectedIndex={setSelectedIndex}
        setDrawerCollapsed={setDrawerCollapsed}
      />
      )}

      {activeTab === 'deleted' && (
        <DeletedSection 
          notes={notes}
          handleRestore={handleRestore}
          handleDeleteNote={handleDeleteNote}
          collapsed={menuCollapsed}
          activeTab={activeTab}
          viewMode={viewMode}
        />
      )}
    </>
  );
}

export default App;
