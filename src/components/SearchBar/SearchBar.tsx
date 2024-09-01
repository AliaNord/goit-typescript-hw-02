import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import React from "react";
import { SearchBarProps } from "./SearchBar.types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const formSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { value } = (e.target as HTMLFormElement).elements.namedItem('search') as HTMLInputElement;
    if (!value) {
      toast.error("This didn't work.");
      return
    }
    onSubmit(value);
  };

  return (
    <form className={s.searchForm} onSubmit={formSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
