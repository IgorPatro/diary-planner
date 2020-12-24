import React from "react"
import styled from "styled-components"

import instagram from "assets/icons/instagram.svg"
import facebook from "assets/icons/facebook.svg"
import twitter from "assets/icons/twitter.svg"

const StyledContainer = styled.div``

const StyledLink = styled.a`
  width: 40px;
  display: inline-block;
  margin-right: 10px;
`

const StyledIcon = styled.img`
  max-width: 100%;
  background-color: #222222;
  border-radius: 100%;
  padding: 5px;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: translateY(-7px);
    background-color: #7b7646;
  }
`

const SocialMedia = () => {
  const data = [
    {
      name: "instagram",
      url: "https://instagram.com",
      icon: instagram,
    },
    {
      name: "twitter",
      url: "https://twitter.com",
      icon: twitter,
    },
    {
      name: "facebook",
      url: "https://facebook.com",
      icon: facebook,
    },
  ]

  return (
    <StyledContainer>
      {data.map((socialMedia) => (
        <StyledLink href={socialMedia.url} key={socialMedia.name} rel="noreferrer" target="_blank">
          <StyledIcon src={socialMedia.icon} alt={`${socialMedia.name} icon`} />
        </StyledLink>
      ))}
    </StyledContainer>
  )
}

export default SocialMedia
