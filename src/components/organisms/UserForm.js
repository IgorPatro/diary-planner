/* eslint-disable no-param-reassign */
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import PropTypes from "prop-types"
import styled from "styled-components"
import _ from "lodash/core"

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 8px;
  width: 340px;
`

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 1px;
  font-size: 1.7rem;
`

const StyledSubmit = styled.input`
  background-color: black;
  color: white;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  padding: 3px 0;
  border: none;
  cursor: pointer;
  transition: color 0.5s, background 0.5s;
  border: 1px solid black;
  font-size: 1.7rem;

  &:hover {
    color: black;
    background-color: white;
  }
`

const StyledErrorsWrapper = styled.span`
  font-size: 0.8rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 1.4rem;
  color: black;

  &.active {
    opacity: 1;
  }
`

const UserForm = ({ registerForm, submitFunc, errorMessage }) => {
  const { register, handleSubmit, errors } = useForm()

  const [differentPasswords, setDifferentPasswords] = useState(null)

  const handleSubmitFunc = (data) => {
    if (registerForm) {
      if (data.password === data.repeatedPassword) {
        submitFunc(data)
      } else {
        setDifferentPasswords("Hasła się nie zgadzają")
      }
    } else {
      submitFunc(data)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleSubmitFunc)}>
      <StyledInput
        name="email"
        placeholder="email"
        ref={register({ required: true, maxLength: 40, pattern: /\S+@\S+\.\S+/ })}
      />
      <StyledInput
        name="password"
        placeholder="password"
        type="password"
        ref={register({ required: true, maxLength: 30, minLength: 6 })}
      />
      {registerForm && (
        <StyledInput
          name="repeatedPassword"
          placeholder="repeat your password"
          type="password"
          ref={register({ required: true, maxLength: 30, minLength: 6 })}
        />
      )}
      <StyledSubmit type="submit" value={registerForm ? "Zarejestruj się" : "Zaloguj się"} />
      <StyledErrorsWrapper
        className={(!_.isEmpty(errors) || errorMessage || differentPasswords) && "active"}
      >
        {errorMessage || differentPasswords || "Twoje pola nie są uzupełnione poprawnie"}
      </StyledErrorsWrapper>
    </StyledForm>
  )
}

UserForm.propTypes = {
  registerForm: PropTypes.bool,
  submitFunc: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

UserForm.defaultProps = {
  registerForm: false,
  errorMessage: null,
}

export default UserForm
