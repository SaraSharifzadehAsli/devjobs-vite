import ReactLoading from "react-loading";
import { useInfiniteQuery } from "react-query";
import { getPostsPaginated } from "@src/api";
import Card from "@src/components/Card";
import { Container, Error, LoadMore } from "./style";
import IJobItems from "@src/types/IJobItems";

interface ApiResponse {
  nextPage: number | undefined;
  previousPage: number | undefined;
  posts: IJobItems;
}

interface CardsProps {
  isCheckedFulltime: boolean;
  title: string;
  location: string;
}

const Cards: React.FC<CardsProps> = ({
  isCheckedFulltime,
  title,
  location,
}) => {
  const { status, data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<ApiResponse, Error>({
      queryKey: ["posts", "infinite"],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam),
    });

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  const displayedData = allPosts.map((post) => {
    if (
      (title === "" ||
        post.company.toLowerCase().includes(title.toLowerCase()) ||
        post.position.toLowerCase().includes(title.toLowerCase())) &&
      (location === "" ||
        post.location.toLowerCase().includes(location.toLowerCase()))
    ) {
      if (isCheckedFulltime) {
        if (post.contract === "Full Time") {
          return <Card key={post.id} post={post} />;
        } else return null;
      }
      return <Card key={post.id} post={post} />;
    }
    return null;
  });

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
        {displayedData}
      </Container>
      {hasNextPage && (
        <LoadMore onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </LoadMore>
      )}
    </>
  );
};
export default Cards;
