// import { useDispatch } from 'react-redux';
// import { saveDataToState } from '../../toolkit/filterSlice';
// import UseFilter from '../../hooks/UseFilter';

const Search = () => {
  // const dispatch = useDispatch();
  // const {inputHandler} = UseFilter()

  return (
    <div className="search">
      <div className="search__top">
        <button>X</button>
        <div className="search__top--search">
          <input name="name" type="text" placeholder="Type here to search" />
        </div>
      </div>
      <div className="search__main">
        <span>Categories</span>
        <button name="beauty">Beauty</button>
        <button name="furniture">Furniture</button>
        <button name="groceries">Groceries</button>
      </div>
    </div>
  );
};

export default Search;
