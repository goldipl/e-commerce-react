import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BASE_PATH } from "../../data/catalog";
import { usePageTitle } from "../../hooks/usePageTitle";
import { ButtonLink, EmptyState } from "../../components/ui";

export const NotFound = () => {
  usePageTitle("Nie znaleziono strony");

  return (
    <div className="wrapper">
      <EmptyState
        icon={AiOutlineCompass}
        title="Nie znaleziono strony"
        action={<ButtonLink to={`${BASE_PATH}/`}>Wróć do strony głównej</ButtonLink>}
      >
        Strona, której szukasz, nie istnieje lub została przeniesiona.
      </EmptyState>
    </div>
  );
};
