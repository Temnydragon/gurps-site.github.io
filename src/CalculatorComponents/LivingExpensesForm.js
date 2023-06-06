import React, { Component } from 'react';

function LivingCostDescription(props) {
    const Costs = [100, 300, 600, 1200, 3000, 12000];
    let LivingCost = 0;
    let Accomodation = 0;
    let Food = 0;
    let StatusWithRank = '';
    let RankDescrStyle = '';
    //в случае выбора влияния Звания общий уровень статуса приравнивается к модифицированному
    //при этом также устанавливаются стили для отображения части сообщения о влиянии Звания в форме
    if(props.rankFlag === 'true') {
        StatusWithRank = props.modifiedStatus;
        RankDescrStyle = 'text-style--maintext textblock-center textlinebreak';
    }
    else {
        StatusWithRank = props.status;
        RankDescrStyle = 'status-paragraph--hidden';
    }

    if(props.status > 3) {
        //расчёт средней стоимости общих ежемесячных трат по формуле 6*10 в степени *уровень статуса*
        LivingCost = 6 * (10 ** props.status);
        Accomodation = 6 * (10 ** (props.status - props.accomodation));
        Food = Costs[5];
    }
    else {
        LivingCost = Costs[parseInt(props.status) + 2];
        Accomodation = Costs[parseInt(props.status)-props.accomodation + 2];
        if(props.status < 0) {
            Food = Costs[0];
        }
        else {
            Food = Costs[parseInt(props.status) + 1];
        }
    }

    return (            
        <div>
            <p className='text-style--maintext textblock-center textlinebreak'>
                {'Ваш текущий уровень статуса в обществе: ' + StatusWithRank}
            </p>
            <p className={RankDescrStyle}>
                {'\nЧасть статуса вы получаете от звания.'}
            </p>
            <p className='text-style--maintext textblock-center textlinebreak'>
                {'\nВаши реальные траты на жизнь в месяц составляют: $' + LivingCost}
                {'\n\nЕсли вы путешествуете, ваши средние ежедневные траты следующие:'}
                {'\n\nВременное жильё: $' + Accomodation*0.2}
                {'\n\nЗавтрак/Ланч: $' + Food*0.01}
                {'\n\nОбед/Ужин: $' + Food*0.02}
                {'\n\nДорожный паёк: $' + ((Food*0.05)/7).toFixed(1)}
                {'\n\nСпиртное: $' + Food*0.01}
            </p>
        </div>
    )
}

function RankValueSelect(props){
    if(props.rankFlagValue === 'true') {
        return(
            <div className='gridcontainer-expenses--item'>
                <label htmlFor='rankValue-id' className='text-style--checkboxlabel'>
                    Уровень бонуса от звания
                </label>
                <select className='small-select' name='rankValue' id='rankValue-id' value={props.rankValueCurrent} onChange={props.onChangeMethod}>
                    <option value="1">+1</option>
                    <option value="2">+2</option>
                    <option value="3">+3</option>
                    <option value="4">+4</option>
                    <option value="5">+5</option>
                    <option value="6">+6</option>
                </select>
            </div>
        )
    }
    else {
        return (<></>)
    }
}

class LivingEpxensesForm extends Component {
    constructor(props) {
        super(props)
        this.state = { status:'0', modifiedStatus:'0', accomodation:'0', rankFlag: 'false', rankValue: '1', livingCostResult:'' }
        this.handleChange = this.handleChange.bind(this)
        this.ComputeFullStatusResult = this.ComputeFullStatusResult.bind(this)
    }
    
    handleChange(event){
        if(event.target.name === 'rankFlag') {
            if(this.state.rankFlag === 'false') {
                this.setState({
                    rankFlag : 'true'
                })
            }
            else {
                this.setState({
                    rankFlag : 'false'
                })
            }
        }
        else {
            this.setState({
                [event.target.name] : event.target.value
            })
        }
        this.setState (this.ComputeFullStatusResult)
    }
    
    ComputeFullStatusResult(state){
        if(parseInt(state.status) + parseInt(state.rankValue) > 8) {
            return { modifiedStatus : '8'}
        }
        else {
            return { modifiedStatus : (parseInt(state.status) + parseInt(state.rankValue))}
        }
    }

    handleChangeScrolltoHidden() {
        document.body.style.overflow = "hidden";
    };
  
    handleChangeScrolltoShow() {
        document.body.style.overflow = "auto";
    };


