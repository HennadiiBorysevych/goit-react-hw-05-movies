import styled from '@emotion/styled';
export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  margin: 0 auto;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const MovieDetailsTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;


export const MovieDetailsContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 50px;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  
`;
export const OverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
`;
export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  background-color: #fff;

  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
