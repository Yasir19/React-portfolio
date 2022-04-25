import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utlis/helpers';

function SubNav(props ) {
    const {
        pages=[],
        setCurrentPage,
        currentPage
    } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name)
    },[currentPage])

    return(
        <div>
            <ul className='subNav'>
                {pages.map(page =>(
                    <li className={`NavItem2 ${currentPage.name === page.name && 'navActive'}`}
                    key={page.name}
                    >
                        <span onClick={() =>setCurrentPage(page)}
                        >
                            {capitalizeFirstLetter(page.name)}

                        </span>

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default SubNav