import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then( res => {
      this.setState({studentInfo: res.data});
    })
  }
  render() {
    return (
      <div className="box">
        <Link to={`/classlist/${this.props.match.params.class}`}><button>Back</button> </Link>
        <h1>Student</h1>
        <h2>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h2>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    )
  }
}