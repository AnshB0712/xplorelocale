import styled from 'styled-components'

export const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
      justify-content: center;
      grid-gap: 12px;
`