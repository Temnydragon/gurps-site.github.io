import React from 'react';

function ThrowDescription(props) {
    let basiclift = (parseInt(props.strength)*parseInt(props.strength))/5;
    if(props.weight > 8*basiclift) {
        return (
            <div className='throwingdistance-box--result'>
                <p className='text-style--maintext textblock-center'>{'Вы не можете метнуть предмет так как он слишком тяжёл для вас!'}</p>
            </div>
        );
    }
    else {
        return (
            <div className='throwingdistance-box--result'>
                <p className='text-style--maintext textblock-center textlinebreak'>{'Дистанция на которую вы можете метнуть предмет: \n'}{props.distance}{' ярдов'}</p>
            </div>
        );
    }
}

export default ThrowDescription;