    render() {
        return (
            <form className='form-block'>
                <div id="open-modalWindow" className='modalWindow'>
                    <div className='modalWindow-innerbox'>
                        <div className='modalWindow-content'>
                            <div className='modalWindow-header'>
                                <h2 className='text-style--maintext'>Модуль расходов на жизнь</h2>
                                <a href="#close-modalWindow" title="Close" className='text-style--closebutton' onClick={this.handleChangeScrolltoShow}>×</a>
                            </div>
                            <div className='modalWindow-maintext'>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Данный модуль позволяет расчитать средние ежемесячные расходы на жизнь персонажа дома и его ежедневные траты на базовые нужды в соответствии с уровнем статуса героя по правилам GURPS.'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Важно:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Для общего удобства в GURPS все цены приводятся в условных единицах, обозначенных как "$". В зависимости от игрового мира это может означать один доллар, одну медную монетку или одну единицу любой другой общепринятой валюты.'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Уровень статуса персонажа:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Согласно GURPS расходы персонажа зависят от его статуса.'}
                                    {'\nВ ежемесячные расходы включены траты на покупку продуктов и готовку, постоянное жильё и забота о нём, развлечения, периодическое обновление гардероба и т.п.'}
                                    {'\nЕсли статус вашего персонажа больше 0, в эти расходы может входить также прислуга и/или личная охрана.'}
                                    {' Подробнее про сам статус вы можете прочесть на странице 28 базовой книги правил.'}
                                    {'\n(Найти перевод книги правил можно '}
                                    <a  className="linkstyle--textlink" href="//www.rulit.me/data/programs/resources/pdf/StivDzhekson_GURPS-4E-BasicSet(polnyyperevod)_RuLit_Me_389900.pdf" target='_blank' rel="noreferrer">здесь</a>
                                    {')'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Статус временного жилья:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Согласно GURPS, путешествующий персонаж должен в среднем платить в день 20% от ежемесячных расходов за временное жильё. Игровой мастер конкретной кампании может изменить это значение по желанию.'}
                                    {'\nПри желании персонаж может снимать жильё на один уровень ниже своего статуса без особых последствий (даже мэр может решить пожить пару дней в обычной гостинице, а не в дорогом санатории).'}
                                </p>
                                <h3 className='text-style--modalWindowparagraph'>
                                    {'Звание и статус:'}
                                </h3>
                                <p className='text-style--modalWindowparagraph'>
                                    {'Если у персонажа есть звание (государственное, военное, духовное или иное) оно может увеличивать его социальный статус в обществе. Если ваш реальный статус ниже модифициоранного званием, поставьте галочку и выберите нужный бонус к уровню от звания в появившемся списке. Ваши расходы в этом случае будут рассчитываться исходя из реального статуса, а не изменённого.'}
                                    {'\n\nВ некоторых обществах уровень звания не дополняет, а заменяет обычный статус. В этом случае не обязательно выбирать данный модификатор. Достаточно просто выбрать нужный уровень статуса в первом выпадающем списке формы.'}
                                    {' Подробнее про звание написано на странице 29 базовой книги правил (ссылка выше).'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='main-content--box'>
                    <h1 className="text-style--title textblock-center">Модуль расходов на жизнь</h1>
                    <p className='text-style--maintext main-content--text bordernone textlinebreak textblock-center'>
                    {'Данный модуль призван помочь в расчёте расходов на жизнь персонажа в соответствии с его социальным статусом по правилам GURPS'}
                    {'\n\nДля подробного ознакомления обратитесь к книге "Базовые правила: Персонажи" \n(Глава "Снаряжение", страница 265)'}
                    </p>
                </section>

                <section className='calculator-box'>
                    <a href='#open-modalWindow' className='question-button' onClick={this.handleChangeScrolltoHidden}>?</a>
                    <div className='borderedbottom-block'>
                        <div className='gridcontainer-expenses'>
                            <div className='gridcontainer-expenses--item'>
                                <label htmlFor='status-id' className='text-style--checkboxlabel'>
                                    Уровень статуса персонажа
                                </label>
                                <select className='small-select' name='status' id='status-id' value={this.state.status} onChange={this.handleChange}>
                                    <option value="8">8 - Император, глава мирового совета</option>
                                    <option value="7">7 - Король, президент</option>
                                    <option value="6">6 - Родственник короля, губернатор</option>
                                    <option value="5">5 - Крупный дворянин, глава большой корпорации</option>
                                    <option value="4">4 - Мелкий дворянин, депутат</option>
                                    <option value="3">3 - Поместный рыцарь, мэр города</option>
                                    <option value="2">2 - Безземельный рыцарь, глава предприятия</option>
                                    <option value="1">1 - Торговец, оруженосец, советник</option>
                                    <option value="0">0 - Обычный гражданин, подмастерье</option>
                                    <option value="-1">-1 - Бедняк, крепостной</option>
                                    <option value="-2">-2 - Раб, бездомный</option>
                                </select>
                            </div>
                            <div className='gridcontainer-expenses--item'>
                                <label htmlFor='accomodation-id' className='text-style--checkboxlabel'>
                                    Статус временного жилья
                                </label>
                                <select className='small-select' name='accomodation' id='accomodation-id' value={this.state.accomodation} onChange={this.handleChange}>
                                    <option value="0">Равен личному статусу</option>
                                    <option value="1">Ниже личного статуса</option>
                                </select>
                            </div>
                            <div className='gridcontainer-expenses--item'>
                                <label htmlFor='rank-checkbox-id' className='text-style--checkboxlabel'>
                                    Ваш статус зависит от Звания?
                                </label>
                                <input type='checkbox' checked={this.state.rank} name='rankFlag' id='rank-checkbox-id' onChange={this.handleChange}/>
                            </div>
                            <RankValueSelect rankFlagValue={this.state.rankFlag} rankValueCurrent={this.state.rankValue} onChangeMethod={this.handleChange}/>
                        </div>
                    </div>

                    <h2 className="text-style--subtitle nopadding">Результат</h2>

                    <div className="livingcost-box">
                        <LivingCostDescription rankFlag={this.state.rankFlag} status={this.state.status}
                        modifiedStatus={this.state.modifiedStatus} accomodation={this.state.accomodation} />
                    </div>
                </section>
            </form>
        )
    }
}

export default LivingEpxensesForm;