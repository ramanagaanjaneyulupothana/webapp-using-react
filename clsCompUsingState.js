import React from "react"
export default class UsingState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            carName : ''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handleCarName = this.handleCarName.bind(this);
    }
    handleUserName(event){
        this.setState(
            {
                userName : event.target.value,
                carName : this.state.carName
            }
        )
    }
    handleCarName(event){
        this.setState(
            {
                userName : this.state.userName,
                carName : event.target.value
            }
        )
    }

    render(){
        return(
            <div className="col">
                <div className="row-3">
                    <dl>
                        <dt>User Name :</dt>
                        <dd><input type="text" onKeyUp={this.handleUserName}/></dd>
                        <dt>Car Name :</dt>
                        <dd><input type="text" onKeyUp={this.handleCarName}/></dd>
                        </dl>
                </div>
                <div className="row-3">
                    Hai..! My Name is<b>{this.state.userName}</b>   and my Favorate Car is <b>{this.state.carName}.</b>
                </div>
            </div>
        )
    }
}