import './menuSection.css';

const MenuSection = ({ collapsed, setCollapsed, activeTab, setActiveTab  }) => {
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={`menu ${collapsed ? 'collapsed' : ''}`}>
            <div className="close" onClick={() => setCollapsed(true)}>×</div>

            {collapsed && (
                <div className="menu_arrow" onClick={() => setCollapsed(false)}>
                ⮞
                </div>
            )}

            <ul className='menu_ul'>
                <li 
                    className={`menu_item ${activeTab === 'today' ? 'active' : ''}`}
                    onClick={() => handleTabClick('today')}
                    id='menu_item_1' 
                    title='сегодня'>Сегодня
                </li>

                <li 
                    className={`menu_item ${activeTab === 'important' ? 'active' : ''}`}
                    id='menu_item_2' 
                    onClick={() => handleTabClick('important')}
                    title='важное'>Важное
                </li>
                
                <li 
                    className={`menu_item ${activeTab === 'done' ? 'active' : ''}`}
                    id='menu_item_4' 
                    onClick={() => handleTabClick('done')}
                    title='Выполненные'>Выполненные
                </li>

                <li 
                    className={`menu_item ${activeTab === 'all' ? 'active' : ''}`} 
                    id='menu_item_5' 
                    onClick={() => handleTabClick('all')}
                    title='задачи'>Задачи
                </li>
            </ul>
            <hr />
            <button className='create_list'>Создать список</button>
        </div>
    );
};

export default MenuSection;