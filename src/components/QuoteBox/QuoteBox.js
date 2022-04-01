import React from "react";
import '../../styles/styles.scss'
import NewQuoteBtn from "../Buttons/NewQuoteBtn";
import Social from "../Social/Social";
import Quote from "../Quote/Quote";

const QuoteBox = (props) => {
    return (
        <div style={{backgroundColor: props.color}} id='quote-box'>
            <Quote/>
            <div className='bottom-wrapper'>
                <Social/>
                <NewQuoteBtn/>
            </div>
        </div>
    );
}

export default QuoteBox;