import './TaskDrawer.css'

const TaskDrawer = ({ selectedTask, ToggleImportant, ToggleCompleted, setCollapsed, collapsed }) => {
    if (!selectedTask) return null;
    return(
        <>
        <div className={`drawer ${collapsed ? 'collapsed' : ''}`}>
            <div className="close" onClick={() => setCollapsed(true)}>×</div>

            {collapsed && (
                <div className="menu_arrow" onClick={() => setCollapsed(false)}>
                ⮞
                </div>
            )}

            <div className="actions">
                <button onClick={() => ToggleImportant(index)}>
                    {selectedTask.important ? 'Убрать из важных' : 'Сделать важной'}
                </button>
                <button onClick={() => ToggleCompleted(selectedTask.index)}>
                    {selectedTask.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
                </button>
            </div>
        </div>
        </>
    );
};

export default TaskDrawer;