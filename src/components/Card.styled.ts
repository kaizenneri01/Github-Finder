import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 5rem;
  padding: 15px;
  height: 18rem;
  width: 17rem;
  background-color: #151515;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 7px 7px 10px 1px #0f0f0f;
  transition: all 0.05s;
  &:hover {
    transform: scale(1.01);
  }
`;
export const CardImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  border: #e9bb1a solid 3px;
`;
export const CardDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardName = styled.h1`
  color: #e2dada;
  margin: 0;
  font-family: Roboto;
  font-size: 1.5rem;
`;
export const CardUser = styled.h3`
  color: #575252;
  font-size: 1rem;
  margin: 2px;
`;
export const CardDivTwo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const CardDivThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardFollowsNum = styled.h4`
  margin: 0;
  color: #e2dada;
  font-weight: 300;
  font-size: 1.5rem;
`;
export const CardFollowers = styled.h4`
  margin: 0;
  color: #575252;
  font-weight: 300;
  font-size: 15px;
  padding-top: 5px;
`;
export const CardFollowing = styled(CardFollowers)``;
