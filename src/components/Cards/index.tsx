import ReactLoading from "react-loading";
import { useInfiniteQuery } from "react-query";
import { getPostsPaginated } from "@src/api";
import Card from "@src/components/Card";
import { Container, Error, LoadMore } from "./style";
import IJobItems from "@src/types/IJobItems";
import { useState } from "react";

interface ApiResponse {
  nextPage: number | undefined;
  previousPage: number | undefined;
  posts: IJobItems;
}

interface CardsProps {
  displayedData: IJobItems;
}

const Cards: React.FC<CardsProps> = ({ displayedData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { status, data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<ApiResponse, Error>({
      queryKey: ["posts", "infinite"],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam),
    });

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  return (
    <>
      <Container>
        {status === "loading" ? (
          <ReactLoading
            type="bubbles"
            color="#5964e0"
            height={128}
            width={128}
          />
        ) : status === "error" ? (
          <Error>Something went wrong!</Error>
        ) : null}
        {(displayedData.length ? displayedData : allPosts).map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </Container>
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
