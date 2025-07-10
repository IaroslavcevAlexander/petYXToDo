import './DeletedSection.css'

const DeletedSection = ({ notes, handleRestore, handleDeleteNote, collapsed, activeTab, viewMode }) => {
  if (activeTab !== 'deleted') return null; 

  const deletedNotes = notes.filter(note => note.deleted); 

  return (
    <div className={`deleted-section ${collapsed ? 'collapsed' : ''} ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
      <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
          <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задачa:</h6>
          <h6 className='date-completion'>Дата</h6>
      </div>

      {deletedNotes.length === 0 ? (
          <div className="empty">Корзина пуста</div>
      ) : (
        deletedNotes.map(note => {
          const indexInOriginal = notes.findIndex(n => n === note);
          return (
            <div key={indexInOriginal} className="note-deleted">
              <span className='task-text'>{note.text}</span>
              <span className="task-date">{note.date}</span>
              <button className='restore' onClick={() => handleRestore(indexInOriginal)}>↩</button>
              <button className='delete' onClick={() => handleDeleteNote(indexInOriginal)}>❌</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DeletedSection;