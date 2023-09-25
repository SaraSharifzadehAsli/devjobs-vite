import ReactLoading from "react-loading";
import Card from "@src/components/Card";
import { Container, Error, LoadMore } from "./style";
import IJobItems from "@src/types/IJobItems";
import { useState } from "react";
import { useAllPosts } from "@src/hooks/useAllPosts";

interface CardsProps {
  displayedData: IJobItems;
}

enum Status {
  ERROR = "error",
  LOADING = "loading",
  SUCCESS = "success",
}

const Cards: React.FC<CardsProps> = ({ displayedData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { status, isFetchingNextPage, hasNextPage, fetchNextPage, allPosts } =
    useAllPosts();

  const handleStatus = () => {
    switch (status) {
      case Status.LOADING:
        return (
          <ReactLoading
            type="bubbles"
            color="#5964e0"
            height={128}
            width={128}
          />
        );

      case Status.ERROR:
        return <Error>Something went wrong!</Error>;

      case Status.SUCCESS:
        return (displayedData?.length ? displayedData : allPosts).map(
          (post) => <Card key={post.id} post={post} />
        );

      default:
        break;
    }
  };

  return (
    <>
      <Container>{handleStatus()}</Container>
      {hasNextPage && (
        <LoadMore
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          $isHovered={isHovered}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </LoadMore>
      )}
    </>
  );
};
export default Cards;
