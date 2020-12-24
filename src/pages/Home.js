import React from "react"
import styled from "styled-components"

import HomeHud from "components/organisms/HomeHud"
import Button from "components/atoms/Button"
import Header from "components/atoms/Header"
import Paragraph from "components/atoms/Paragraph"
import homeBackground from "assets/images/home-background.png"

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  background: url(${homeBackground});
  background-size: cover;
  background-position: center;
  display: flex;
  position: relative;
`

const StyledContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  width: 700px;
`

const StyledParagraph = styled(Paragraph)`
  margin: 10px 0 20px;
`

const HomePage = () => {
  return (
    <StyledContainer>
      <HomeHud />
      <StyledContentWrapper>
        <Header level={1} size="xxl">
          Your new modern diary
        </Header>
        <StyledParagraph size="xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam eget metus
          condimentum consectetur eu sed tortor. Sed quis pharetra magna. Cras ac orci eros. Sed
          ultricies dolor id ipsum dapibus placerat. Proin id orci sagittis elit posuere tristique.
        </StyledParagraph>
        <Button
          color="black"
          background="white"
          hovercolor="white"
          hoverbackground="black"
          linkTo="/about"
        >
          READ MORE
        </Button>
      </StyledContentWrapper>
    </StyledContainer>
  )
}

export default HomePage
