import SearchIcon from "@src/components/icons/SearchIcon";
import LocationIcon from "@src/components/icons/LocationIcon";
import CheckedIcon from "@src/components/icons/CheckedIcon";
import FilterAction from "@src/components/FilterAction";
import View from "@src/helper/View";

import {
  Container,
  Input,
  SubContainer,
  UncheckedIcon,
  Typography,
} from "./style";

type FilterBarProps = {
  isCheckedFulltime: boolean;
  fulltimeToggle: () => void;
  toggleModal: () => void;
  locationRef: React.RefObject<HTMLInputElement>;
  titleRef: React.RefObject<HTMLInputElement>;
  submitFilter: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  isCheckedFulltime,
  fulltimeToggle,
  toggleModal,
  submitFilter,
  titleRef,
  locationRef,
}) => {
  return (
    <Container onSubmit={(e) => submitFilter(e)}>
      <SubContainer $fullWidth>
        <View view="tablet/desktop">
          <SearchIcon />
        </View>
        <Input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          ref={titleRef}
        />
      </SubContainer>
      <View view="tablet/desktop">
        <SubContainer $borderLeft>
          <LocationIcon />
          <Input
            type="text"
            placeholder="Filter by location..."
            ref={locationRef}
          />
        </SubContainer>
      </View>
      <View view="tablet/desktop">
        <SubContainer $borderLeft $cursor onClick={fulltimeToggle}>
          {isCheckedFulltime ? <CheckedIcon /> : <UncheckedIcon />}
          <View view="desktop">
            <Typography>Full Time Only</Typography>
          </View>
          <View view="tablet">
            <Typography>Full Time</Typography>
          </View>
        </SubContainer>
      </View>
      <FilterAction toggleModal={toggleModal} />
    </Container>
  );
};

export default FilterBar;
