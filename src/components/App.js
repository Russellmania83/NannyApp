import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
import { Tab, Tabs } from 'react-bootstrap';
import YearTabsRouter from './tabs/yearTabsRouter';
//import MonthTabs from './tabs/monthTabs';
import styles from '../css/App.css';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {selectedTime:'All', selectedDay: 'Monday', data: [], activeTab:'Monday'};
    this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.history.location.search) {
      console.log('STuff');
      var search = nextProps.history.location.search;
      search = search.substring(1);
      var searchObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
      console.log(searchObj);
      this.setState({activeTab: parseInt(searchObj.day)});
      this.setState({selectedDay: searchObj.day});
      this.setState({selectedTime: searchObj.time});
      this.getData(this, searchObj.day, searchObj.time);
    } else {
      this.getData(this, 'Monday', 'All');
    }
  }
componentDidMount(){
    this.getData(this, 'Monday', 'All');
  }
handleSelect = (selectedTab) => {
     this.setState({
       activeTab: selectedTab,
       selectedDay: selectedTab
     });
  }
getData(ev, day, time){
    axios.get('http://localhost:8080/nannyApp/'+day+'/All')
      .then(function(response) {
        console.log(response.data);
        ev.setState({data: response.data});
        ev.setState({selectedDay: day});
        ev.setState({selectedTime: time});
      });
}
render() {
    return (
      <div>
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={'Monday'} title={<YearTabsRouter day='Monday' />}></Tab>
          <Tab eventKey={'Tuesday'} title={<YearTabsRouter day='Tuesday' />}></Tab>
          <Tab eventKey={'Wednesday'} title={<YearTabsRouter day='Wednesday'/>}></Tab>
          <Tab eventKey={'Thursday'} title={<YearTabsRouter day='Thursday'/>}></Tab>
          <Tab eventKey={'Friday'} title={<YearTabsRouter day='Friday'/>}></Tab>
        </Tabs>
        <Add selectedTime={this.state.selectedTime} selectedDay={this.state.selectedDay} />
        <table>
          <thead>
            <tr><th></th><th className='desc-col'>Task</th> <th className='button-col'>Time Due:</th><th className='button-col'>Day</th><th className='button-col'>Update</th><th className='button-col'>Delete</th></tr>
          </thead>
          <tbody>
            {
              this.state.data.map((exp) => {
                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.description}</td><td className='button-col'>{exp.time}</td><td className='button-col'>{exp.day}</td><td className='button-col'><Update nannyApp={exp}/></td><td className='button-col'><Delete nannyApp={exp} /></td></tr>
              })
            }
            </tbody>
</table>
      </div>
    );
  }
}
