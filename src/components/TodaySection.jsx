import './TodaySection.css'

const TodaySection = ({notes, toggleCompleted, toggleImportant, collapsed, activeTab, viewMode, setSelectedIndex, setDrawerCollapsed }) => {
    const today = new Date().toLocaleDateString();

    const todayNotes = notes
        .map((note, index) => ({ note, index }))
        .filter(({ note }) => note.date === today && !note.completed);
        
    if (activeTab !== "today") return null;

    return (
        <>
            <div className={`today ${collapsed ? 'collapsed' : ''} ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
                <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
                    <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задача:</h6>
                    <h6 className='date-completion'>Дата</h6>
                    <h6 className='importace'>Важность</h6>
                </div>

                {todayNotes.length === 0 ? (
                    <div className="empty">Сегодня задачи не были добавлены</div>
                ) : (
                    todayNotes.map(({ note, index}) => (
                        <div key={note.id} className={` task ${note.important ? 'important' : ''}`}>
                            <div className="task-text"  
                                onClick={() => {
                                setSelectedIndex(index);
                                setDrawerCollapsed(false);
                                }}>{note.text}</div>
                            <div className="task-header">
                                <span className="task-date">{note.date}</span>
                                <button className='task-priority' onClick={() => toggleImportant(index)}>
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

export default TodaySection;