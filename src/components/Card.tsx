import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectAllUser } from "../features/userSlice";
import {
  CardContainer,
  CardDiv,
  CardDivThree,
  CardDivTwo,
  CardFollowers,
  CardFollowsNum,
  CardFollowing,
  CardImage,
  CardName,
  CardUser,
} from "./Card.styled";

const Card: FC = () => {
  const userInfo = useSelector(selectAllUser);

  return (
    <CardContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <CardImage src={userInfo.avatar_url} alt="avatar" />
      <CardDiv>
        <CardName>{userInfo.name}</CardName>
        <CardUser>{userInfo.login}</CardUser>
      </CardDiv>
      <CardDivTwo>
        <CardDivThree>
          <CardFollowsNum>{userInfo.followers}</CardFollowsNum>
          <CardFollowers>Followers</CardFollowers>
        </CardDivThree>
        <CardDivThree>
          <CardFollowsNum>{userInfo.following}</CardFollowsNum>
          <CardFollowing>Followers</CardFollowing>
        </CardDivThree>
      </CardDivTwo>
    </CardContainer>
  );
};

export default Card;
