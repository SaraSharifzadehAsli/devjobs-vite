import React, { useState } from "react";
import FilterIcon from "@src/components/icons/FilterIcon";
import SearchIcon from "@src/components/icons/SearchIcon";
import View from "@src/helper/View";
import { FilterActionContainer, SearchButton } from "./style";

interface FilterActionPropTypes {
  toggleModal: () => void;
}

const FilterAction: React.FC<FilterActionPropTypes> = ({ toggleModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FilterActionContainer>
      <View view="mobile">
        <FilterIcon onClick={toggleModal} />
      </View>
      <SearchButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isHovered={isHovered}
        type="submit"
      >
        <View view="mobile">
          <SearchIcon color="white" />
        </View>
        <View view="tablet/desktop">Search</View>
      </SearchButton>
    </FilterActionContainer>
  );
};

export default FilterAction;
