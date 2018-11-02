import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
class MonthTabsRouter extends React.Component {
 constructor(){
  super();
  this.state={style:{'font-size': '10px'}}
 }
render(){
  if(this.props.tabId == 'All'){
   return <Link to={{pathname: '/', search: '?time=All&day='+this.props.day}} >
     <p style={this.state.style}>Show All</p>
    </Link>
  }
else{
   return <Link to={{pathname: '/', search: '?time='+this.props.tabId + '&day='+this.props.day }} >
     <p style={this.state.style}>{this.props.tabId} {this.props.day}</p>
    </Link>
  }
}
}
export default MonthTabsRouter;