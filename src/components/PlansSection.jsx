import './PlansSection.css'

const PlansSection = ({ notes, toggleComleted, toggleImportant, collapsed  }) => {
    return (
        <>
            <div className={`plans ${collapsed ? 'collapsed' : ''}`}>
                <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
                    <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задачa:</h6>
                    <h6 className='date-completion'>Дата</h6>
                    <h6 className='importace'>Важность</h6>
                </div>

                {notes.map((note, index) => (
                    <div className='task' key={index}>
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
                                onClick={() => toggleComleted(index)}
                            >
                                {note.completed ? "✓" : "✗"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PlansSection;