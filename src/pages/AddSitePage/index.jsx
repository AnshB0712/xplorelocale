import { useState,useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {useAuthContext} from '../../context/AuthContext'

import uniqid from 'uniqid'

import {
  multipleImagesUploadToCloudinary
} from '../../utils/multipleImagesUploadToCloudinary'
import { trimObjectValues } from '../../utils/trimObjectValues'
import {cloudinaryURL} from '../../data/constant'

import {ImageUploader} from './components/ImageUploader'
import {MultiImageUploader} from './components/MultiImageUploader'
import {GeoLocationInput} from './components/GeoLocationInput'
import {MultiSelectBadges} from './components/MultiSelectBadges'
import {StatusModal} from './components/StatusModal'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Divider} from '../../layout-components/Divider'

import {serverTimestamp,setDoc,doc} from "firebase/firestore"; 
import { db } from "../../firebaseConfig"; 



import styled from 'styled-components'

const AddSitePage = () => {
  
  const [modalState,setModalState] = useState({
    show: false,
    error: null
  })
  const userInfo = useAuthContext()
  const {
    register,
    handleSubmit,
    
    setValue,
    
    formState:{ 
      errors,
      isSubmitting,
      isSubmitSuccessful
    }, 
    
    reset,
    setError,
    clearErrors
    
  } = useForm()
  
  useEffect(()=>{
    if(isSubmitSuccessful)
    reset()
  },[isSubmitSuccessful])
  
  const handleFormSubmit = async (data) =>
  {
    setModalState(p => ({...p,show:true}))
    
    const {
     thumbnail,
     otherimages,
     geopoints=null,
     ...otherData
    } = trimObjectValues(data)
    const place_id = await uniqid()
    
    try {
      
    const otherImagesUrls = await multipleImagesUploadToCloudinary
      (
      otherimages,
      userInfo?.uid,
      cloudinaryURL,
      'otherImages'
      )
    const thumbnailUrl = await multipleImagesUploadToCloudinary
      (
      thumbnail,
      userInfo?.uid,
      cloudinaryURL,
      'thumbnails'
      )
    
     const placeDetails= await setDoc(
      doc(db,'Places',place_id),
      {
      place_id,
      createdby: userInfo?.uid,
      createdat: serverTimestamp(),
      likesby: [userInfo?.uid],
      status: false,
      geopoints,
      thumbnail: thumbnailUrl[0],
      otherimages: otherImagesUrls,
      ...otherData
    })
    
     } catch (e) {
      setModalState(p => ({
        ...p,
        error: e.message
      }))
    } 
  
  }

  return (
    <div style={{
    padding:'0 1rem',
    overflow:'hidden',
    }}>
    
    <form 
    id="form"
    onSubmit={(e) => {
  handleSubmit(handleFormSubmit)(e)
    }}>
    
    <ImageUploader 
    register={register}
    errors={errors}
    setError={setError}
    clearErrors={clearErrors}
    isSubmitSuccessful={isSubmitSuccessful}
    />
    
    <MultiImageUploader
    register={register}
    errors={errors}
    setError={setError}
    clearErrors={clearErrors}
    isSubmitSuccessful={isSubmitSuccessful}
    />
    
    <Divider space={16}/>
    
    <Input
    placeholder="Ex. Mahakaleshwar Temple"
    label="Place Name"
    description="Name which is easily understood by the local residents."
    name="placename"
    error={errors?.placename?.message}
    register={register}
    />
    <Input
    placeholder="Ex. Jaisinghpura, Ujjain."
    label="Address"
    description="Again that's obvious. copy and paste the address from the Google! that simple."
    name="address"
    error={errors?.address?.message}
    register={register}
    />
    <Input
    placeholder="Ex. Ujjain"
    label="City Name"
    description="Well That's obvious right? need to know the city in order to get to the place."
    name="cityname"
    error={errors?.cityname?.message}
    register={register}
    />
    
    <GeoLocationInput 
    register={register}
    errors={errors}
    setValue={setValue}
    setError={setError}
    clearErrors={clearErrors}
    />
  
    <MultiSelectBadges
    register={register}
    setValue={setValue}
    />
    
    <Divider space={14}/>
    
    <Button 
    size="md"
    form="form"
    style={{
    width:'100%',
    boxSizing:'border-box'
    }}
    >
    Submit Details
    </Button>
    
    </form>
    
    {modalState.show 
    && 
    <StatusModal
    modalState={modalState}
    setModalState={setModalState}
    isSubmitting={isSubmitting}
    />}
    
    </div>
  )
}


export default AddSitePage