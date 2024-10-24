import React from "react";
import { SearchBarProps } from "../types";
import { Input } from "@/components/ui/input";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        className="w-full"
      />
    </div>
  );
};

export default SearchBar;
