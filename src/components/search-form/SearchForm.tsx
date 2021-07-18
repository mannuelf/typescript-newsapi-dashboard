import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setSearch } from 'store/reducers/SearchReducer';
import { fetchArticles } from 'store/reducers/ArticlesReducer';
import { useAppDispatch, useAppSelector } from 'hooks';

const SearchForm = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearch(searchTerm));
    dispatch(fetchArticles());
  }, [searchTerm, dispatch]);

  function handleChange(e: any) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        aria-labelledby="search"
        className="block text-sm font-medium text-gray-700"
      >
        Search news
      </label>
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        onFocus={(e: any) => (e.target.value = '')}
        className="mt-1 relative rounded-md shadow-sm p-2 w-full"
      />
    </form>
  );
};

export default SearchForm;
