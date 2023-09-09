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
  location: string;
  title: string;
  locationChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titleChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleModal: () => void;
};

const FilterBar: React.FC<FilterBarProps> = ({
  isCheckedFulltime,
  fulltimeToggle,
  location,
  title,
  locationChangeHandler,
  titleChangeHandler,
  toggleModal,
}) => {
  return (
    <Container>
      <SubContainer $fullWidth>
        <View view="tablet/desktop">
          <SearchIcon />
        </View>
        <Input
          type="text"
          value={title}
          onChange={(e) => titleChangeHandler(e)}
          placeholder="Filter by title, companies, expertise..."
        />
      </SubContainer>
      <View view="tablet/desktop">
        <SubContainer>
          <LocationIcon />
          <Input
            type="text"
            value={location}
            onChange={(e) => locationChangeHandler(e)}
            placeholder="Filter by location..."
          />
        </SubContainer>
      </View>
      <View view="tablet/desktop">
        <SubContainer $cursor onClick={fulltimeToggle}>
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
