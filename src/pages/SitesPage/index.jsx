import styled from 'styled-components'

import NativeLocationPlaces from './components/NativeLocationPlaces'
import {DataTable} from './components/DataTable'

const data = [
  { name: 'John Doe', status: 'Active', createdAt: '02/4/2024' },
  { name: 'Alice Smith', status: 'Inactive', createdAt: '02/1/2024' },
];



const SitesPage = () => {
  
  return (
    <>
    <NativeLocationPlaces />
    <DataTable data={data}/>
    </>
    )
}

export default SitesPage