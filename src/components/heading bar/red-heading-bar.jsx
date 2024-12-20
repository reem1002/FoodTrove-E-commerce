import React from 'react'
import { useSelector } from 'react-redux'
import './HeadingBar.css';


export default function HeadingBar() {
    const pageName = useSelector((state) => state.pageName.value);

    return (
        <div className='heading-bar'>
            <span>{pageName}</span>
            <span>Home - {pageName}</span>

        </div>
    )
}

