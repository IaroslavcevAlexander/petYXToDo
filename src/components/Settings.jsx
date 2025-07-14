import './Settings.css';

const Settings = ({ onClose, changeBackground }) => {
    return (
        <>
            <div className="bg-settings" onClick={onClose}></div>

            <div className="settings">
                <div className="closer-settings" onClick={onClose}>×</div>

                <h3 className='h3'>Настройки</h3>

                <li className="setting">Sing In</li>
                <li className="setting">Sing Up</li>
                <li className="setting">О Нас</li>
                <li className="setting" onClick={changeBackground} >bg</li>
                <li className="setting" onClick={() => {
                    localStorage.removeItem('notes');
                    window.location.reload();
                }}>Remove-All</li>
            </div>

            <div className="sing-in"></div>

            <div className="sing-up"></div>

            <div className="about-us">
                <h5 className='about-us-h5'>ToDo</h5>

                <p>Это не лучшее ToDo но мне нравится Это не лучшее ToDo но мне нравится Это не лучшее ToDo но мне нравится</p>
            </div>
        </>
    );
};

export default Settings;