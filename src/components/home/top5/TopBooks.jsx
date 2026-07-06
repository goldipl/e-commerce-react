import React, { useMemo } from "react";
import { ShopTitle, ShopProducts, SeoTextContainer } from "./SeoTextStyles";
import { BOOKS } from "../../../data/books";
import { ItemShop } from "../../item/ItemShop/ItemShop";

export const TopBooks = () => {
  const randomFiveBooks = useMemo(
    () => [...BOOKS].sort(() => Math.random() - 0.5).slice(0, 5),
    [],
  );

  return (
    <div className="wrapper">
      <ShopTitle>
        <h1>Top 5 Books</h1>
      </ShopTitle>
      <ShopProducts>
        {randomFiveBooks.map((item) => (
          <ItemShop key={item.id} {...item} />
        ))}
      </ShopProducts>
      <SeoTextContainer>
        <p>
          Discover a world of wonderful stories at our online store, BuyIt!
          Immerse yourself in the fascinating world of literature, where every
          page holds extraordinary adventures and inspiring content. From
          bestsellers to classics of world literature — you'll find everything
          you need to indulge in reading. Don't wait any longer, buy today at
          BuyIt and start your literary journey.
        </p>
      </SeoTextContainer>
    </div>
  );
};
