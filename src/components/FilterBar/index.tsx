import { useState } from "react";
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

const FilterBar = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <SubContainer $fullWidth>
        <View view="tablet/desktop">
          <SearchIcon />
        </View>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Filter by title, companies, expertise..."
        />
      </SubContainer>
      <View view="tablet/desktop">
        <SubContainer>
          <LocationIcon />
          <Input
            type="text"
            value={location}
            onChange={(e): void => setLocation(e.target.value)}
            placeholder="Filter by location..."
          />
        </SubContainer>
      </View>
      <View view="tablet/desktop">
        <SubContainer
          $cursor
          onClick={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
        >
          {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
          <View view="desktop">
            <Typography>Full Time Only</Typography>
          </View>
          <View view="tablet">
            <Typography>Full Time</Typography>
          </View>
        </SubContainer>
      </View>
      <FilterAction />
    </Container>
  );
};

export default FilterBar;
