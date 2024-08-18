import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../redux/filter/selectors";
import { changeFilter } from "../redux/filter/slice";
import css from "../components/css/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.box}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
