import './CompletedSection.css';

const CompletedSection = ({notes, toggleCompleted, collapsed, activeTab, handleMarkAsDeleted}) => {
    if (activeTab !== 'done') return null;

    const filtered = notes
        .map((note, index) => ({ note, index}))
        .filter(({ note }) => note.completed && !note.deleted);

    return(
        <>
            <div className={`completed ${collapsed ? 'collapsed' : ''}`}>
                <div className={`planss ${collapsed ? 'collapsed' : ''}`}>
                    <h6 className={`tasks ${collapsed ? 'collapsed' : ''}`}>Задачa:</h6>
                    <h6 className='date-completion'>Дата</h6>
                </div>

                {filtered.length === 0 ? (
                    <div className="empty">Нет выполненных задач</div>
                ) : (
                    filtered.map(({note, index}) => (
                        <div className={` task ${note.important ? 'important' : ''}`} key={index}>
                            <div className="task-text">{note.text}</div>
                            <div className="task-header">
                                <span className="task-date">{note.date}</span>
                                <button 
                                    className="return-btn"
                                    onClick={() => toggleCompleted(index)}
                                    title="Вернуть задачу"
                                >
                                    ↩
                                </button>
                                <button className="delete" onClick={() => handleMarkAsDeleted(index)}>❌</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );    
};

export default CompletedSection;