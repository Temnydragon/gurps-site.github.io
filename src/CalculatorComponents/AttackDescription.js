import React from 'react';

function FullAttackDescription(props) {
    if(props.attackTypeName === 'base-attack') {
        return (
            <div>
                <p name="fullattackdescription" id="fullattackdescription-id" className="text-style--maintext textblock-center textlinebreak">{'Вы совершаете обычную контактную атаку \n\nМодификатор умения: отсутствует \n\nДвижение: Шаг \n\nАктивная защита: Любая'}</p>
            </div>
        );
    }
    if(props.attackTypeName === 'move-and-attack') {
        return (
            <div>
                <p name="fullattackdescription" id="fullattackdescription-id" className="text-style--maintext textblock-center textlinebreak">{'Вы совершаете движение и контактную атаку \n\nМодификатор умения: -4 \n\nДвижение: Любое число ярдов вплоть до вашего БД \n\nАктивная защита: Только уклонение или блокирование (без отступления)'}</p>
            </div>
        );
    }
    if(props.attackTypeName === 'all-out-attack-accurate') {
        return (
            <div>
                <p name="fullattackdescription" id="fullattackdescription-id" className="text-style--maintext textblock-center textlinebreak">{'Вы совершаете Тотальную атаку, концентрируясь на попадании \n\nМодификатор умения: +4 \n\nДвижение: до половины вашего БД (двигаясь только вперёд) \n\nАктивная защита: Вы не можете защищаться до вашего следующего хода'}</p>
            </div>
        );
    }
    if(props.attackTypeName === 'all-out-attack-double') {
        return (
            <div>
                <p name="fullattackdescription" id="fullattackdescription-id" className="text-style--maintext textblock-center textlinebreak">{'Вы совершаете Тотальную атаку (двойную) \n\nДвижение: до половины вашего БД (двигаясь только вперёд) \n\nАктивная защита: Вы не можете защищаться до вашего следующего хода'}</p>
            </div>
        );
    }
    if(props.attackTypeName === 'all-out-attack-strong') {
        return (
            <div>
                <p name="fullattackdescription" id="fullattackdescription-id" className="text-style--maintext textblock-center textlinebreak">{'Вы совершаете Тотальную атаку для повышения потенциального урона \n\nМодификатор умения: отсутствует (но у вас +2 к урону) \n\nДвижение: до половины вашего БД (двигаясь только вперёд) \n\nАктивная защита: Вы не можете защищаться до вашего следующего хода'}</p>
            </div>
        );
    }
}

export default FullAttackDescription;