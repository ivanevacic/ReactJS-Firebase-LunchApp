import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
//Import database from firebase.js file
import { database } from './firebase'

class App extends Component {
  constructor(props) {
    super(props)
    //state of the component
    this.state = {
      //Component is mounted,data is empty(null)
      data: null,
      //New data that will be added(empty string by default)
      newData: ''
    }

    //shortcut,in the beginning is null,empty
    this.dataRef = null
    //Needs to be like this we have access to
      //<input type="text" value={this.state.newData} onChange={this.handleChange}/>
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
  }

  //WHEN PAGE LOADS
  componentDidMount() {
  //load database connection to root in data.ref
  this.dataRef = database.ref('/')
  //console.log to test if it actually works
  console.log('I DID MOUNT')
  //connect to database->'/' is root of 'database'
    //whenever some value in firebase changes->something like onValueChange
    this.dataRef.on('value', (snapshot) => {//snapshot is whatever value of data were at the moment when it changed
        //console.log te test it
        //console.log('THE DATA CHANGED!')
        //console.log(snapshot.val())//gives us current value of data
      //Set state of data
        this.setState({
          //state of data is now current changed value in firebase
          data: snapshot.val()
        })
      })
  }

  //HANDLE CHANGE OF INPUT
  handleChange(event) {
      const newData = event.target.value
      //On input change,'capture' that change and set it as state of newData(new data that will be added in firebase)
      this.setState({
        newData //shorthand for newData: newData
      })
  }

  //ON SUBMIT
  handleSubmit(event) {
    //Prevent default behaviour(reload page after submit)
      event.preventDefault()
      //database.ref->save in the root of the firebase
      /* const newData = database.ref()
                              //store like key->value pairs
                              //in firebase = "amazingnewdata": "test"
                              //also 'on change' changes only amazingnewdata child
                              .child('amazingnewdata')
                                    //set key as amanzingnewdata
                                    //.set(this.state.newData)
                              .push(this.state.newData)
                              //firebase sets his own unique key
                                //firebase looks like this
                                  "amazingnewdata": {
                                    "-L8m21ePByjKVXgA5XiE": "test",
                                    "-L8m23SDYdQ9AH9wTXC2": "test",
                                    "-L8m240axOrs0OGIqRo8": "test53"
                                    }, 
    */
   //Does same thing as the code above,only shorther
   this.dataRef.push(this.state.newData)
           
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App-data">
          {/* Output current state of data(values from firebase) */}
            {/* null, 2 ->parameters for formatting output,stringify function params */}
              { JSON.stringify(this.state.data, null, 2) }
        </pre>

        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default App
