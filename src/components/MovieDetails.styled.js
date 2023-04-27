import styled from '@emotion/styled';
export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const MovieDetailsTitle = styled.h2`
  font-size: 24px;
  word-wrap: break-word;
  font-weight: 700;
  color: #000;
`;

export const MovieDetailsContainer = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 20px;

  gap: 50px;
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
export const MovieSearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
`;
export const MovieSearchOverview = styled.p`
  max-width: 300px;
`;

export const MovieSearchWrapper = styled.div`
  display: flex;
  max-width: 650px;
  align-items: center;
  gap: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
export const AdittionalInfoList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
