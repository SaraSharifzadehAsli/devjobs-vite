import React from "react";
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
  location: string;
  locationChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isCheckedFulltime: boolean;
  fulltimeToggle: () => void;
  toggleModal: () => void;
}

const FilterModal: React.FC<FilterModalPropsType> = ({
  location,
  locationChangeHandler,
  isCheckedFulltime,
  fulltimeToggle,
  toggleModal,
}) => {
  return (
    <BG onClick={toggleModal}>
      <Container>
        <SubContainer>
          <LocationIcon />
          <Input
            type="text"
            value={location}
            onChange={(e) => locationChangeHandler(e)}
            placeholder="Filter by location..."
          />
        </SubContainer>
        <SubContainer $cursor onClick={fulltimeToggle}>
          {isCheckedFulltime ? <CheckedIcon /> : <UncheckedIcon />}
          <Typography>Full Time Only</Typography>
        </SubContainer>
        <SearchButton>Search</SearchButton>
      </Container>
    </BG>
  );
};

export default FilterModal;
