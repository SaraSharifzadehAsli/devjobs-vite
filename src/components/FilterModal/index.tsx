import React, { useState } from "react";
import LocationIcon from "@src/components/icons/LocationIcon";
import CheckedIcon from "@src/components/icons/CheckedIcon";
import {
  Container,
  SubContainer,
  Input,
  Typography,
  SearchButton,
  UncheckedIcon,
  BG,
} from "./style";

interface FilterModalPropsType {
  isCheckedFulltime: boolean;
  fulltimeToggle: () => void;
  toggleModal: () => void;
  locationRef: React.RefObject<HTMLInputElement>;
  submitFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterModal: React.FC<FilterModalPropsType> = ({
  isCheckedFulltime,
  fulltimeToggle,
  toggleModal,
  locationRef,
  submitFilter,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BG onClick={toggleModal}>
      <Container
        onSubmit={(e) => submitFilter(e)}
        onClick={(event) => event.stopPropagation()}
      >
        <SubContainer $borderBottom>
          <LocationIcon />
          <Input
            type="text"
            placeholder="Filter by location..."
            ref={locationRef}
          />
        </SubContainer>
        <SubContainer $cursor onClick={fulltimeToggle}>
          {isCheckedFulltime ? <CheckedIcon /> : <UncheckedIcon />}
          <Typography>Full Time Only</Typography>
        </SubContainer>
        <SearchButton
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
          type="submit"
        >
          Search
        </SearchButton>
      </Container>
    </BG>
  );
};

export default FilterModal;
