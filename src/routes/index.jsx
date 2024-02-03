import React from 'react'
import {Routes,Route} from 'react-router-dom'

import {BaseLayout} from '../layout-components/BaseLayout'

import SitesPage from '../pages/SitesPage'


export const RoutesTree = () => {
  return(
    <Routes>
    <Route 
    path='/'
    element={<BaseLayout/>}
    >
    <Route 
    index
    element={<SitesPage />}
    />
    </Route>
    </Routes>
    )
}