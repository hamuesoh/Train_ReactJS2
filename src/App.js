import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './App2';
import Header from './Header';
// function App() {
//   var style = {
//     color : 'blue',
//     fontSize: 100
//   }
//   return (
//     <div className="app">
//       <h1 style={style}>Hello React App</h1>
//     </div>
//   );
// }


class App extends Component{
  constructor(){
    super();
    this.state={
      data:[],
      message:"Unlike",
      type:""
    };
    // this.changemessage = this.changemessage.bind(this);
    // this.insertDate = this.insertDate.bind(this)
  }
  changemessage(){
    if(this.state.message == "Like"){
      this.setState({message:"UnLike"})
    }else{
      this.setState({message:"Like"});
    }    
  }

  insertDate(){
    var item = "Hello wa, "
    var myarra = this.state.data;
    myarra.push(item);    
    this.setState({data:myarra});
  }
  chegedoo(event){
    this.setState({type:event.target.value})
  }
  render(){
    var style = {
      color : 'blue',
      fontSize: 50
    }
    return(
      <div className="app">
        <Header />
        <h4 style={style}>Hello React App</h4>
        <Content title="Course React" name="Hamuesoh Jehteh" price="1200" />
        <button onClick={this.changemessage.bind(this)}>{this.state.message}</button>
        <br></br>
        <br></br>
        <p>{this.state.data}</p>
        <button onClick={this.insertDate.bind(this)}>click me</button>

        <br></br>
        <input type="text" onChange={this.chegedoo.bind(this)}></input>
        <p>{this.state.type}</p>
      </div>
    );
  }
}

export default App;
