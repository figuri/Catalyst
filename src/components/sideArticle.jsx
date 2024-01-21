import React from 'react';

function sideArticle ({ page }) {
    // side article will be used to store a short description of each page that it is on,  will use state to change the description based on the page that it is on
  
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   
    switch (page) {
        case 'home':
            setTitle('Catalyst')
            setDescription('Change or die')
            break;
        case 'samuel':
            setTitle('Samuel')
            setDescription('Samuel is a cool guy')
            break;
        case 'tech':
            setTitle('Tech Talk')
            setDescription('Tech Talk is a cool guy')
            break;
        case 'about':
            setTitle('About')
            setDescription('About is a cool guy')
            break;
        case 'contact':
            setTitle('Contact')
            setDescription('Contact is a cool guy')
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