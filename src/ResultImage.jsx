import React from 'react';
import PropTypes from 'prop-types';

import b1 from './assets/calculation-visuals/blue/1.png';
import b2 from './assets/calculation-visuals/blue/2.png';
import b3 from './assets/calculation-visuals/blue/3.png';
import b4 from './assets/calculation-visuals/blue/4.png';
import b5 from './assets/calculation-visuals/blue/5.png';
import b6 from './assets/calculation-visuals/blue/6.png';
import b7 from './assets/calculation-visuals/blue/7.png';
import b8 from './assets/calculation-visuals/blue/8.png';
import b9 from './assets/calculation-visuals/blue/9.png';
import g1 from './assets/calculation-visuals/green/1.png';
import g2 from './assets/calculation-visuals/green/2.png';
import g3 from './assets/calculation-visuals/green/3.png';
import g4 from './assets/calculation-visuals/green/4.png';
import g5 from './assets/calculation-visuals/green/5.png';
import g6 from './assets/calculation-visuals/green/6.png';
import g7 from './assets/calculation-visuals/green/7.png';
import g8 from './assets/calculation-visuals/green/8.png';
import g9 from './assets/calculation-visuals/green/9.png';
import blank from './assets/blank.png';

function getOnesImage(number) {
    const images = { '1': b1, '2': b2, '3': b3, '4': b4, '5': b5, '6': b6, '7': b7, '8': b8, '9': b9 };
    return images[number] || blank;
}
function getTensImage(number) {
    const images = { '1': g1, '2': g2, '3': g3, '4': g4, '5': g5, '6': g6, '7': g7, '8': g8, '9': g9 };
    return images[number] || blank;
}

function ResultImage(props) {
    const tens = getTensImage(props.tens);
    const ones = getOnesImage(props.ones);
    const num2 = parseInt(props.tens + props.ones);

    return (
        <div>
            <img src={tens} alt="inp2-tens" className='inp2-tens color-mult' />
            <img src={ones} alt="inp2-ones" className='inp2-ones color-mult'/>
            {num2 < 10 ?
                <h5 className='inp2-dig-one'>{num2 % 10}</h5> :
                <>
                    {num2 / 10 != 0 ? <h5 className='inp2-dig-ten'>{Math.floor(num2 / 10)}</h5>:<></>}
                    {num2 % 10 != 0 ? <h5 className='inp2-dig-one'>{num2 % 10}</h5>:<></>}
                </>
            }
        </div>
    );
}

ResultImage.propTypes = {
    tens: PropTypes.string,
    ones: PropTypes.string
};

ResultImage.defaultProps = {
    tens: '0',
    ones: '0'
};

export default ResultImage;
