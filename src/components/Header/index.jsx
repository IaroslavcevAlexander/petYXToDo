import './style.css';

const Header = ({ setShowSettings, setSearchQuery }) => {
    return (
        <div className="nav">
            <a href="#" className="logo">ToDo</a>
            <div className="search-wrapper">
                <input className='search' 
                    type="text" 
                    placeholder='Поиск' 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <a href="#" className="a">Сортировка</a>
            <a href="#" className="a">Группировать</a>
            <a href="#" className="a">Предложения</a>
            <a href="#" className="a" onClick={() => setShowSettings(true)}>Настройки</a>
        </div>
    );
};

export default Header;