import React, { useState, } from 'react';
import catPic1 from './assets/Sf7.gif';
import catPic2 from './assets/not-yet.jpg';
import catPic3 from './assets/yay-up.gif';
import catPic4 from './assets/333.gif';
import catPic5 from './assets/work.gif';
import catPicMaxDigit from './assets/goofy-cat.gif';
import FirstImage from './FirstImage.jsx';
import ResultImage from './ResultImage.jsx';
import Indicators from './Indicators.jsx';

function Calculator() {
    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');
    const [isOperatorUsed, setIsOperatorUsed] = useState(false);
    const [result, setResult] = useState(0);
    const [isCat, setIsCat] = useState(false);
    const [catClickCounter, setCatClickCounter] = useState(0);
    const [catPic, setCatPic ]= useState();
    const [isResultReady, setResultReady] = useState(false);
    const [isInp1Ready, setInp1Ready] = useState(false);

    /* Handle inputs */
    function handleInputs(e) {
        if(isResultReady) return;
        if (isOperatorUsed) {
            setIsCat(false);
            inp2.length == 2 ? displayMaxDigitsConstraint():setInp2(prevInp2 => prevInp2 + e);
            if(catClickCounter || result =='Please enter both numbers. More effort!' != 0)setResult(0);
            setCatClickCounter(0);
        } else {
            setIsCat(false);
            inp1.length == 2 ? displayMaxDigitsConstraint():setInp1(prevInp1 => prevInp1 + e);
            if(catClickCounter || result =='Please enter both numbers. More effort!' != 0)setResult(0);
            setCatClickCounter(0);
        }
    }

    /* Handle multiplication operator usage */
    function handleOperatorUsage() {
        setIsOperatorUsed(true);
        setInp1Ready(true);
        setIsCat(false);
    }

    /* Display message in case the user tries to enter a bigger than 99 */
    function displayMaxDigitsConstraint(){
        if(!isResultReady){
            setResult('Maximum 2 digits allowed! Please continue.');
            setIsCat(true);
            setCatPic(catPicMaxDigit);
            setInp1Ready(false);
        }
    }

    /* Reset the calculator */
    function resetCalculator() {
        setResultReady(false);
        setInp1Ready(false);
        setIsCat(false);
        setIsOperatorUsed(false);
        setInp1('');
        setInp2('');
        setResult(0);
        setCatClickCounter(0);
    }

    /* Handle delete */
    function handleDelete() {
        if(isResultReady)return;
        if (isOperatorUsed) {
            if (inp2.length > 0){
                setInp2(prevState => prevState.slice(0, -1));
            }
            else {
                setIsOperatorUsed(false);
                setInp1Ready(false);
            }
        } else {
            setInp1(prevState => prevState.slice(0, -1));
            setInp1Ready(false);            
        }
        setIsCat(false);
        setResultReady(false);
        setResult(0);


    }

    /* Implementing the cat button logic */
    function handleCat() {
        if (catClickCounter === 0) {
            resetCalculator();
            setCatClickCounter(1);
            setIsCat(true);
            setCatPic(catPic1);
            setResult('You found the cat! Click again for more info.');
        } else if (catClickCounter === 1) {
            setCatPic(catPic2);
            setResult('猫 means \'cat\' in Japanese. Did you know that?');
            setCatClickCounter(2);
        } else if (catClickCounter === 2) {
            setCatPic(catPic3);
            setResult('Final fact: You\'re a cat person. Time for math!');
        }
    }


    /* Implementing the result button logic */
    function handleResult() {
        if(catClickCounter != 0)return;
        if (inp1.length == 0 || inp2.length == 0) {
            resetCalculator();
            setResult('Please enter both numbers. More effort!');
            setIsCat(true);
            setCatPic(catPic5);
            return;
        } 
        let num1 = parseInt(inp1);
        let num2 = parseInt(inp2);
        
        if (num1*num2 != 333){
            setInp1Ready(true);
            setIsCat(false);
            setResultReady(true);
            setResult('= '+num1*num2);
        }else{
            setInp1Ready(false);
            setResult('You discovered the hottest number 💋 = 333')
            setIsCat(true)
            setCatPic(catPic4);
        }
        
    }

    return (
        <div className="calculator-grid">
            <div className="japanese-multiplication-visual">
                {isCat? <img className='cat-pic' alt='honest-cat' src={catPic} onClick={() => handleCat()}></img>:''}
                {isInp1Ready? (inp1.length == 2 ? (<FirstImage tens={inp1[0]} ones={inp1[1]} />):
                                                  (<FirstImage ones={inp1[0]} />)):''}
                {(isInp1Ready && isResultReady)? (inp2.length == 2 ?(<>
                                                                       <ResultImage tens={inp2[0]} ones={inp2[1]} />
                                                                       <Indicators n1={inp1} n2={inp2} />
                                                                    </>):
                                                                    (<>
                                                                      <ResultImage ones={inp2[0]} />
                                                                        <Indicators n1={inp1} n2={inp2} />
                                                                    </>)):''}
            </div>
            <div className="numerical-result">{result}</div>
            <div className="inputs">
                ➙ {inp1.length>0?<span style={{ color: '#ef9700d1' }}>{inp1[0]}</span>:<></>}
                {inp1.length>1?<span style={{ color: 'rgba(241, 152, 241, 0.806)' }}>{inp1[1]}</span>:<></>}
                 {isOperatorUsed ? ' x ' : ''} 
                 {inp2.length>0?<span style={{ color: 'rgb(127, 255, 133)' }}>{inp2[0]}</span>:<></>}
                 {inp2.length>1?<span style={{ color: '#00d7f3c9' }}>{inp2[1]}</span>:<></>}
            </div>
            <div className="calculator-buttons">
                <button className="calc-key" onClick={() => handleInputs('1')}>1</button>
                <button className="calc-key" onClick={() => handleInputs('2')}>2</button>
                <button className="calc-key" onClick={() => handleInputs('3')}>3</button>
                <button className="calc-key calc-key-functional" onClick={() => resetCalculator()}>AC</button>
                <button className="calc-key" onClick={() => handleInputs('4')}>4</button>
                <button className="calc-key" onClick={() => handleInputs('5')}>5</button>
                <button className="calc-key" onClick={() => handleInputs('6')}>6</button>
                <button className="calc-key calc-key-functional" onClick={() => handleDelete()}>DEL</button>
                <button className="calc-key" onClick={() => handleInputs('7')}>7</button>
                <button className="calc-key" onClick={() => handleInputs('8')}>8</button>
                <button className="calc-key" onClick={() => handleInputs('9')}>9</button>
                <button className="calc-key calc-key-special" onClick={(e) => handleOperatorUsage(e)}>X</button>
                <button className="calc-key calc-key-span-two" onClick={() => handleInputs('0')}>0</button>
                <button className="calc-key cat-button" onClick={() => handleCat()}>猫</button>
                <button className="calc-key calc-key-special" onClick={() => handleResult()}>=</button>
            </div>
            <div className="calculator-footer">
            </div>
            
        </div>
    );
}

export default Calculator;
