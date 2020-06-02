import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'


class ApplicationViews extends Component {
  render() {
    return (
      <>

        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          console.log({...props})
          return <AnimalList {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          console.log("this is props from application views", props)
          return <AnimalDetail animalId={props.match.params.animalId} />
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}/>
        }} />

      </>
    )
  }
}

export default ApplicationViews