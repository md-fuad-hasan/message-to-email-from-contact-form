import React, { Component } from "react";

import './Contact.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            message : '',
            formValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        });

        if(this.state.name){
            this.setState({
                formValid: true
            })
        }

       
        console.log(this.state);
    }

    handleSubmit(e){
        

        console.log(this.state);
        this.setState({
            name:'',
            email:'',
            message: '',
            formValid: false
        })
        e.preventDefault();

    }




    render(){
        return(
            <div className="contact">
                <div className="form-container">
                    <form className="form" onSubmit={e=>this.handleSubmit(e)}>   
                        <input type="text" className="name" value={this.state.name} name="name" placeholder="Enter your Name" onChange={(e)=>this.handleChange(e)} />
                        <input type="email" className="email" value={this.state.email} name='email' placeholder="Enter your Email" onChange={(e)=>this.handleChange(e)} />
                        <textarea rows={4} className="message" value={this.state.message} name="message" placeholder="Your message" onChange={(e)=>this.handleChange(e)} />
                        <button type="submit" disabled={!this.state.formValid} className="submit" onClick={e=>this.handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Contact;