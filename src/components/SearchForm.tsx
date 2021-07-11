import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

type SearchFormProps = {
  searchQuery: string;
};

const SearchForm = ({ searchQuery }: SearchFormProps): JSX.Element => {
  const [searched, setSearched] = useState('');

  useEffect(() => {
    setSearched('');
  }, []);

  function userSearch(e: any): void {
    console.log(e.target.value);
  }

  return (
    <form id="searchForm">
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
        value={searchQuery}
        onChange={userSearch}
        className="mt-1 relative rounded-md shadow-sm p-2 w-full"
      />
    </form>
  );
};

export default SearchForm;
