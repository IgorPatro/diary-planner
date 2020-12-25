import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 500px;
  margin: 70px 0;
`

const StyledTextarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;
  max-height: 300px;
  min-height: 170px;
  font-size: 1.7rem;
  padding: 5px;
  border: 1px solid grey;
`

const StyledSubmit = styled.input`
  width: 250px;
  margin: 10px 0 0;
  padding: 10px 40px;
  font-size: 1.4rem;
  border: none;
  background-color: black;
  color: white;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  text-align: center;
  transition: color 0.3s, background 0.3s;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`

const NoteForm = ({ submitFunc, userId }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data, e) => {
    e.target.reset()
    submitFunc(userId, data.note)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTextarea
        rows="5"
        name="note"
        ref={register({ required: true })}
        placeholder="Oto miejsce na twoją nową notatkę!"
      />
      {errors.note && <span>This field is required</span>}
      <StyledSubmit type="submit" value="Dodaj nową notatkę" />
    </StyledForm>
  )
}

NoteForm.propTypes = {
  submitFunc: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}

export default NoteForm
