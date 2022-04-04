import React from 'react'
import './wave.css'


function wave () {
    return(
        <div className='wave-container'>
            <div className='wave-parent'>
                <img src={require ('../../assets/image/shape-bg.png')} alt=''/>
            </div>

        </div>
    )
}
export default wave;