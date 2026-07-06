import React, { useMemo } from "react";
import { ShopTitle, ShopProducts, SeoTextContainer } from "./SeoTextStyles";
import { TSHIRTS } from "../../../data/tshirts";
import { ItemShop } from "../../item/ItemShop/ItemShop";

export const TopTshirts = () => {
  const randomFiveTshirts = useMemo(
    () => [...TSHIRTS].sort(() => Math.random() - 0.5).slice(0, 5),
    [],
  );

  return (
    <div className="wrapper">
      <ShopTitle>
        <h1>Top 5 T-Shirts</h1>
      </ShopTitle>
      <ShopProducts>
        {randomFiveTshirts.map((item) => (
          <ItemShop key={item.id} {...item} />
        ))}
      </ShopProducts>
      <SeoTextContainer>
        <p>
          Step up your style with our vibrant collection of t-shirts. Looking to
          revamp your wardrobe? Dive into our exclusive store and discover a
          world of trendy tees that speak volumes about your personality — from
          quirky prints to timeless classics, we've got something for everyone.
        </p>
        <ol>
          <li>
            <strong>Trendy designs.</strong> Stay ahead of the fashion curve
            with a curated selection guaranteed to turn heads, whether you're
            into bold statements or subtle elegance.
          </li>
          <li>
            <strong>Premium quality.</strong> Made with the finest materials and
            crafted to perfection — stylish and incredibly comfortable, wear
            after wear.
          </li>
          <li>
            <strong>Unbeatable deals.</strong> Enjoy great discounts and offers
            on your favorite t-shirts without breaking the bank.
          </li>
          <li>
            <strong>Fast shipping.</strong> Lightning-fast delivery straight to
            your doorstep, so you can rock your new look sooner.
          </li>
          <li>
            <strong>Shop with confidence.</strong> Secure payment options and
            hassle-free returns make shopping online easy and enjoyable.
          </li>
        </ol>
        <p>
          Explore our store today and unleash your style with our collection of
          t-shirts.
        </p>
      </SeoTextContainer>
    </div>
  );
};
