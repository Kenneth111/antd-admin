import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import Cookies from 'js-cookie';
import Frame from './views/Frame';
import Login from './views/Login';
import Welcome from './views/Welcome';
import auth from './reducers/auth';

let store = createStore(auth);
class Base extends React.Component{
  constructor(props){
    super(props)   
    if(props.login){
      this.state = {
        showLogin: false,
        showWelcome: false
      }
    } else {
      this.state = {
        showLogin: true,
        showWelcome: true
      } 
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.login){
      this.setState({showWelcome: false, showLogin: false});
    }
  }
  componentWillMount(){
    let token = Cookies.get("token");
    if(!token){
      this.setState({showWelcome: false})
      return;
    }
    let data = {token: token};
    // ask the server if the token is valid
    fetch("http://localhost:3001/login", {method: "POST",
      body: JSON.stringify(data), 
      headers: new Headers({
      'Content-Type': 'application/json'})
      }).then(response => response.json()).then( res => {
      if(res.result === "true"){
        this.setState({showWelcome: false, showLogin: false})
      } else {
        this.setState({showWelcome: false, showLogin: true})        
      }
    })
  }
  render(){
    return (<div style={{height: "100%"}}>
      {this.state.showWelcome? <Welcome/>: this.state.showLogin? <Login/>: <Frame/>}
    </div>)
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    login: state.login
  }
}

const BaseContainer = connect(mapStateToProps)(Base);

document.getElementById('root').style.height = "100%";
ReactDOM.render(
  <Provider store={store}>
    <BaseContainer/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
