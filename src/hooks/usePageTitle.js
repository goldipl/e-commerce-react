import { useEffect } from "react";

const SHOP_NAME = "BuyIt";

export const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SHOP_NAME}` : `${SHOP_NAME} — gry, książki i t-shirty`;
  }, [title]);
};
