import React from 'react';
import PropTypes from 'prop-types';

import o1 from './assets/calculation-visuals/orange/1.png';
import o2 from './assets/calculation-visuals/orange/2.png';
import o3 from './assets/calculation-visuals/orange/3.png';
import o4 from './assets/calculation-visuals/orange/4.png';
import o5 from './assets/calculation-visuals/orange/5.png';
import o6 from './assets/calculation-visuals/orange/6.png';
import o7 from './assets/calculation-visuals/orange/7.png';
import o8 from './assets/calculation-visuals/orange/8.png';
import o9 from './assets/calculation-visuals/orange/9.png';
import p1 from './assets/calculation-visuals/pink/1.png';
import p2 from './assets/calculation-visuals/pink/2.png';
import p3 from './assets/calculation-visuals/pink/3.png';
import p4 from './assets/calculation-visuals/pink/4.png';
import p5 from './assets/calculation-visuals/pink/5.png';
import p6 from './assets/calculation-visuals/pink/6.png';
import p7 from './assets/calculation-visuals/pink/7.png';
import p8 from './assets/calculation-visuals/pink/8.png';
import p9 from './assets/calculation-visuals/pink/9.png';
import blank from './assets/blank.png';

function getPinkImage(number) {
    const images = { '1': p1, '2': p2, '3': p3, '4': p4, '5': p5, '6': p6, '7': p7, '8': p8, '9': p9 };
    return images[number] || blank;
}
function getOrangeImage(number) {
    const images = { '1': o1, '2': o2, '3': o3, '4': o4, '5': o5, '6': o6, '7': o7, '8': o8, '9': o9 };
    return images[number] || blank;
}

function FirstImage(props) {
    const num1 = parseInt(props.tens + props.ones);
    let ones, tens;
    if(num1 > 9){
        tens = getOrangeImage(props.tens);
        ones = getPinkImage(props.ones);
    }else{
        ones = getOrangeImage(props.ones);
        tens = blank;
    }
    

    return (
        <div>
            {num1 > 9 ?
                <>
                <img src={tens} alt="inp1-tens" className='inp1-tens color-mult' />
                <img src={ones} alt="inp1-ones" className='inp1-ones color-mult'/>
                {num1 / 10 != 0 ? <h5 className='inp1-dig-ten'>{Math.floor(num1 / 10)}</h5>:<></>}
                {num1 % 10 != 0 ? <h5 className='inp1-dig-one-bi'>{num1 % 10}</h5>:<></>}
                </>:
            num1 < 10 && num1 != 0?
                <>
                <img src={ones} alt="inp1-ones" className='inp1-ones color-mult'/>
                <h5 className='inp1-dig-one-mono'>{num1 % 10}</h5> 
                </>:<></>
            }
        </div>
    );
}

FirstImage.propTypes = {
    tens: PropTypes.string,
    ones: PropTypes.string
};

FirstImage.defaultProps = {
    tens: '0',
    ones: '0'
};

export default FirstImage;
