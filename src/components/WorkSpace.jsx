import './WorkSpace.css'
import { useState, useEffect } from 'react';

const WorkSpace = () => {
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
        <div className="big">
            <div className="data">
                <h1 className='today'>Сегодня</h1>
                {formattedDate}
            </div>
            <div className="mode">
                <button className="net" title='сетка'>Сетка</button>
                <button className="list_mode" title='список'>Список</button>
            </div>
        </div>
    );
};

export default WorkSpace;