import './PrioritySection.css'

const PrioritySection = ({ notes, toggleImportant, collapsed }) => {
    const importantNotes = notes.filter(note => note.important);
 
    return (
        <>
            <div className={`priority-plans ${collapsed ? 'collapsed' : ''}`}>
                <div className="plansss">
                    <h6 className='tasks'>Задачa:</h6>
                    <h6 className='date-completion'>Дата</h6>
                    <h6 className='importace'>Важность</h6>
                </div>

                {importantNotes.map((note, index) => (
                    <div className="task" key={index}>
                        <div className='task-text'>{note.text}</div>
                        <div className="task-header">
                            <span className="task-date">{note.date}</span>
                            <button className='task-priority' 
                                    onClick={() => toggleImportant(index)}
                            >
                                {note.important ? "!" : ""}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PrioritySection;