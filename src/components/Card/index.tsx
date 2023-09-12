import { Link } from "react-router-dom";
import { Container, Text, Title, Location, LogoBG } from "./style";
import { IJobItem } from "@src/types/IJobItems";

const Card = ({ post }: { post: IJobItem }) => {
  return (
    <Link
      to={`/details/${post.id}`}
      state={{ post }}
      style={{ display: "contents" }}
    >
      <Container>
        <LogoBG $logoBackground={post.logoBackground}>
          <img src={post.logo} alt="post-logo" />
        </LogoBG>
        <Text>
          {post.postedAt} - {post.contract}
        </Text>
        <Title>{post.position}</Title>
        <Text>{post.company}</Text>
        <Location>{post.location}</Location>
      </Container>
    </Link>
  );
};

export default Card;
