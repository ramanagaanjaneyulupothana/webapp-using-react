
/*Two-Way Binding using Event-Binding and using Hooks */

import React from "react";

export default class ClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName : '',
            age : 0,
            gender : false,
            
        }
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleGender = this.handleGender.bind(this);
    }

    handleName(event){
        this.setState(
            {
                userName : event.target.value,
                age : this.state.age,
                gender : this.state.gender
            }
        )
    }
    handleAge(event){
        this.setState(
            {
                userName : this.state.userName,
                age : event.target.value,
                gender : this.state.gender
            }
        )
    }
    handleGender(event){
        this.setState(
            {
                userName : this.state.userName,
                age : this.state.age,
                gender : event.target.value 
            }
        )
    }

    render(){
        return(
            <div className="row m-lg-2">
                <div className="col-6 border border-2 border-primary rounded rounded-3 p-4 w-auto">
                    <h1><span className="bi bi-person"></span>User Details :</h1>
                    <dl>
                        <dt>User Name : </dt>
                        <dd><input type="text" className="form-control" onKeyUp={this.handleName}/></dd>
                        <dt>Age : </dt>
                        <dd><input type="text" className="form-control" onKeyUp={this.handleAge}/></dd>
                        <dt>Gender :</dt>
                        <dd>
                            <select onChange={this.handleGender}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </dd>
                    </dl>
                </div>
                <div className="col-6 border border-2 border-success rounded rounded-3 p-4 m-lg-2">
                <h1><span className="bi bi-person"></span>Updated User Details :</h1>
                    <div class="card d-flex" style={{"width": "30rem"}}>
                    <div class="card-body border border-2 border-primary rounded-3">
                    <h5 class="card-title">User Name : {this.state.userName}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Age : {this.state.age}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Gender : {this.state.gender}</h6>
                    
                    </div>
                </div>
                </div>
            </div>
        )
    }
}