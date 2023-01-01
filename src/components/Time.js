import React from 'react';

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date() 
        }
    }

    static getDerivedStateFromProps(){
        //код какой то
        ////использовать в "state пропрос" нельзя? так ментер сказал "все хотят верстать статьи и все хотят что бы начальное состояние
        // зависило от каких то начальных пропсов", для этого существует getDetivedStateFromProps() 

    }

    //после создания автоматически вызывается
    //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    componentDidMount(){
        this.timerID = setInterval(
        () => this.tick(),
        1000
        )
    }

    tick(){
        this.setState(
            {date: new Date()}
        )
    }
    //после удаления автоматически вызывается 
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        const {date}= this.state;

        return(
            <div>{date.toLocaleTimeString()}</div>
        )
    }
}

export default Time;

//функция tick переписывает state в следствеи чего происходит ВиллМонут()?
//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/