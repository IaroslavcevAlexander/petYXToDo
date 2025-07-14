import './Header.css';

const Header = ({ setShowSettings }) => {
    return (
        <div className="nav">
            <a href="#" className="logo">ToDo</a>
            <input className='search' type="text" placeholder='Поиск'/>
            <a href="#" className="a">Сортировка</a>
            <a href="#" className="a">Группировать</a>
            <a href="#" className="a">Предложения</a>
            <a href="#" className="a" onClick={() => setShowSettings(true)}>Настройки</a>
        </div>
    );
};

export default Header;