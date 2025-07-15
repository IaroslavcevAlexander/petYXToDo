import './style.css'
import { useState, useEffect } from 'react';

const WorkSpace = ({ collapsed, setViewMode, viewMode }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    const formattedDate = time.toLocaleDateString('ru-RU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });

    return (
        <div className={`big ${collapsed ? 'collapsed' : ''}`}>
          <div className={`data ${collapsed ? 'collapsed' : ''}`}>
              <h1 className={`today-title ${collapsed ? 'collapsed' : ''}`}>Сегодня</h1>
              {formattedDate}
          </div>
          <div className="mode">
              <button className={`list_mode ${viewMode === 'list' ? 'active' : ''}`}  onClick={() => setViewMode('list')} title='список'>Список</button>
              <button className={`net_mode ${viewMode === 'grid' ? 'active' : ''}`}onClick={() => setViewMode('grid')} title='сетка'>Сетка</button>
          </div>
        </div>
    );
};

export default WorkSpace;