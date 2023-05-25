import React, { Component } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            message : '',
            
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
    }

    handleSubmit(e){
        
        const param = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

       
        this.setState({
            name:'',
            email:'',
            message: '',
            formValid: false
        })


        const YOUR_SERVICE_ID = 'service_elmjryu';
        const YOUR_TEMPLATE_ID = 'template_vww8kwb';
        const YOUR_PUBLIC_KEY = 'jzwDQcOyp7YawL9y8';


        emailjs.send(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID,param,YOUR_PUBLIC_KEY)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
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
                        <button type="submit"  className="submit" onClick={e=>this.handleSubmit(e)}>Send</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Contact;