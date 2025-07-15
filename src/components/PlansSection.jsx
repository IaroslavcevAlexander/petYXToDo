import './PlansSection.css'

const PlansSection = ({ notes, toggleCompleted, toggleImportant, collapsed, activeTab, viewMode, setSelectedIndex, setDrawerCollapsed }) => {
    const today = new Date().toLocaleDateString();

    if (!["all", "today", "important"].includes(activeTab)) return null;

    const filtered = notes
        .map((note, index) => ({ note, index }))
        .filter(({ note }) => {
            if (activeTab === "important") return note.important && !note.completed;
            if (activeTab === "today") return note.date === today && !note.completed;
            return !note.completed;
    });

    return (
        <>
            <div className={`plans ${collapsed ? 'collapsed' : ''} ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
                <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
                    <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задачa:</h6>
                    <h6 className={`date-completion ${collapsed ? 'collapsed' : ''}`}>Дата</h6>
                    <h6 className={`importace ${collapsed ? 'collapsed' : ''}`}>Важность</h6>
                </div>

                {filtered.length === 0 ? (
                    <div className="empty">Задач пока нет</div>
                ) : (
                    filtered.map(({note, index}) => (
                        <div key={index} className={`task ${note.important ? 'important' : ''}`}>
                            <div className="task-text"
                                onClick={() => {
                                setSelectedIndex(index);
                                setDrawerCollapsed(false);
                                }} key={index}>
                            {note.text}</div>
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

export default PlansSection;