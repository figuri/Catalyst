import React from 'react';

function sideArticle ({ page }) {
    // side article will be used to store a short description of each page that it is on,  will use state to change the description based on the page that it is on
  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   
    switch (page) {
        case 'samuel':
            setTitle('Tech')
            setDescription('Stay modern with Samuel. Learn new about new software and hardware. Keep up with the latest trends in the tech world.')
            break;
        case 'josiah':
            setTitle('Finance')
            setDescription('Get your money right with Josiah. Learn about investing, saving, and budgeting. Keep up with trends in the stock market and more.')
            break;
        case 'jaelen':
            setTitle('About')
            setDescription('Take control of your fitness with Jaelen. Learn about diet, exercise, and maximizing your potenial.')
            break;
        case 'caleb':
            setTitle('News')
            setDescription('Check out current events and happenings with Caleb. Keep up to date with social media, politics, and more.')
            break;
        default:
            setTitle('Catalyst')
            setDescription('Change or die')
            break;
    }
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default sideArticle;