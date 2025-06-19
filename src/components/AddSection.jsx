import './AddSection.css'

const AddSection = ({note, setNote, handleAddNote, collapsed}) => {
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
                    onChange={(e) => {
                        const value = e.target.value;
                        const formatted = value.charAt(0).toUpperCase() + value.slice(1);
                        setNote(formatted);
                    }}

                    onKeyDown={handleKeyDown}
                />
                
                <button className="dieline" title='сроки'>сроки</button>
                <button className="reminder" title='напомнить'>напомни</button>
                <button className="repeat" title='повтор'>повтор</button>
            </div>
        </>
    );
};

export default AddSection;