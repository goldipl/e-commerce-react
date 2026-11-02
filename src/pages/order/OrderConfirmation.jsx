import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import { BASE_PATH } from "../../data/catalog";
import { getDeliveryMethod, getPaymentMethod } from "../../data/checkout";
import { formatDate, formatPrice } from "../../utils/format";
import { usePageTitle } from "../../hooks/usePageTitle";
import { OrderSummary } from "../../components/summary/OrderSummary";
import { ButtonLink, Card, EmptyState } from "../../components/ui";
import { SuccessHeader, OrderGrid, InfoList, ItemsTable } from "./OrderConfirmationStyles";

export const OrderConfirmation = () => {
  const { number } = useParams();
  const { getOrder } = useContext(ShopContext);
  const order = getOrder(number);

  usePageTitle(order ? `Zamówienie ${order.number}` : "Nie znaleziono zamówienia");

  if (!order) {
    return (
      <div className="wrapper">
        <EmptyState
          icon={AiOutlineQuestionCircle}
          title="Nie znaleziono zamówienia"
          action={<ButtonLink to={`${BASE_PATH}/`}>Wróć do sklepu</ButtonLink>}
        >
          Zamówienie {number} nie istnieje albo zostało złożone w innej przeglądarce.
        </EmptyState>
      </div>
    );
  }

  const { customer } = order;
  const delivery = getDeliveryMethod(order.deliveryId);
  const payment = getPaymentMethod(order.paymentId);

  return (
    <div className="wrapper">
      <SuccessHeader>
        <AiOutlineCheckCircle aria-hidden="true" />
        <h1>Dziękujemy za zamówienie!</h1>
        <p>
          Numer zamówienia: <strong>{order.number}</strong>
        </p>
        <p>
          Potwierdzenie wysłalibyśmy na adres <strong>{customer.email}</strong> — w wersji
          demonstracyjnej zamówienie jest zapisane tylko w Twojej przeglądarce.
        </p>
      </SuccessHeader>

      <OrderGrid>
        <Card>
          <h2>Zamówione produkty</h2>
          <ItemsTable>
            <tbody>
              {order.items.map((item) => (
                <tr key={`${item.id}-${item.size || ""}`}>
                  <td>
                    <img src={item.itemImage} alt="" width="44" height="58" />
                  </td>
                  <td>
                    {item.itemName}
                    {item.size && <small>Rozmiar: {item.size}</small>}
                  </td>
                  <td>{item.quantity} szt.</td>
                  <td>{formatPrice(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </ItemsTable>
          <OrderSummary totals={order.totals} promoCode={order.promoCode} />
        </Card>

        <Card as="aside">
          <h2>Szczegóły</h2>
          <InfoList>
            <dt>Data złożenia</dt>
            <dd>{formatDate(order.createdAt)}</dd>
            <dt>Zamawiający</dt>
            <dd>
              {customer.firstName} {customer.lastName}
              <br />
              {customer.phone}
            </dd>
            <dt>Dostawa</dt>
            <dd>
              {delivery?.label}
              {order.deliveryId === "courier" && (
                <>
                  <br />
                  {customer.street}, {customer.postalCode} {customer.city}
                </>
              )}
              {order.deliveryId === "parcel-locker" && (
                <>
                  <br />
                  Paczkomat {customer.lockerCode.toUpperCase()}
                </>
              )}
            </dd>
            <dt>Płatność</dt>
            <dd>{payment?.label}</dd>
            {order.notes && (
              <>
                <dt>Uwagi</dt>
                <dd>{order.notes}</dd>
              </>
            )}
          </InfoList>
          <ButtonLink to={`${BASE_PATH}/`} $block>
            Kontynuuj zakupy
          </ButtonLink>
        </Card>
      </OrderGrid>
    </div>
  );
};
