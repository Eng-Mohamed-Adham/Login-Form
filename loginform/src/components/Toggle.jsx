import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ToggleTheme = () => {
    const themeContext = useContext(ThemeContext);


    return ( 
        <div>
            Current Theme: {themeContext.theme}
            <br />
            <button onClick={themeContext.toggleTheme}>Toggle</button>
        </div>
     );
}
 
export default ToggleTheme;