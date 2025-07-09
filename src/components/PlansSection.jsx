import './PlansSection.css'

const PlansSection = ({ notes, toggleCompleted, toggleImportant, collapsed, activeTab }) => {
    const today = new Date().toLocaleDateString();

    if (!["all", "today", "important"].includes(activeTab)) return null;

    const filtered = notes
        .map((note, index) => ({ note, index }))
        .filter(({ note }) => {
            if (activeTab === "important") return note.important && !note.completed;
            if (activeTab === "today") return note.date === today && !note.completed;
            return true && !note.completed;
    });

    return (
        <>
            <div className={`plans ${collapsed ? 'collapsed' : ''}`}>
                <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
                    <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задачa:</h6>
                    <h6 className='date-completion'>Дата</h6>
                    <h6 className='importace'>Важность</h6>
                </div>

                {filtered.length === 0 ? (
                    <div className="empty">Задач пока нет</div>
                ) : (
                    filtered.map(({note, index}) => (
                        <div className={` task ${note.important ? 'important' : ''}`} key={index}>
                            <div className="task-text">{note.text}</div>
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