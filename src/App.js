import React, { Component } from 'react';

import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state = {
    course : [
      {name : "Html"},
      {name : "CSS"},
      {name : "Jquery"},
    ] ,     

    current : ''
  }
  // UpdateCourse t run f courseForm w nb3thha ka props
  // e.target.value get the value of an input form
  // console.log(e.target.value)

  updateCourse = (e) =>{
   this.setState({
     current : e.target.value 
   })
  }

  // addCourse
  // functipon t run ki na3mel  submit l form 
  // e.preventDefault() tnahi lreload  mta3  page 
  addCourse = (e) =>{
    e.preventDefault();
    let current = this.state.current;
     let  course = this.state.course;
    course.push({name:current})
    this.setState( {
      course,
      current : ''
    })
// deleteCourse 
    // deleteCourse = (index) =>{
    //   let course = this.state.course;
    //   course.splice(index,1);
    //   this.setState({
    //     course
    //   })



   // }
  }
  deleteCourse = (index)=>{
    let course = this.state.course;
    course.splice(index,1);
    this.setState({
      course
    })


  }

  // editCourse
    editCourse = (index,value) =>{
      let courses = this.state.course
      let course1 = courses[index]
      course1['name'] = value;
      this.setState({
        course1
      })

    }
   
  render() { 
   const {course}=this.state   
   const courseList=course.map((course , index)=>{
     return <CourseList  details={course} index={index} key={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
   })
 // course  3iabara 3ala kol item mn state y3adi  3la  kol item 
   
 return (
    <section className="App">
  <h2>Add course </h2>
    <CourseForm  current={this.state.current} updateCourse = {this.updateCourse} addCourse={this.addCourse} />
    <ul>{courseList}</ul>
    </section> 
   
   );
  }
}
 
export default App;
 