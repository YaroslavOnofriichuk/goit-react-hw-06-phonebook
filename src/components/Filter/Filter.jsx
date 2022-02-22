import { useDispatch } from 'react-redux';
import { setFilter } from "../../redux/phoneBookSlice";
import { FilterStyled } from "./Filter.styled";

export function Filter () {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

    return (
      <FilterStyled>
        <label>Find contacts by name</label>
        <input type="text" onChange={handleChange} />
      </FilterStyled>
    );
};