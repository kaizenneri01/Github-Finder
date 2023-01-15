import React, { useState } from "react";
import {
  Button,
  FormContainer,
  MainContainer,
  ProjectHeader,
  TextInput,
  Title,
  UserContainer,
} from "./App.styled";
import { fetchUser, selectAllUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import GlobalStyled from "./global.styled";
import Card from "./components/Card";
import { fetchUserRepo, selectAllRepo } from "./features/repoSlice";
import {
  ProjectBox,
  ProjectButton,
  ProjectContainer,
  ProjectDiv,
  ProjectLink,
  ProjectModal,
  ProjectModalBox,
  ProjectTitle,
} from "./components/ProjectCard.styled";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { fetchReadMe, selectAllReadMe } from "./features/readSlice";

function App() {
  const userInfo = useSelector(selectAllUser);
  const readMe = useSelector(selectAllReadMe);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<any>();
  const repo = useSelector(selectAllRepo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(fetchUser(username));
    dispatch(fetchUserRepo(username));
  };

  const handleSubmitOpen = (name: string, username: string) => {
    const info = { name, username };
    setOpen(!open);
    console.log(name, username);
    dispatch(fetchReadMe(info));
  };

  return (
    <div>
      <GlobalStyled />
      <MainContainer>
        {open && (
          <ProjectModal>
            <ProjectModalBox>
              <ProjectButton onClick={() => setOpen(false)}>
                close
              </ProjectButton>
              <ReactMarkdown children={readMe} />
            </ProjectModalBox>
          </ProjectModal>
        )}
        <Title>github finder</Title>
        <FormContainer>
          <TextInput
            type="text"
            placeholder="ENTER GITHUB USERNAME"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>lets find it!</Button>
        </FormContainer>
        {userInfo.name && (
          <UserContainer>
            <Card />
            <ProjectHeader>Projects</ProjectHeader>
            <ProjectContainer>
              {repo.map((item: any, index: Number) => (
                <ProjectBox>
                  <ProjectTitle>{item.name}</ProjectTitle>
                  <ProjectDiv>
                    <ProjectButton
                      onClick={() =>
                        handleSubmitOpen(item.name, item.owner.login)
                      }
                    >
                      READ ME
                    </ProjectButton>
                    <ProjectLink href={item.html_url} target="_blank">
                      See on Github
                    </ProjectLink>
                  </ProjectDiv>
                </ProjectBox>
              ))}
            </ProjectContainer>
          </UserContainer>
        )}
      </MainContainer>
    </div>
  );
}

export default App;
