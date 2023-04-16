import React from 'react';

function ThrowDescription(props) {
    let basiclift = (parseInt(props.strength)*parseInt(props.strength))/5;
    if(props.weight > 8*basiclift) {
        return (
            <div className='throwingdistance-box--result'>
                <p className='text-style--maintext textblock-center'>{'Вы не моете метнуть предмет так как он слишком тяжёл для вас!'}</p>
            </div>
        );
    }
    else {
        return (
            <div className='throwingdistance-box--result'>
                <p className='text-style--maintext textblock-center'>{'Дистанция на которую вы можете метнуть предмет: '}{props.distance}{' ярдов'}</p>
            </div>
        );
    }
    
    /*let basiclift = (parseInt(props.strength)*parseInt(props.strength))/5;
    let weightratio = props.weight/basiclift

    return (
        <div>
            <p>{basiclift}</p>
            <p>{weightratio}</p>
        </div>
    );*/
}

export default ThrowDescription;