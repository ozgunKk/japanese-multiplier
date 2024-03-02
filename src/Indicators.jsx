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
        tens_bottom = (num1%10) * Math.floor(num2/10);
        tens_top = (num2%10) * Math.floor(num1/10);
        tens = tens_bottom + tens_top;
        ones = (num1%10) * (num2%10);
    }
    else if (num1 > 9 && num2 < 10){
        tens_bottom = Math.floor(num1/10) * (num2%10);
        tens = tens_bottom;
        ones = (num1%10) * (num2%10);
    }
    else if (num1 < 10 && num2 > 9){
        tens_top = (num1%10) * Math.floor(num2/10)
        tens = tens_top;
        ones = (num1%10) * (num2%10);
    }
    else{
        ones = num1 * num2;
    }

    return(
        <>
            {hundreds>0 || tens > 9?
                <>
                  <h6 className="indicator-numbers hundreds">{hundreds}</h6>
                  <h6 className='intersect-hundreds'>{hundreds}</h6>
                </>
                :<></>}
    
            {tens > 9 || hundreds > 0?
                <h6 className="indicator-numbers hundreds-to-result">{hundreds+(Math.floor(tens/10))+(Math.floor((Math.floor(ones/10)+(tens%10))/10))}</h6>:<></>}
            {tens> 9?<h6 className='hundreds-plus'>+{(Math.floor(tens/10))+(Math.floor((Math.floor(ones/10)+(tens%10))/10))}</h6>:''}
            {tens > 0 || ones > 9?
                <>
                  <h6 className="indicator-numbers tens">{tens>9?<span style={{ color: 'hsla(0, 0%, 100%, 0.4)' }}>{Math.floor(tens/10)}</span>:''}{tens%10}</h6>
                  {tens_bottom != 0?<h6 className='intersect-tens-bottom'>{tens_bottom}</h6>:<></>}
                  {tens_top != 0?<h6 className='intersect-tens-top'>{tens_top}</h6>:<></>}

                </>:
                <></>}
            {ones > 9 || tens > 0?
                <h6 className='indicator-numbers tens-to-result'>{((tens%10)+Math.floor(ones/10))%10}</h6>:<></>}
            {ones > 9 ?<h6 className='tens-plus'>+{Math.floor(ones/10)}</h6>:''}
            <h6 className='indicator-numbers intersect-ones'>{ones}</h6>
            <h6 className="indicator-numbers ones">{ones>9?<span style={{ color: 'hsla(0, 0%, 100%, 0.4)' }}>{Math.floor(ones/10)}</span>:''}{ones%10}</h6>
            <h6 className='indicator-numbers ones-to-result'>{ones%10}</h6>
            <img className='curve-right' src={curve} alt='curve'></img>
            {tens!=0?<img className='curve-left' src={curve} alt='curve'></img>:<></>}


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