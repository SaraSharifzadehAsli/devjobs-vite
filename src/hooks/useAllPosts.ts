import { useMemo } from "react";
import { getPostsPaginated } from "@src/api";
import IJobItems from "@src/types/IJobItems";
import { useInfiniteQuery } from "react-query";

interface ApiResponse {
  nextPage: number | undefined;
  previousPage: number | undefined;
  posts: IJobItems;
}

export const useAllPosts = () => {
  const result = useInfiniteQuery<ApiResponse, Error>({
    queryKey: ["posts", "infinite"],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam),
    // select: (data) => ({
    //   ...data,
    //   posts: data?.pages?.flatMap((page) => page.posts) ?? [],
    // }),
  });

  const allPosts = useMemo(
    () => result.data?.pages?.flatMap((page) => page.posts) ?? [],
    [result.data]
  );

  return {
    ...result,
    allPosts,
  };
};
