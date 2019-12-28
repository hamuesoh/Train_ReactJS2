import React , {Component} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={
            name:"Unlike",
            count : 0
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({name:"Like"})
        },3000);
        // setInterval(()=>{
        //     this.setState({count:this.state.count+1})
        // },1000);
        return(
            <div>
                <h1>Hamuesoh Totorial</h1>
                <h3>Status = {this.state.name}</h3>
                <p>count = {this.state.count}</p>
            </div>
        );
    }
}
export default Header;