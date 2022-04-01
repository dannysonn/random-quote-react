import React from 'react';
import '../../styles/styles.scss'

const Social = () => {
    return (
        <div className='social'>
            <div className='social__box'>
                <a id="tweet-quote" href='#'><i className="fa-brands fa-twitter"></i></a>
            </div>
            <div className='social__box'>
                <a id="send-quote" href='#'><i className="fa-solid fa-paper-plane"></i></a>
            </div>
        </div>
    );
}

export default Social;