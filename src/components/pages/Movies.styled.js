import styled from '@emotion/styled';


export const SearchTitle = styled.h1`
    position: relative;
    text-transform: uppercase;
    color: #3b82f6;
  margin-left: 20px;
margin-top: 20px;
    font-family: 'Catamaran', sans-serif;
`;
export const Input = styled.input`
  font-family: monospace;
  max-width: 190px;
  outline: none;
  margin-left: 20px;
  border: 1px solid #dadada;
  padding: 10px;
  border-radius: 5px;
  background-color: #f3f7fe;
  transition: .3s;
  color: #3b82f6;px 0px rgba(0, 0, 0, 0.75);
  &:focus {
      border: 1px solid #3b82f6;
  box-shadow: 0 0 0 4px #3b83f65f;
  }
`;
export const SearchList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
    padding: 0;
    list-style: none;
`;