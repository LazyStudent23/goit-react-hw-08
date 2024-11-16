import { ImSearch } from "react-icons/im";

import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilters } from "../../redux/filtersSlice/filtersSlice";

const SearchBox = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  return (
    <div className={styles.searchbox_wrapper}>
      <label className={styles.label}>
        <span className={styles.label_title}>
          Find contacts by name or number
        </span>

        <input
          onChange={(event) => {
            dispatch(changeFilter(event.target.value));
          }}
          className={styles.input}
          type="text"
          value={filters}
          placeholder="Start typing..."
        />

        <ImSearch className={styles.ico} />
      </label>
    </div>
  );
};

export default SearchBox;
