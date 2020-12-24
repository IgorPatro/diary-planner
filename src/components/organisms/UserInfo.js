import React, { useState, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { changeUserEmail } from "store/actions"

import pencil from "assets/icons/pencil.svg"
import done from "assets/icons/done.svg"
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

const UserInfo = ({ user, changeUserEmail }) => {
  const [isEmailEditable, setEmailEditability] = useState(false)
  const newEmailRef = useRef()

  const validateEmail = (email) => {
    const RegEx = /\S+@\S+\.\S+/
    return RegEx.test(email)
  }

  const handleCLick = () => {
    const newEmail = newEmailRef.current.value
    if (validateEmail(newEmail)) {
      try {
        changeUserEmail(newEmail)
        setEmailEditability(false)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <StyledContainer>
      <Header level={3} color="black" size="s">
        Dane użytkownika:
      </Header>
      <StyledParagraph color="black" size="xs">
        email:
        {isEmailEditable ? (
          <StyledInput placeholder="Your new email" ref={newEmailRef} />
        ) : (
          <StyledSpan>{user.email}</StyledSpan>
        )}
        <StyledIcon src={pencil} onClick={() => setEmailEditability(!isEmailEditable)} />
        {isEmailEditable && <StyledIcon src={done} onClick={() => handleCLick()} />}
      </StyledParagraph>
    </StyledContainer>
  )
}

UserInfo.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  changeUserEmail: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserEmail: (newEmail) => dispatch(changeUserEmail(newEmail)),
  }
}

export default connect(null, mapDispatchToProps)(UserInfo)
