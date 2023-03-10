import React from 'react';
import Title from './Title';
import Time from './Time';

class BlogPost extends React.Component {
    //пропс параметры которые передаются в компонент
    constructor(props){
        super(props)
        //пока компонент жи, хранит его состояние в виде обьекта, при смерти компонента обнуляет состояние до состояния state в конструторе
        // setState изменить состояние вне конструктора, может отработать некоректно с обьектом, нужен колбэк
        this.state = { clicked: false }
    }

    render(){
        const { clicked } = this.state
        //тоже самое что и let title = this.props.title
        const { title } = this.props

        if( clicked ){
            return 'Clicked';
        }

        return(
            <div>
                {/* двойное пробрасывание пропсов title */}
                <Title title={title} />
                <div>{Time}</div>
               <button onClick={()=> this.setState({ clicked: true})}>click me</button>
            </div>
        )
    }
}

export default BlogPost;


//состояние компонента
//состояние это стейт и пропс? то, что увидет человек после рендрера

//в чем отличее классового компонента от обычного? кроме class и render 
//-классовые компоненты могут внутри себя содежрать состояние
//-в функциональных компонентах нет this.state, всё через props
//метод render внутри него логика вся происходит? А если вне него написать код? почему не брать внешнии переменные в конструкторе и все данные вычислять не в конструкторе
//конструктор используется для инициализации this.state, и привязка обрабочиков событый к экзмепляру

//использовать в "state пропрос" нельзя? так ментер сказал "все хотят верстать статьи и все хотят что бы начальное состояние зависило от каких то начальных пропсов", для этого существует getDetivedStateFromProps() 
//принимает в себя пропасы и state и вызывается перед методом render (автоматически?)
//static синтаксис

//3 базовые вещи
// не изменять стейт напряму не только в дидмаунте но и в рендере, только в конструкторе this.state и всё, для обновления setState
//Внутри какого метода делаются запросы к серверу, изменение стейта и другие «побочные» эффекты? -дидмонут
//setState принимает не только обьект но и колбэк




//если вызов satState будет таким
/* tick(){
    this.setState(
        {date: new Date()}
    );
    this.setState(
        {date: new Date()}
    );
    this.setState(
        {date: new Date()}
    );
} */ 
//состояние схлопнится в одно, допустим i++
//если нужно обновить state передаем колбэк туда
//satState асинхронен





//render взаимодействее с браузером или сервером не происходит в методе рендере, для этого есть дидмаунт (после встроения в дом) запрос на сервер к примеру и в нем работают в setState

//ИЗМЕНЕНИЕ КОМПОНЕНТОВ
//shouldComponentUpdate() этот компонент показывает - должен ли рект обновлять компонент вызывая метод рендер, при абсолютно любом изменениие рект будет рендерить этот компонент заново
//любой вызов сетстэй будет вызывать метод рендер, любое изменение пропсов будет вызывать метод рендер
//getSnapshotBeforeUpdate() этот метод вызывается перед тем как элемент добавляется в дом, брать информацию из ДОМ перед его возможным (положение скрола допустим) изменением и возвращать её в компоненте componentDidUpdate, рекомендуется использовать внутри if