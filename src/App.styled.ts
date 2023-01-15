import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(motion.h1)`
  background: -webkit-linear-gradient(180deg, #e98b1c, #e2ef4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Poppins;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 5rem;
  text-align: center;
`;

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectHeader = styled(motion.h1)`
  color: #e2dada;
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 800;
  font-size: 5rem;
`;

export const TextInput = styled.input`
  padding: 1rem;
  width: 20rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  font-family: Roboto;
  border-radius: 5px;
  color: #181616;
  border: none;
  background-color: #fceeee;
  margin: 1rem;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 10rem;
  padding: 1rem;
  text-transform: uppercase;
  font-family: Roboto;
  font-weight: 700;
  font-size: 0.9rem;
  color: #181616;
  background-color: #e9bb1a;
  border: none;
  border-radius: 5px;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.05);
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
