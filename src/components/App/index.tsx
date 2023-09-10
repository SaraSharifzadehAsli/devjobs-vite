import React, { useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { getPostsPaginated } from "@src/api";
import FilterBar from "@src/components/FilterBar";
import Cards from "@src/components/Cards";
import FilterModal from "@src/components/FilterModal";
import IJobItems from "@src/types/IJobItems";

interface ApiResponse {
  nextPage: number | undefined;
  previousPage: number | undefined;
  posts: IJobItems;
}

const App: React.FC = () => {
  const [isCheckedFulltime, setIsCheckedFulltime] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [displayedData, setDisplayedData] = useState<IJobItems>([]);
  const locationRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const { data } = useInfiniteQuery<ApiResponse, Error>({
    queryKey: ["posts", "infinite"],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam),
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  const submitFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setDisplayedData([]);

    if (titleRef.current && locationRef.current) {
      allPosts.map((post) => {
        if (
          (post.company
            .toLowerCase()
            .includes(titleRef.current.value.toLowerCase()) ||
            post.position
              .toLowerCase()
              .includes(titleRef.current.value.toLowerCase())) &&
          post.location
            .toLowerCase()
            .includes(locationRef.current.value.toLowerCase())
        ) {
          if (isCheckedFulltime) {
            if (post.contract === "Full Time") {
              setDisplayedData((prevData) => [...prevData, post]);
            } else return null;
          }
          setDisplayedData((prevData) => [...prevData, post]);
        }
        return null;
      });
    }

    locationRef.current.value = "";
    titleRef.current.value = "";
  };

  const fulltimeToggle = () => {
    setIsCheckedFulltime(!isCheckedFulltime);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <FilterBar
        fulltimeToggle={fulltimeToggle}
        isCheckedFulltime={isCheckedFulltime}
        toggleModal={toggleModal}
        locationRef={locationRef}
        titleRef={titleRef}
        submitFilter={submitFilter}
      />
      <Cards displayedData={displayedData} />
      {showModal && (
        <FilterModal
          isCheckedFulltime={isCheckedFulltime}
          fulltimeToggle={fulltimeToggle}
          toggleModal={toggleModal}
          locationRef={locationRef}
          submitFilter={submitFilter}
        />
      )}
    </>
  );
};

export default App;
