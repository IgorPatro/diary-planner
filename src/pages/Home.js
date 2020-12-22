import React from "react"
import styled from "styled-components"

import Button from "components/atoms/Button"
import Header from "components/atoms/Header"
import Paragraph from "components/atoms/Paragraph"
import homeBackground from "assets/images/home-background.png"

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  background: url(${homeBackground});
  background-size: cover;
  background-position: center;
  display: flex;
`

const StyledContentWrapper = styled.div`
  width: 550px;
`

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <Header level={1} size="xl">
          Your new modern diary
        </Header>
        <Paragraph size="xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam eget metus
          condimentum consectetur eu sed tortor. Sed quis pharetra magna. Cras ac orci eros. Sed
          ultricies dolor id ipsum dapibus placerat. Proin id orci sagittis elit posuere tristique.
        </Paragraph>
        <Button>READ MORE</Button>
      </StyledContentWrapper>
    </StyledContainer>
  )
}

export default HomePage
