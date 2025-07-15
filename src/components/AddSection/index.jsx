import './style.css'

const AddSection = ({note, setNote, handleAddNote, collapsed, inputRef}) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddNote();
        }
    };

    return (
        <>
            <div className={`add_plans ${collapsed ? 'collapsed' : ''}`}>
                <button className={`add ${collapsed ? 'collapsed' : ''}`} title='добавить задачу' onClick={handleAddNote}>Добавить задачу</button>
                <input 
                    className={`plans_input ${collapsed ? 'collapsed' : ''}`}
                    type="text" 
                    placeholder='И что ты там удумал?'
                    value={note}
                    ref={inputRef}
                    onChange={(e) => {
                        const value = e.target.value;
                        const formatted = value.charAt(0).toUpperCase() + value.slice(1);
                        setNote(formatted);
                    }}

                    onKeyDown={handleKeyDown}
                />
                
                <div className="btns-add-section">
                    <button className="btn-add-section" title='сроки'>сроки</button>
                    <button className="btn-add-section" title='напомнить'>напомни</button>
                    <button className="btn-add-section" title='повтор'>повтор</button>
                </div>
            </div>
        </>
    );
};

export default AddSection;