import React, { useState } from 'react';
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-zinc-800">
      <Input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleInputChange}
        className="w-96 text-black"
      />
      <Button onClick={handleSearch} className="ml-2">Search</Button>
    </div>
  );
};

export default SearchBar;
