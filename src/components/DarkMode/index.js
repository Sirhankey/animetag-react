import React, { useState } from 'react';
import { Button } from 'reactstrap';

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const root = document.getElementById('root')
        console.log('root:', root);
        if (darkMode) {
            root.style.setProperty('background-color', '#fff');
            root.style.setProperty('color', '#000');
        } else {
            root.style.setProperty('background-color', '#000');
            root.style.setProperty('color', '#fff');
        }
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Button 
            color={darkMode ? 'light' : 'dark'}
            onClick={toggleDarkMode}>
                    {darkMode ? 'Light' : 'Dark'}
            </Button>

        </div>
    );
}

export default DarkMode;
