import React, { useState } from "react";
import FilterBar from "@src/components/FilterBar";
import Cards from "@src/components/Cards";
import FilterModal from "@src/components/FilterModal";

const App: React.FC = () => {
  const [isCheckedFulltime, setIsCheckedFulltime] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [showModal, setShowModal] = useState(false);

  const fulltimeToggle = () => {
    setIsCheckedFulltime(!isCheckedFulltime);
  };

  const locationChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocation(event.target.value);
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <>
      <FilterBar
        fulltimeToggle={fulltimeToggle}
        isCheckedFulltime={isCheckedFulltime}
        location={location}
        locationChangeHandler={locationChangeHandler}
        title={title}
        titleChangeHandler={titleChangeHandler}
        toggleModal={toggleModal}
      />
      <Cards
        isCheckedFulltime={isCheckedFulltime}
        title={title}
        location={location}
      />
      {showModal && (
        <FilterModal
          location={location}
          isCheckedFulltime={isCheckedFulltime}
          locationChangeHandler={locationChangeHandler}
          fulltimeToggle={fulltimeToggle}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default App;
