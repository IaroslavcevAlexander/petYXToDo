import './Header.css';

const Header = () => {
    return (
        <div className="nav">
            <a href="#" className="logo">ToDo</a>
            <input className='search' type="text" placeholder='Поиск'/>
            <a href="#" className="a">Сортировка</a>
            <a href="#" className="a">Группировать</a>
            <a href="#" className="a">Предложения</a>
            <a href="#" className="a">Настройки</a>
        </div>
    );
};

export default Header;