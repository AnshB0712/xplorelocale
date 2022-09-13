import {useState} from 'react'

import {SearchInput} from './components/SearchInput'
import {SearchCard} from './components/SearchCard'

import Lochness from '../../assets/illustrations/Lochness'
import DogNewsPaper from '../../assets/illustrations/DogNewsPaper'

import styled from 'styled-components'

const SearchPage = () => {
  
 const [data,setData] = useState('initial')
 
  return (
    <Wrapper>
    <SearchInput
    setData={setData}
    />
    <ScrollArea>
    {data==='initial'&&<Lochness/>}
    {
    Array.isArray(data)
    &&
    (
    Boolean(data.length)
    ?
    data.map(doc => <SearchCard key={doc.place_id} info={doc}/>)
    :
    <DogNewsPaper />
    )}
    </ScrollArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
`
const ScrollArea = styled.div`
     width: 100%;
     height: 440px; 
     overflow: auto;
     
     display: grid;
     place-items: center;
     align-items: start;
`

export default SearchPage