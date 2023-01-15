import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 25rem);
  gap: 5rem;
  width: 100%;
  margin: 5rem 0;
  transform: translate(-10px);
  transition: all 0.5s;
`;
export const ProjectBox = styled(motion.div)`
  padding: 15px;
  height: 12rem;
  background-color: #151515;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 7px 7px 10px 1px #0f0f0f;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.01);
    box-shadow: 20px 20px #e9bb1a;
    transform: translate(-10px, -10px);
  }
`;
export const ProjectTitle = styled.h1`
  color: #e2dada;
  cursor: default;
  margin: 1rem 0;
  text-transform: capitalize;
  &::first-letter {
    font-size: 4rem;
  }
`;
export const ProjectDiv = styled.div`
  margin-left: 10px;
`;
export const ProjectLink = styled.a`
  text-decoration: none;
  color: #736c6c;
  font-family: Roboto;
  text-transform: uppercase;
  font-size: 14px;
`;
export const ProjectButton = styled.button`
  width: 6rem;
  padding: 12px;
  text-transform: uppercase;
  font-family: Roboto;
  font-weight: 500;
  font-size: 0.8rem;
  color: #181616;
  background-color: #e9bb1a;
  border: none;
  border-radius: 3px;
  transition: all 0.1s linear;
  margin-right: 10px;
  cursor: pointer;
`;

export const ProjectModal = styled.div`
  position: fixed;
  z-index: 20;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ProjectModalBox = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50rem;
`;
