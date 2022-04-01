import './App.css';
import QuoteBox from "./components/QuoteBox/QuoteBox";
import QuoteText from "./components/QuoteText/QuoteText";
import QuoteAuthor from "./components/QuoteAuthor/QuoteAuthor";

function App(props) {
    return (
        <div className="App">
            <QuoteBox>
                <QuoteText />
                <QuoteAuthor />
            </QuoteBox>
        </div>
    );
}

export default App;
