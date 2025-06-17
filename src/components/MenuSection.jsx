import './menuSection.css';

const MenuSection = () => {
    return (
        <div className="menu">
            <div className="close">× </div>
            <ul className='menu_ul'>
                <li className="menu_item" id='menu_item_1' title='сегодня'>Сегодня</li>
                <li className="menu_item" id='menu_item_2' title='важное'>Важное</li>
                <li className="menu_item" id='menu_item_3' title='запланировано'>Запланировано</li>
                <li className="menu_item" id='menu_item_4' title='мне'>Мне</li>
                <li className="menu_item" id='menu_item_5' title='задачи'>Задачи</li>
            </ul>
            <hr />
            <button className='create_list'>Создать список</button>
        </div>
    );
};

export default MenuSection;