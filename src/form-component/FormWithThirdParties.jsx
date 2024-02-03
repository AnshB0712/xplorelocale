import {useState,useEffect} from 'react'

import X from '../assets/icons/Close'

import Google from "../assets/icons/Google";

import {Button} from '../components/Button'
import {Col} from '../layout-components/Col'

import styled from 'styled-components'

import {motion} from 'framer-motion'
import {GoogleSignIn} from '../firebase/auth-functions/GoogleSignIn'


export const FormWithThirdParties = ({
	formDisplayMethods,
	options,
}) => {
  
  
  const [isFetched,setIsFetched] = useState('')

  const handleGoogleService = async() => {
    setIsFetched('google')
    try {
      await GoogleSignIn()
      formDisplayMethods.closeForm()
    } catch (e) {
      console.log(e)
    }
    finally{
      setIsFetched('')
    }
  }
  
  return(
    <FormContainer
    transition={{type:'tween'}}
    initial={options.initial}
    animate={options.animate}
    >
    
    <p
    style={{
      fontSize:'35px',
      fontWeight:'var(--bold)',
      textAlign: 'center'
    }}
    >Hello!</p>
    
    <p
    style={{
      fontSize:'var(--heading-text)',
      color:'var(--lighter-text)',
      fontWeight:'var(--medium)',
      textAlign: 'center',
      marginBottom: '30px'
    }}
    >Use your email or another service to continue with XploreLocal.</p>
    
    <Col
    gap={10}
    >
    
    <Button
    variant="secondary"
    loading={isFetched==='google'}
    size="lg"
    icon={<Google />}
    style={{width:'100%'}}
    onClick={handleGoogleService}
    >
    Continue with Google
    </Button>
    
    <Button
    onClick={()=>formDisplayMethods.openSignUp()}
    style={{width:'100%'}}
    >
    Continue with Email
    </Button>
    
    
    </Col>
    
    <Button
    size="sm"
    variant="ghost"
    onClick={() => formDisplayMethods.closeForm()}
    style={{
    padding:'0',
    position: 'absolute',
    top: '25px',
    left: '20px',
    transform: 'translate(-50%,-50%)'
    }}
    >
    <X 
    color="var(--light-text)" 
    size={30}/>
    </Button>
    
    </FormContainer>

    )
}

const FormContainer = styled(motion.div)`
     position: fixed;
     bottom: 0%;

     background: #fff;
     border: 1px solid #dbdbd8;
     border-radius: 10px;
     padding: 2rem;
     
     z-index: var(--cloud-7);
     width: min(100vw,420px);
     
     @media(min-width: 1000px){
    
     	bottom: 25%;
     	left: 35%;
     	
     	transform:translate(-50%,-50%);
     }
`