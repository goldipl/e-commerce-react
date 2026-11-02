import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import { BASE_PATH, getProductById } from "../../data/catalog";
import { pluralize } from "../../utils/format";
import { usePageTitle } from "../../hooks/usePageTitle";
import { ItemShop } from "../../components/item/ItemShop/ItemShop";
import { ProductGrid } from "../../components/item/ItemShop/ItemShopStyles";
import { ButtonLink, EmptyState, PageTitle } from "../../components/ui";

export const Wishlist = () => {
  const { wishlist } = useContext(ShopContext);
  const products = wishlist.map(getProductById).filter(Boolean);

  usePageTitle("Ulubione");

  return (
    <div className="wrapper">
      <PageTitle>
        Ulubione
        {products.length > 0 && (
          <small>
            {products.length} {pluralize(products.length, "produkt", "produkty", "produktów")}
          </small>
        )}
      </PageTitle>
      {products.length === 0 ? (
        <EmptyState
          icon={AiOutlineHeart}
          title="Nie masz jeszcze ulubionych produktów"
          action={<ButtonLink to={`${BASE_PATH}/`}>Przeglądaj produkty</ButtonLink>}
        >
          Kliknij serduszko przy produkcie, aby zapisać go na później.
        </EmptyState>
      ) : (
        <ProductGrid>
          {products.map((item) => (
            <ItemShop key={item.id} {...item} />
          ))}
        </ProductGrid>
      )}
    </div>
  );
};
