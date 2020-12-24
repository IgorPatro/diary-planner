import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import pencil from "assets/icons/pencil.svg"
import Header from "components/atoms/Header"
import Paragraph from "components/atoms/Paragraph"

const StyledContainer = styled.div`
  margin: 20px 0;
`

const StyledParagraph = styled(Paragraph)`
  display: flex;
  align-items: center;
`

const StyledIcon = styled.img`
  height: ${({ theme }) => theme.sizes.xs};
  margin-left: 5px;
  cursor: pointer;
`

const StyledSpan = styled.span`
  font-size: inherit;
  margin-left: 5px;
`

const StyledInput = styled.input`
  font-size: inherit;
  margin-left: 5px;
`

const UserInfo = ({ user }) => {
  const [isEmailEditable, setEmailEditability] = useState(false)

  return (
    <StyledContainer>
      <Header level={3} color="black" size="s">
        Dane użytkownika:
      </Header>
      <StyledParagraph color="black" size="xs">
        email:
        {isEmailEditable ? (
          <StyledInput placeholder="Your new email" />
        ) : (
          <StyledSpan>{user.email}</StyledSpan>
        )}
        <StyledIcon src={pencil} onClick={() => setEmailEditability(!isEmailEditable)} />
      </StyledParagraph>
    </StyledContainer>
  )
}

UserInfo.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default UserInfo
