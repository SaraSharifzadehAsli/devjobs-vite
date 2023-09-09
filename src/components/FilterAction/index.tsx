import React from "react";
import FilterIcon from "@src/components/icons/FilterIcon";
import SearchIcon from "@src/components/icons/SearchIcon";
import View from "@src/helper/View";
import { FilterActionContainer, SearchButton } from "./style";

interface FilterActionPropTypes {
  toggleModal: () => void;
}

const FilterAction: React.FC<FilterActionPropTypes> = ({ toggleModal }) => {
  return (
    <FilterActionContainer>
      <View view="mobile">
        <FilterIcon onClick={toggleModal} />
      </View>
      <SearchButton>
        <View view="mobile">
          <SearchIcon color="white" />
        </View>
        <View view="tablet/desktop">Search</View>
      </SearchButton>
    </FilterActionContainer>
  );
};

export default FilterAction;
