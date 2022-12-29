import React from 'react';

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }

    //после создания автоматически вызывается?
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
    //после удаления автоматически вызывается?
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