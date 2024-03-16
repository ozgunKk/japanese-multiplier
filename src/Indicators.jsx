import PropTypes from 'prop-types'
import curve from './assets/calculation-visuals/right-curve.png'

function Indicators(props){

    let hundreds = 0;
    let tens = 0;
    let ones = 0;
    let tens_bottom = 0;
    let tens_top = 0;
    let num1 = parseInt(props.n1);
    let num2 = parseInt(props.n2);

    if (num1 > 9 && num2 > 9){
        hundreds = Math.floor(num1/10) * Math.floor(num2/10);
        tens_bottom = (num2%10) * Math.floor(num1/10); 
        tens_top = (num1%10) * Math.floor(num2/10);
        tens = tens_bottom + tens_top;
        ones = (num1%10) * (num2%10);
    }
    else if (num1 > 9 && num2 < 10){
        tens_bottom = Math.floor(num1/10) * (num2%10);
        tens = tens_bottom;
        ones = (num1%10) * (num2%10);
    }
    else if (num1 < 10 && num2 > 9){
        tens_top = (num1%10) * Math.floor(num2/10);
        tens = tens_top;
        ones = (num1%10) * (num2%10);
    }
    else{
        ones = num1 * num2;
    }

    let tens_plus = Math.floor(ones/10);
    let hundreds_plus = (Math.floor(tens/10))+(Math.floor((tens_plus+(tens%10))/10));

    return(
        <>
            {hundreds>0 || tens > 9 || (tens + tens_plus > 9)?
                <>
                  <h6 className="indicator-numbers hundreds">{hundreds}</h6>
                  <h6 className='intersect-hundreds'>{hundreds}</h6>
                </>
                :<></>}
    
            {tens > 9 || hundreds > 0 || (tens + tens_plus > 9)?
                (hundreds > 9?
                <h6 className="indicator-numbers hundreds-to-result-bi">
                    {hundreds+hundreds_plus}
                </h6>:
                <h6 className="indicator-numbers hundreds-to-result-mono">
                {hundreds+hundreds_plus}
            </h6>
                ):<></>}
            {tens> 9 || (tens + tens_plus > 9)?<h6 className='hundreds-plus'>+{hundreds_plus}</h6>:''}
            {tens > 0 || ones > 9 || hundreds != 0 || hundreds_plus != 0?
                <>
                  <h6 className="indicator-numbers tens">{tens>9?<span style={{ color: 'hsla(0, 0%, 100%, 0.4)' }}>{Math.floor(tens/10)}</span>:''}{tens%10}</h6>
                  {tens_bottom != 0?<h6 className='intersect-tens-bottom'>{tens_bottom}</h6>:<></>}
                  {tens_top != 0?<h6 className='intersect-tens-top'>{tens_top}</h6>:<></>}

                </>:
                <></>}
            {ones > 9 || tens > 0 || hundreds != 0 || hundreds_plus != 0?
                <h6 className='indicator-numbers tens-to-result'>{((tens%10)+tens_plus)%10}</h6>:<></>}
            {ones > 9 ?<h6 className='tens-plus'>+{tens_plus}</h6>:''}
            <h6 className='indicator-numbers intersect-ones'>{ones}</h6>
            <h6 className="indicator-numbers ones">{ones>9?<span style={{ color: 'hsla(0, 0%, 100%, 0.4)' }}>{tens_plus}</span>:''}{ones%10}</h6>
            <h6 className='indicator-numbers ones-to-result'>{ones%10}</h6>
            <img className='curve-right' src={curve} alt='curve'></img>
            {tens!=0 || hundreds_plus != 0 || hundreds != 0?<img className='curve-left' src={curve} alt='curve'></img>:<></>}


        </>
    )
}

Indicators.propTypes = {
    n1: PropTypes.string,
    n2: PropTypes.string
}
Indicators.defaultProps = {
    n1: '0',
    n2: '0'
}

export default Indicators;
