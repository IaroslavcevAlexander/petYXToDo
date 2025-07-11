import { useEffect, useRef } from 'react';

import './TaskDrawer.css'

const TaskDrawer = ({ notes, toggleImportant, toggleCompleted, drawerCollapsed, setDrawerCollapsed, selectedIndex }) => {
    const task = notes[selectedIndex];
    const drawerRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });
    const isDragging = useRef(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging.current || !drawerRef.current) return;


        const drawer = drawerRef.current;
        const drawerWidth = drawer.offsetWidth;
        const drawerHeight = drawer.offsetHeight;

        let newLeft = e.clientX - offset.current.x;
        let newTop = e.clientY - offset.current.y;

        const maxLeft = window.innerWidth - drawerWidth;
        const maxTop = window.innerHeight - drawerHeight;

        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        drawer.style.left = `${newLeft}px`;
        drawer.style.top = `${newTop}px`;
        };

        const handleMouseUp = () => {
            isDragging.current = false;
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const handleMouseDown = (e) => {
        if (!drawerRef.current) return;
        isDragging.current = true;
        const rect = drawerRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    if (!task || drawerCollapsed) return null;

    return(
        <>
        <div className='drawer' 
        ref={drawerRef}
        style={{ 
            top: '50px', 
            left: `${window.innerWidth - 420}px`, 
            position: 'fixed' }}
        >
            <div className="drawer-header" onMouseDown={handleMouseDown}>full text</div>
            <div className="close_driver" onClick={() => setDrawerCollapsed(true)}>×</div>

            <div className="task-full-text">
                {task.text}
            </div>

            <div className="actions">
                <button className='drawer-btn-0' onClick={() => toggleImportant(selectedIndex)}>
                    {notes[selectedIndex]?.important ? 'Убрать из важных' : 'Сделать важной'}

                </button>
                <button className='drawer-btn-1' onClick={() => toggleCompleted(selectedIndex)}>
                    {notes[selectedIndex]?.completed ? 'Вернуть' : 'Выполнить'}
                </button>
                
                {/* <div className="resize-handle" /> */}
            </div>
        </div>
        </>
    );
};

export default TaskDrawer;