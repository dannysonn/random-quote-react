import React, {useEffect, useState} from 'react'
import QuoteAuthor from "../QuoteAuthor/QuoteAuthor";
import QuoteText from "../QuoteText/QuoteText";
import $ from 'jquery';

const Quote = () => {
    const [state, setState] = useState({
        color: '',
        author: '',
        text: '',
    });

    useEffect(() => {
        getQuoteInfo();
        getNewQuote();
    }, []);

    const getQuoteInfo = () => {
        $.ajax({
            url: 'https://api.quotable.io/random',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                setState({
                    color: setRandomColor(),
                    author: data.author,
                    text: data.content,
                });
                $('#text').css('opacity', '1');
                $('#author').css('opacity', '1');
            }
        });
    }

    const setRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }

        $('#author').css("color", `${color}`);
        $('#text').css("color", `${color}`);
        $('body').css('background-color', `${color}`);
        $('.social__box').css('background-color', `${color}`);
        $('#new-quote').css('background-color', `${color}`);
    }

    const getNewQuote = () => {
        $('#new-quote').on('click', function (e) {
            $('#text').css('opacity', '0');
            $('#author').css('opacity', '0');
            setTimeout(getQuoteInfo, 900);
        });
    }

    return (
        <div className='quote'>
            <QuoteText text={state.text}/>
            <QuoteAuthor author={state.author}/>
        </div>
    );
}

export default Quote;