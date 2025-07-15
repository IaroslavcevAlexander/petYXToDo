import './style.css';
import { useState } from 'react';

const Settings = ({ onClose, changeBackground }) => {
    const [activeSection, setActiveSection] = useState(null);

    const handleClose = () => {
        setActiveSection(null);
        onClose();
    };
    
    return (
        <>
            <div className="bg-settings" onClick={handleClose}></div>

            {!activeSection && (
                <div className="settings">
                    <div className="closer-settings" onClick={handleClose}>×</div>
                    <h3 className='h3'>Настройки</h3>

                    <ol className='setting-all'>
                        <li className="setting" onClick={() => setActiveSection('sign-in')}>Sign In</li>
                        <li className="setting" onClick={() => setActiveSection('sign-up')}>Sign Up</li>
                        <li className="setting" onClick={() => setActiveSection('about')}>О Нас</li>
                        <li className="setting" onClick={changeBackground}>bg</li>
                        <li className="setting" onClick={() => {
                            localStorage.removeItem('notes');
                            window.location.reload();
                        }}>Remove notes</li>
                    </ol>
                </div>
            )}

            {activeSection === 'sign-in' && (
                <div className="sign-in">
                    <h5>Вход</h5>
                    <input type="nickname" className='nickname' placeholder='Никнейм'/>
                    <input type="password" className='password' placeholder='Пароль'/>
                    <button className="sign">
                        Войти
                    </button>
                </div>
            )}

            {activeSection === 'sign-up' && (
                <div className="sign-up">
                    <h5>Регистрация</h5>
                    <input type="nickname" className='nickname' placeholder='Никнейм'/>
                    <input type="password" className='password'placeholder='Пароль'/>
                    <button className="sign">Зарегатся</button>
                </div>
            )}

            {activeSection === 'about' && (
                <div className="about-us show">
                    <h5 className='about-us-h5'>ToDo</h5>
                    <p>Это не лучшее ToDo, но мне нравится</p>
                </div>
            )}
        </>
    );
};

export default Settings;