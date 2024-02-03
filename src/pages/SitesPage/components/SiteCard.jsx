import {useNavigate} from 'react-router-dom'
import {useAuthContext} from '../../../context/AuthContext'

import {Image} from '../../../components/Image'
import {LikeActionButton} from '../../../components/LikeActionButton'
import {SaveActionButton} from '../../../components/SaveActionButton'
import {Button} from '../../../components/Button'

import {Row} from '../../../layout-components/Row'
import {Col} from '../../../layout-components/Col'

import Location from '../../../assets/icons/Location'
import Comment from '../../../assets/icons/Comment'
import Bookmark from '../../../assets/icons/Bookmark'

import styled from 'styled-components'

const SiteLocation = ({placename,cityname}) => {
  return (
    <Col alignment='start'>
    <p
    style={{
    fontSize:'var(--title-text)',
    fontWeight:'var(--bold)',
    color:'var(--dark-text)',
    }}
    >{cityname}</p>
    <Row gap={2}>
    <Location/>
    <p
    style={{
    fontSize:'var(--para-text)',
    fontWeight:'var(--medium)',
    color:'var(--lighter-text)',
    }}
    >{placename}</p>
    </Row>
    </Col>
    )
}

export function SiteCard({geoInfo}) {
  return (
  <CardFigure>
    <Image 
     src={geoInfo.location.icon}
     height={190}/>
  
    <SiteDetails>
      <SiteLocation 
      cityname={geoInfo.location.name}
      placename={geoInfo.location.region}
      />
      
    <Col alignment='start'>
    <p
    style={{
    fontSize:'var(--para-text)',
    fontWeight:'var(--medium)',
    color:'var(--lighter-text)',
    }}
    >Weather</p>
    <p
    style={{
    fontSize:'var(--title-text)',
    fontWeight:'var(--bold)',
    color:'var(--dark-text)',
    }}
    >{geoInfo.location.text}</p>
    </Col>
    </SiteDetails>
    

  </CardFigure>
  );
}

const CardFigure = styled.figure`
     border: 1px solid #dbdbd8;
     border-radius: var(--md-rad);
     padding: 8px;
     width: 100%;
     max-width: 360px;
`

const ButtonContainer = styled.div`
     display: grid;
     grid-template-columns: 60px auto; 
     grid-gap: 8px;
`

const SiteDetails= styled(Row)``