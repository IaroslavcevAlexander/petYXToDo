import './PrioritySection.css'

const PrioritySection = ({ notes, toggleCompleted, toggleImportant, collapsed, activeTab, viewMode, setSelectedIndex, setDrawerCollapsed  }) => {
    if (activeTab !== "important") return null;

    const importantNotes = notes
        .map((note, index) => ({ note, index }))
        .filter(({ note }) => note.important && !note.completed);
 
    return (
        <>
            <div className={`priority-plans ${collapsed ? 'collapsed' : ''} ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
                <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
                    <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задачa:</h6>
                    <h6 className='date-completion'>Дата</h6>
                    <h6 className='importace'>Важность</h6>
                </div>

                {importantNotes.length === 0 ? (
                    <div className="empty">Важных задачь нет</div>
                ) : (
                    importantNotes.map(({note, index}) => (
                        <div className={` task ${note.important ? 'important' : ''}`} key={note.id}>
                            <div className='task-text'
                                onClick={() => {
                                setSelectedIndex(index);
                                setDrawerCollapsed(false);
                                }}>{note.text}</div>
                            <div className="task-header">
                                <span className="task-date">{note.date}</span>
                                <button className='task-priority' 
                                        onClick={() => toggleImportant(index)}
                                >
                                    {note.important ? "!" : ""}
                                </button>
                                <button
                                    className={`task-done ${note.completed ? 'done' : ''}`}
                                    onClick={() => toggleCompleted(index)}
                                >
                                    {note.completed ? "✓" : "✗"}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default PrioritySection;