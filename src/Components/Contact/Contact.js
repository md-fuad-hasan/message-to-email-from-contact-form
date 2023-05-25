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
            validEmail : false,
            showMessage : '',
            visibility : false
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
        

        switch (name) {
            case 'email':
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
                    this.setState({
                        validEmail : true
                    })
                }
                break;
            default:
                break;
        }

    }


    handleValidation(e){
        if( this.state.name && this.state.validEmail && this.state.message){
            this.handleSubmit(e);
        }
        else{
            this.showError("Fill up all the section correctly!");
        }
        e.preventDefault();
    }

    showError(msg){
        this.setState({
            showMessage: msg,
            visibility : true
        })

        setTimeout(()=>{
            this.crossMessage();
        },3000);
    }

    showSuccess(msg){
        this.setState({
            showMessage: msg,
            visibility : true
        })
        setTimeout(()=>{
            this.crossMessage();
        },3000);
    }

    crossMessage(){
        this.setState({
            visibility: false
        })
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
            validEmail: false
        })


        const YOUR_SERVICE_ID = 'service_elmjryu';
        const YOUR_TEMPLATE_ID = 'template_vww8kwb';
        const YOUR_PUBLIC_KEY = 'jzwDQcOyp7YawL9y8';


        emailjs.send(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID,param,YOUR_PUBLIC_KEY)
        .then(res=>{
            this.showSuccess("Message sent succesfully!")
        })
        .catch(err=>{
            this.showError("Something went wrong")
        })


        e.preventDefault();

    }

    

    render(){

        return(
            <div className="contact">
                {
                    this.state.visibility && <div className="alert" >
                    <div>{this.state.showMessage}</div>
                    <button className="alert-cross-btn" onClick={()=>this.crossMessage()}>X</button>
                </div>
                }
                
                <div className="form-container">
                    <form className="form" > 
                        <h1 className="form-heading">Send Me Message</h1>

                        <input type="text" className="name" value={this.state.name} name="name" placeholder="Enter your Name" onChange={(e)=>this.handleChange(e)} />
                        <input type="email" className="email" value={this.state.email} name='email' placeholder="Enter your Email" onChange={(e)=>this.handleChange(e)} />
                        <textarea rows={4} className="message" value={this.state.message} name="message" placeholder="Your message" onChange={(e)=>this.handleChange(e)} />
                        <button type="submit"  className="submit" onClick={e=>this.handleValidation(e)}>Send</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Contact;