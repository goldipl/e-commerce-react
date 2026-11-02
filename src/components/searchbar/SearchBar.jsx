import React, { useRef, useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BASE_PATH, getProductMeta, productPath, searchProducts } from "../../data/catalog";
import { formatPrice } from "../../utils/format";
import {
  SearchWrapper,
  SearchInputContainer,
  SearchInput,
  ClearBtn,
  ResultsDropdown,
  ResultItem,
  ResultText,
  NoResults,
  ShowAllLink,
} from "./SearchBarStyles";

const SUGGESTIONS_LIMIT = 6;

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const allResults = useMemo(() => searchProducts(query), [query]);
  const suggestions = allResults.slice(0, SUGGESTIONS_LIMIT);

  // Close the dropdown when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close the dropdown after navigating to another page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setActiveIndex(-1);
    setIsOpen(true);
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
  };

  const goToSearchPage = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    navigate(`${BASE_PATH}/search?q=${encodeURIComponent(trimmed)}`);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      navigate(productPath(suggestions[activeIndex].id));
      setQuery("");
      setIsOpen(false);
      return;
    }
    goToSearchPage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <SearchWrapper ref={wrapperRef} role="search">
      <form onSubmit={handleSubmit}>
        <SearchInputContainer>
          <AiOutlineSearch aria-hidden="true" />
          <SearchInput
            type="search"
            placeholder="Szukaj gier, książek, t-shirtów..."
            value={query}
            onChange={handleChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            aria-label="Szukaj produktów"
            aria-expanded={showDropdown}
            aria-controls="search-suggestions"
            aria-autocomplete="list"
            role="combobox"
          />
          {query && (
            <ClearBtn type="button" onClick={handleClear} aria-label="Wyczyść wyszukiwanie">
              <AiOutlineClose />
            </ClearBtn>
          )}
        </SearchInputContainer>
      </form>

      {showDropdown && (
        <ResultsDropdown id="search-suggestions" role="listbox">
          {suggestions.length === 0 ? (
            <NoResults>Brak wyników dla „{query.trim()}”</NoResults>
          ) : (
            <>
              {suggestions.map((item, index) => (
                <ResultItem
                  key={item.id}
                  to={productPath(item.id)}
                  onClick={() => setQuery("")}
                  role="option"
                  aria-selected={index === activeIndex}
                  $active={index === activeIndex}
                >
                  <img src={item.itemImage} alt="" />
                  <ResultText>
                    <span>{item.itemName}</span>
                    <small>{getProductMeta(item)}</small>
                  </ResultText>
                  <strong>{formatPrice(item.price)}</strong>
                </ResultItem>
              ))}
              <ShowAllLink type="button" onClick={goToSearchPage}>
                Pokaż wszystkie wyniki ({allResults.length})
              </ShowAllLink>
            </>
          )}
        </ResultsDropdown>
      )}
    </SearchWrapper>
  );
};
