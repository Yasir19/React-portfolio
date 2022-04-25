import React from'react'

function Header(props){
    return(
    <header className="flex-row space-between">
        <h1>Yasir Habboo</h1>
        {props.children}

    </header>
    )
}
export default Header