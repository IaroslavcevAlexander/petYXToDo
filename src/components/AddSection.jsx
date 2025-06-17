import './AddSection.css'

const AddSection = () => {
    return (
        <div className="add_plans">
            <button className="add" title='добавить задачу'>Добавить задачу</button>
            <input className='plans_input' type="text" placeholder='И что ты там удумал?'/>
            <button className="dieline" title='сроки'>сроки</button>
            <button className="reminder" title='напомнить'>напомни</button>
            <button className="repeat" title='повтор'>повтор</button>
        </div>
    );
};

export default AddSection;