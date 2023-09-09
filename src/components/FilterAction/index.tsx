import FilterIcon from "@src/components/icons/FilterIcon";
import SearchIcon from "@src/components/icons/SearchIcon";
import View from "@src/helper/View";
import { FilterActionContainer, SearchButton } from "./style";

const FilterAction = () => {
  return (
    <FilterActionContainer>
      <View view="mobile">
        <FilterIcon />
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
