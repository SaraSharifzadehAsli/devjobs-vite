import { IJobItem } from "@src/types/IJobItems";
import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Header,
  LogoBG,
  Content,
  Typography,
  SiteButton,
  Main,
  MainHeader,
  SubMainHeader,
  ApplyButton,
  Footer,
  SubFooter,
  LogoImg,
  FooterContent,
  // FooterContent,
} from "./style";

const Details = () => {
  const location = useLocation();
  const { post }: { post: IJobItem } = location.state;

  return (
    <Container>
      <Header>
        <LogoBG $logoBackground={post.logoBackground}>
          <LogoImg src={post.logo} alt="post-logo" />
        </LogoBG>
        <Content>
          <Typography $bold $fs="24px">
            {post.company}
          </Typography>
          <Typography $fs="16px">{post.company}.com</Typography>
        </Content>
        <SiteButton href={post.website}>Company Site</SiteButton>
      </Header>
      <Main>
        <MainHeader>
          <SubMainHeader>
            <Typography $fs="16px">
              {post.postedAt} - {post.contract}
            </Typography>
            <Typography $bold $fs="28px">
              {post.position}
            </Typography>
            <Typography $bold $fs="14px" $blue>
              {post.location}
            </Typography>
          </SubMainHeader>
          <ApplyButton href={post.website}>Apply Now</ApplyButton>
        </MainHeader>
        <Typography $pt="40px" $pb="40px" $fs="16px">
          {post.description}
        </Typography>
        <Typography $bold $fs="20px">
          Requirements
        </Typography>
        <Typography $pt="28px" $pb="32px" $fs="16px">
          {post.requirements.content}
        </Typography>
        <ul>
          {post.requirements.items.map((item, index) => (
            <li key={index}>
              <Typography $pb="8px" $fs="16px">
                {item}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography $pt="32px" $pb="28px" $bold $fs="20px">
          What You Will Do
        </Typography>
        <Typography $pb="32px" $fs="16px">
          {post.role.content}
        </Typography>
        <ol>
          {post.role.items.map((item, index) => (
            <li key={index}>
              <Typography $pb="8px" $fs="16px">
                {item}
              </Typography>
            </li>
          ))}
        </ol>
      </Main>
      <Footer>
        <FooterContent>
          <SubFooter>
            <Typography $bold $fs="20px">
              {post.position}
            </Typography>
            <Typography $fs="16px">So Digital Inc.</Typography>
          </SubFooter>
          <ApplyButton href={post.website}>Apply Now</ApplyButton>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Details;
