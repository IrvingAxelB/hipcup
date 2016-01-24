import React from 'react'
import { Route } from 'react-router'
import { App } from './client/containers/app.js'

export default function getRoutes(){
  return (
    <Route path="/" component={App}>
      <Route path='/app' component={App} />
    </Route>
  )  
  
}
