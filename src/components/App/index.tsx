import React, { useRef, useState, useEffect } from "react";
import FilterBar from "@src/components/FilterBar";
import Cards from "@src/components/Cards";
import FilterModal from "@src/components/FilterModal";
import IJobItems from "@src/types/IJobItems";
import { useAllPosts } from "@src/hooks/useAllPosts";

const App: React.FC = () => {
  const [isCheckedFulltime, setIsCheckedFulltime] = useState(false);
  const [isFilterSubmitted, setIsFilterSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [displayedData, setDisplayedData] = useState<IJobItems>([]);
  const locationRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  const { allPosts } = useAllPosts();

  const applyFilter = () => {
    const filteredData = allPosts?.filter((post) => {
      if (
        (titleRef.current?.value === "" ||
          post.company
            .toLowerCase()
            .includes((titleRef.current?.value || "").toLowerCase()) ||
          post.position
            .toLowerCase()
            .includes((titleRef.current?.value || "").toLowerCase())) &&
        (locationRef.current?.value === "" ||
          post.location
            .toLowerCase()
            .includes((locationRef.current?.value || "").toLowerCase())) &&
        (!isCheckedFulltime || post.contract === "Full Time")
      ) {
        return true;
      }
      return false;
    });

    return filteredData;
  };

  useEffect(() => {
    if (isFilterSubmitted) {
      setDisplayedData(applyFilter());
    } else {
      setDisplayedData(allPosts);
    }
  }, [allPosts, isFilterSubmitted]);

  const submitFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFilterSubmitted(!isFilterSubmitted);
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
