import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    width: 45rem;
    height: 4rem;
    border-radius: 2rem;
    border: none;
    box-shadow: 3px 3px 3px #999999;
`

const SearchBar = styled.input`
    placeholder="# 분리수거 Tip # 서울시 분리수거"
    width: 45rem;
    display: flex;
    border-radius: 2rem;
    border: none;
    background-color: #eeeeee;
    padding-left: 4rem;
    font-size: 1.3rem;
    &::placeholder{
      color: black;
    }
    background-image: url("../../images/MagnifyingGlass.png");
    background-repeat: no-repeat;
    background-size: 1.7rem;
    background-position: 1.4rem;

`

const Button = styled.button `
    width: 10rem;
    display: flex;
    border-radius: 2rem;
    border: none;
    background-color: #71BD37;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: -3rem;
`

const BoardForm = () => {
  return (
    <Form>
      <SearchBar/>
      <Button>검색</Button>
    </Form>
    )
}

export default BoardForm