import React from 'react';

function SubProjects (){
    return (
        <section className='my-5'>
            <h3>Project</h3>
            <div class ='resume-container'>
            <h4>Auction House</h4>
            <h4>Full Stack Development</h4>
            </div>
            <div>
            <ul className='skills'>
            <li>Working with team of 4 to design, develop and deploy an Ecommerce website using MVC paradigm</li>
            <li>Design database schema and its associated endpoint to allow the user to create new account, post new product and perform a betting process. </li>
            <li>Create a full frontend functionality such as fetching data from the data base, capture input from the user and capture, calculate and change the current price of the item based on the user betting.</li>
            <li>Working as a project manager to ensure the MVP is completed by the deadline.</li>
            </ul>
        </div>
        <div class ='resume-container'>
            <h4>Password-generator</h4>
            <h4>website </h4>
            </div>
            <div>
            <ul className='skills'>
            <li>An application that allows the user to select data type for the password and password length to automatic generate the password </li>
            <li>Capturing user input and then looping over the dynamically generated array of data type to create a randomize password.</li>
            </ul>
        </div>
        </section>
    )
}
export default SubProjects