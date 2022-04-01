import React from 'react'

const QuoteText = (props) => {
    return (
        <div id="text"><i className="fa-solid fa-quote-left"></i> {props.text}</div>
    );
}

export default QuoteText;