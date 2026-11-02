import React from "react";
import { formatPrice } from "../../utils/format";
import { SummaryList, SummaryRow, TotalRow, VatNote } from "./OrderSummaryStyles";

const deliveryLabel = (totals) => {
  if (totals.delivery === null) return totals.freeShipping ? "Gratis" : "Wybierzesz w kasie";
  return totals.delivery === 0 ? "Gratis" : formatPrice(totals.delivery);
};

/**
 * Order amounts breakdown shared by the cart, checkout and order confirmation.
 * `totals` comes from computeTotals() in data/checkout.js.
 */
export const OrderSummary = ({ totals, promoCode }) => (
  <>
    <SummaryList>
      <SummaryRow>
        <dt>Wartość produktów</dt>
        <dd>{formatPrice(totals.subtotal)}</dd>
      </SummaryRow>
      {totals.discount > 0 && (
        <SummaryRow $highlight>
          <dt>Rabat ({promoCode})</dt>
          <dd>−{formatPrice(totals.discount)}</dd>
        </SummaryRow>
      )}
      <SummaryRow>
        <dt>Dostawa</dt>
        <dd>{deliveryLabel(totals)}</dd>
      </SummaryRow>
      {totals.paymentFee > 0 && (
        <SummaryRow>
          <dt>Opłata za pobranie</dt>
          <dd>{formatPrice(totals.paymentFee)}</dd>
        </SummaryRow>
      )}
      <TotalRow>
        <dt>Do zapłaty</dt>
        <dd>{formatPrice(totals.total)}</dd>
      </TotalRow>
    </SummaryList>
    <VatNote>Ceny zawierają podatek VAT</VatNote>
  </>
);
