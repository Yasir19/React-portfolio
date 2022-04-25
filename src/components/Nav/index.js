import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utlis/helpers';

function Nav(props) { 
    const {
        screens =[],
        setCurrentScreen,
        currentScreen
    } = props;
    useEffect(()=> {
        document.title = capitalizeFirstLetter(currentScreen.name)
    }, [currentScreen])

    return(
        <nav>
            <ul className='flex-row'>
                {screens.map(Screen =>(
                    <li className={`NavItem ${currentScreen.name === Screen.name && 'navActive'}`}
                    key ={Screen.name}
                    >
                        <span onClick={() =>setCurrentScreen(Screen)}
                        >
                            {capitalizeFirstLetter(Screen.name)}

                        </span>
                    </li>
                ))}
            </ul>

        </nav>
    )
}
export default Nav
