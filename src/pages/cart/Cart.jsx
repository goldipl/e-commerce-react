import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import { BASE_PATH, getBestsellers } from "../../data/catalog";
import { FREE_SHIPPING_THRESHOLD, computeTotals } from "../../data/checkout";
import { formatPrice, pluralize } from "../../utils/format";
import { usePageTitle } from "../../hooks/usePageTitle";
import { ItemCartView } from "../../components/item/ItemCart/ItemCartView";
import { ItemShop } from "../../components/item/ItemShop/ItemShop";
import { ProductGrid } from "../../components/item/ItemShop/ItemShopStyles";
import { OrderSummary } from "../../components/summary/OrderSummary";
import { Button, ButtonLink, Card, EmptyState, PageTitle } from "../../components/ui";
import {
  CartLayout,
  CartList,
  CartListHeader,
  SummaryCard,
  ShippingProgress,
  PromoForm,
  PromoApplied,
  PromoMessage,
  SecondarySection,
} from "./CartStyles";

export const Cart = () => {
  const {
    cartItemsDetailed,
    totalQuantity,
    cartTotalPrice,
    clearCart,
    promoCode,
    applyPromoCode,
    removePromoCode,
  } = useContext(ShopContext);
  const [codeInput, setCodeInput] = useState("");
  const [promoFeedback, setPromoFeedback] = useState(null);
  const navigate = useNavigate();

  usePageTitle("Koszyk");

  if (cartItemsDetailed.length === 0) {
    return (
      <div className="wrapper">
        <PageTitle>Koszyk</PageTitle>
        <EmptyState
          icon={AiOutlineShoppingCart}
          title="Twój koszyk jest pusty"
          action={<ButtonLink to={`${BASE_PATH}/`}>Zacznij zakupy</ButtonLink>}
        >
          Dodaj produkty, które Ci się spodobały — zapamiętamy je, nawet jeśli zamkniesz przeglądarkę.
        </EmptyState>
        <SecondarySection>
          <h2>Bestsellery</h2>
          <ProductGrid>
            {getBestsellers(5).map((item) => (
              <ItemShop key={item.id} {...item} />
            ))}
          </ProductGrid>
        </SecondarySection>
      </div>
    );
  }

  const totals = computeTotals({ subtotal: cartTotalPrice, promoCode });
  const shippingProgress = Math.min(100, (cartTotalPrice / FREE_SHIPPING_THRESHOLD) * 100);

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (!codeInput.trim()) return;
    const result = applyPromoCode(codeInput);
    setPromoFeedback(result);
    if (result.ok) setCodeInput("");
  };

  return (
    <div className="wrapper">
      <PageTitle>
        Koszyk
        <small>
          {totalQuantity} {pluralize(totalQuantity, "produkt", "produkty", "produktów")}
        </small>
      </PageTitle>

      <CartLayout>
        <Card>
          <CartListHeader>
            <h2>Produkty</h2>
            <Button type="button" $variant="ghost" $size="sm" onClick={clearCart}>
              Wyczyść koszyk
            </Button>
          </CartListHeader>
          <CartList>
            {cartItemsDetailed.map((item) => (
              <ItemCartView key={item.lineKey} {...item} />
            ))}
          </CartList>
        </Card>

        <SummaryCard as="aside" aria-label="Podsumowanie koszyka">
          <h2>Podsumowanie</h2>

          <ShippingProgress $done={totals.freeShipping}>
            <p>
              {totals.freeShipping ? (
                <strong>Masz darmową dostawę!</strong>
              ) : (
                <>
                  Brakuje <strong>{formatPrice(totals.missingForFreeShipping)}</strong> do darmowej dostawy
                </>
              )}
            </p>
            <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(shippingProgress)}>
              <span style={{ width: `${totals.freeShipping ? 100 : shippingProgress}%` }} />
            </div>
          </ShippingProgress>

          <OrderSummary totals={totals} promoCode={promoCode} />

          {promoCode ? (
            <PromoApplied>
              <span>
                Kod <strong>{promoCode}</strong> aktywny
              </span>
              <button
                type="button"
                onClick={() => {
                  removePromoCode();
                  setPromoFeedback(null);
                }}
                aria-label="Usuń kod rabatowy"
              >
                <AiOutlineClose />
              </button>
            </PromoApplied>
          ) : (
            <PromoForm onSubmit={handlePromoSubmit}>
              <label htmlFor="promo-code">Kod rabatowy</label>
              <div>
                <input
                  id="promo-code"
                  type="text"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  placeholder="np. BUYIT10"
                  autoComplete="off"
                />
                <Button type="submit" $variant="secondary" $size="sm">
                  Zastosuj
                </Button>
              </div>
            </PromoForm>
          )}
          {promoFeedback && (
            <PromoMessage $ok={promoFeedback.ok} role="status">
              {promoFeedback.message}
            </PromoMessage>
          )}

          <Button type="button" $block onClick={() => navigate(`${BASE_PATH}/checkout`)}>
            Przejdź do kasy
            <AiOutlineArrowRight />
          </Button>
          <ButtonLink to={`${BASE_PATH}/`} $variant="secondary" $block>
            Kontynuuj zakupy
          </ButtonLink>
        </SummaryCard>
      </CartLayout>
    </div>
  );
};
