import React, { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import {
  SearchWrapper,
  SearchInputContainer,
  SearchInput,
  ClearBtn,
  ResultsDropdown,
  ResultItem,
  ResultText,
  NoResults,
} from "./SearchBarStyles";

export const SearchBar = () => {
  const { searchQuery, setSearchQuery, searchResults } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Zamykanie dropdownu po kliknięciu poza komponentem
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleClear = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      navigate(`/e-commerce-react/product/${searchResults[0].id}`);
      handleResultClick();
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const showDropdown = isOpen && searchQuery.trim().length > 0;

  return (
    <SearchWrapper ref={wrapperRef}>
      <SearchInputContainer>
        <AiOutlineSearch />
        <SearchInput
          type="text"
          placeholder="Szukaj produktów..."
          value={searchQuery}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="Szukaj produktów"
        />
        {searchQuery && (
          <ClearBtn onClick={handleClear} aria-label="Wyczyść wyszukiwanie">
            <AiOutlineClose />
          </ClearBtn>
        )}
      </SearchInputContainer>

      {showDropdown && (
        <ResultsDropdown>
          {searchResults.length === 0 ? (
            <NoResults>Brak wyników dla „{searchQuery}”</NoResults>
          ) : (
            searchResults.map((item) => (
              <ResultItem
                key={item.id}
                to={`/e-commerce-react/product/${item.id}`}
                onClick={handleResultClick}
              >
                <img src={item.itemImage} alt={item.itemName} />
                <ResultText>
                  <span>{item.itemName}</span>
                  <span>${item.price.toFixed(2)}</span>
                </ResultText>
              </ResultItem>
            ))
          )}
        </ResultsDropdown>
      )}
    </SearchWrapper>
  );
};
