import React, { useRef, useState, useEffect } from "react";
import FilterBar from "@src/components/FilterBar";
import Cards from "@src/components/Cards";
import FilterModal from "@src/components/FilterModal";
import IJobItems from "@src/types/IJobItems";
import { useAllPosts } from "@src/hooks/useAllPosts";
import { useQueryParams, StringParam, BooleanParam } from "use-query-params";

const App: React.FC = () => {
  const [isCheckedFulltime, setIsCheckedFulltime] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [displayedData, setDisplayedData] = useState<IJobItems>([]);
  const locationRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useQueryParams({
    title: StringParam,
    location: StringParam,
    isFulltime: BooleanParam,
  });

  const { title, location, isFulltime } = query;

  const { allPosts } = useAllPosts();

  const applyFilter = () => {
    const filteredData = allPosts?.filter((post) => {
      if (
        (title === "" ||
          post.company.toLowerCase().includes((title || "").toLowerCase()) ||
          post.position.toLowerCase().includes((title || "").toLowerCase())) &&
        (location === "" ||
          post.location
            .toLowerCase()
            .includes((location || "").toLowerCase())) &&
        (!isCheckedFulltime || post.contract === "Full Time")
      ) {
        return true;
      }
      return false;
    });

    return filteredData;
  };

  useEffect(() => {
    setDisplayedData(applyFilter());
  }, [title, location, isFulltime, allPosts]);

  useEffect(() => {
    if (title && titleRef.current) {
      titleRef.current.value = title;
    }
    if (location && locationRef.current) {
      locationRef.current.value = location;
    }
    if (isFulltime) {
      setIsCheckedFulltime(isFulltime);
    }
  }, []);

  const submitFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(
      {
        title: titleRef.current?.value,
        location: locationRef.current?.value,
        isFulltime: isCheckedFulltime,
      },
      "replace"
    );
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
