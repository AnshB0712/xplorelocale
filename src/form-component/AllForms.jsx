import {useState} from 'react'

import {FormWithThirdParties} from './FormWithThirdParties'
import {FormWithEmailSignUp} from './FormWithEmailSignUp'
import {FormWithEmailSignIn} from './FormWithEmailSignIn'


export const AllForms = ({setOpenForms}) => {
  
  const [state,setState] = useState({
    type:'thirdParties',
    visible:true
  })
  
  const closeForm = () => setOpenForms(false)
  
  const openSignUp = () => setState(p => ({
    ...p,
    type:'signUp',
    visible:true}))
  
  const openSignIn = () => setState(p => ({
    ...p,
    type:'signIn',
    visible:true}))
    
  const openThirdParty = () => setState(p => ({
    ...p,
    type:'thirdParties',
    visible:true}))
  
    
    if(state.type==='thirdParties' && state.visible)
    return (
      <FormWithThirdParties 
      formDisplayMethods={{
        closeForm,
        openSignUp,
      }}
      />
      )
    
    if(state.type==='signIn' && state.visible)
    return <FormWithEmailSignIn formDisplayMethods={{
        closeForm,
        openSignUp,
        openThirdParty
      }}/>
    
    if(state.type==='signUp' && state.visible)
    return (
      <FormWithEmailSignUp 
      formDisplayMethods={{
        closeForm,
        openSignIn,
        openThirdParty,
      }}/>
      )
  
}