import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import MonthTabsRouter from './monthTabsRouter'
import YearTabsRouter  from './yearTabsRouter'
class MonthTabs extends React.Component {
 constructor(){
  super();
  this.state = {activeTab:''};
  this.handleSelect = this.handleSelect.bind(this);
}
componentWillReceiveProps(nextProps) {
    this.setState({activeTab:this.props.day+'-'+nextProps.dayActiveTab});
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab
     });
 }
render(){
  return <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={this.props.day+'-All'} title={<MonthTabsRouter tabId='All' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-8am'} title={<MonthTabsRouter tabId='8am' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-9am'} title={<MonthTabsRouter tabId='9am' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-10am'} title={<MonthTabsRouter tabId='10am' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-11am'} title={<MonthTabsRouter tabId='11am' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-12pm'} title={<MonthTabsRouter tabId='12pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-1pm'} title={<MonthTabsRouter tabId='1pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-2pm'} title={<MonthTabsRouter tabId='2pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-3pm'} title={<MonthTabsRouter tabId='3pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-4pm'} title={<MonthTabsRouter tabId='4pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-5pm'} title={<MonthTabsRouter tabId='5pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-6pm'} title={<MonthTabsRouter tabId='6pm' day={this.props.day}/>}></Tab>
            <Tab eventKey={this.props.day+'-7pm'} title={<MonthTabsRouter tabId='7pm' day={this.props.day}/>}></Tab>
    </Tabs>
}
}
export default MonthTabs;