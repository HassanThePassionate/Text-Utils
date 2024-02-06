import React, { useRef, useState } from 'react';

const Form = (props) => {
    const [input, setInput] = useState("");
    const ref = useRef()
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const convertToUpperCase = () => {
        setInput(input.toUpperCase());
    };

    const convertToLowerCase = () => {
        setInput(input.toLowerCase());
    };

    const capitalizeFirstLetterOfEachWord = () => {
        let words = input.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        setInput(words.join(' '));
    };

    const copyTextToClipboard = () => {
        let textArea = document.querySelector('textarea');
        textArea.select();
        navigator.clipboard.writeText(input);
    };

    const removeExtraSpaces = () => {
        let text = input.split(/[ ]+/)
        setInput(text.join(' '))
    };

    const clearInput = () => {
        setInput("");
    };
    const increaseFont = () => {
        ref.current.style.fontSize = "xx-large"
    }
    const NormalFont = () => {
        ref.current.style.fontSize = "large"
    }
    const { mode } = props;

    return (
        <>
            <div className={`mt-4 container text-${mode === 'light' ? 'dark' : 'light'} `}>
                <h2>Enter Text Here</h2>
                <textarea
                    ref={ref}
                    value={input}
                    onChange={handleInputChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="12"
                    style={{ background: mode === 'light' ? 'white' : '#0B60B0', color: mode === 'light' ? 'black' : 'white' }}

                ></textarea>

                <button type="button" className="btn btn-primary mt-3" onClick={convertToUpperCase}>
                    Convert to UpperCase
                </button>
                <button type="button" className="btn btn-secondary mt-3 mx-2" onClick={convertToLowerCase}>
                    Convert to LowerCase
                </button>
                <button type="button" className="btn btn-success mt-3 mx-2" onClick={capitalizeFirstLetterOfEachWord}>
                    Convert to Capitalize
                </button>
                <button type="button" className="btn btn-success mt-3 mx-2" onClick={copyTextToClipboard}>
                    Copy Text
                </button>
                <button type="button" className="btn btn-info mt-3 mx-2" onClick={removeExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button type="button" className="btn btn-danger mt-3 mx-2" onClick={clearInput}>
                    Clear Text
                </button>
                <button type="button" className="btn btn-warning mt-3 mx-2" onClick={increaseFont}>
                    Text Bigger
                </button>
                <button type="button" className="btn btn-success mt-3 mx-2" onClick={NormalFont}>
                    Text Normal
                </button>
            </div>

            <div className={`container mt-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
                <h3 >Your Text Summary Here </h3>
                <p className='mt-2'>{input.split(' ').filter((el) => { return el.length != 0 }).length} Words {input.length} Characters</p>
                <h3 className='mt-2'>Preview</h3>
                <p>{input}</p>
            </div>
        </>
    );
};

export default Form;
