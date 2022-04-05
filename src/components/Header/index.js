import React from'react'

function Header(props){
    return(
    <header className="flex-row space-between py-2 mx-2">
        <h1>Yasir Habboo</h1>
        {props.children}

    </header>
    )
}
export default Header