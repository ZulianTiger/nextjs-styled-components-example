import styled from 'styled-components'

const BlueContainer = styled.div`
  height: 100px;
  width: 100vw;
  background-color: blue;
`

const WhiteText = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #fff;
  margin: 0;
`

export default function Home() {
  return (
    <BlueContainer>
      <WhiteText>
        Next.js and styled-components example
      </WhiteText>
    </BlueContainer>
  )
}
