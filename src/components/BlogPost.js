import React from 'react';
import Title from './Title';
import Time from './Time';

class BlogPost extends React.Component {
    constructor(props){
        super(props)
        //пока компонент жи, хранит его состояние в виде обьекта, при смерти компонента обнуляет состояние до состояния state в конструторе
        // setState изменить состояние вне конструктора
        this.state = { clicked: false }
    }

    render(){
        const { clicked } = this.state
        const { title } = this.props

        if( clicked ){
            return 'Clicked';
        }

        return(
            <div>
                <Title title={title} />
                <div>{Time}</div>
               <button onClick={()=> this.setState({ clicked: true})}>click me</button>
            </div>
        )
    }
}

export default BlogPost;