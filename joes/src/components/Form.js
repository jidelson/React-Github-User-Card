import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }

    // handleChanges = e => {
    //     this.setState({
    //         name: e.target.value
    //     });
    // };
    
    // handleSubmit = e => {
    //     e.preventDefault();
    //         this.props.addName(this.state.name);
    //         this.setState({
    //             name:""
    //         });
            
    //     };
    render(){
       return(
           <div>
               <form>
                   <input 
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChanges}
                   />
                   
               </form>
           </div>
       )
   }
}