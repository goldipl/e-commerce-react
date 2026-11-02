import React, { useContext, useRef, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { AiOutlineLock, AiOutlineInfoCircle } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";
import { BASE_PATH } from "../../data/catalog";
import {
  DELIVERY_METHODS,
  PAYMENT_METHODS,
  computeTotals,
  getDeliveryPrice,
  PROMO_CODES,
} from "../../data/checkout";
import { formatPrice } from "../../utils/format";
import { usePageTitle } from "../../hooks/usePageTitle";
import { OrderSummary } from "../../components/summary/OrderSummary";
import { Breadcrumbs, Button, Card, PageTitle } from "../../components/ui";
import {
  CheckoutLayout,
  FormColumn,
  FieldGrid,
  Field,
  OptionList,
  OptionCard,
  CheckboxField,
  SummaryCard,
  SummaryItems,
  DemoNotice,
  StepNumber,
} from "./CheckoutStyles";

const INITIAL_FORM = {
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
  lockerCode: "",
  notes: "",
  acceptTerms: false,
  newsletter: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^(\+48)?\s?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/;
const POSTAL_RE = /^\d{2}-\d{3}$/;
const LOCKER_RE = /^[A-Z]{3}\d{2,3}[A-Z]{0,2}$/i;

// Validation rules depend on the delivery method: the courier needs an address,
// the parcel locker needs a locker code, and pickup needs only contact details.
const validate = (form, deliveryId) => {
  const errors = {};
  if (!EMAIL_RE.test(form.email.trim())) errors.email = "Podaj poprawny adres e-mail";
  if (!PHONE_RE.test(form.phone.trim())) errors.phone = "Podaj 9-cyfrowy numer telefonu";
  if (!form.firstName.trim()) errors.firstName = "Podaj imię";
  if (!form.lastName.trim()) errors.lastName = "Podaj nazwisko";

  if (deliveryId === "courier") {
    if (!form.street.trim()) errors.street = "Podaj ulicę i numer";
    if (!POSTAL_RE.test(form.postalCode.trim())) errors.postalCode = "Format: 00-000";
    if (!form.city.trim()) errors.city = "Podaj miejscowość";
  }
  if (deliveryId === "parcel-locker" && !LOCKER_RE.test(form.lockerCode.trim())) {
    errors.lockerCode = "Podaj kod paczkomatu, np. WAW01A";
  }
  if (!form.acceptTerms) errors.acceptTerms = "Zaakceptuj regulamin, aby złożyć zamówienie";
  return errors;
};

export const Checkout = () => {
  const { cartItemsDetailed, cartTotalPrice, promoCode, placeOrder } = useContext(ShopContext);
  const navigate = useNavigate();
  const formRef = useRef(null);
  const orderPlacedRef = useRef(false);

  const [form, setForm] = useState(INITIAL_FORM);
  const [deliveryId, setDeliveryId] = useState(DELIVERY_METHODS[0].id);
  const [paymentId, setPaymentId] = useState(PAYMENT_METHODS[0].id);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  usePageTitle("Kasa");

  if (cartItemsDetailed.length === 0 && !orderPlacedRef.current) {
    return <Navigate to={`${BASE_PATH}/cart`} replace />;
  }

  const errors = validate(form, deliveryId);
  const showError = (name) => (submitted || touched[name]) && errors[name];
  const totals = computeTotals({ subtotal: cartTotalPrice, promoCode, deliveryId, paymentId });
  const availablePayments = PAYMENT_METHODS.filter((m) => !m.onlyFor || m.onlyFor.includes(deliveryId));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const handleDeliveryChange = (id) => {
    setDeliveryId(id);
    const payment = PAYMENT_METHODS.find((m) => m.id === paymentId);
    if (payment.onlyFor && !payment.onlyFor.includes(id)) setPaymentId(PAYMENT_METHODS[0].id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const firstError = Object.keys(errors)[0];
    if (firstError) {
      formRef.current?.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }

    orderPlacedRef.current = true;
    const { acceptTerms, notes, ...customer } = form;
    const order = placeOrder({ customer, deliveryId, paymentId, notes: notes.trim() });
    navigate(`${BASE_PATH}/order/${order.number}`, { replace: true });
  };

  const field = (name, label, props = {}) => (
    <Field $invalid={Boolean(showError(name))} $wide={props.wide}>
      <label htmlFor={`checkout-${name}`}>{label}</label>
      <input
        id={`checkout-${name}`}
        name={name}
        value={form[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={Boolean(showError(name))}
        aria-describedby={showError(name) ? `checkout-${name}-error` : undefined}
        type={props.type || "text"}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        placeholder={props.placeholder}
      />
      {showError(name) && <span id={`checkout-${name}-error`}>{errors[name]}</span>}
    </Field>
  );

  return (
    <div className="wrapper">
      <Breadcrumbs items={[["Koszyk", `${BASE_PATH}/cart`], ["Dostawa i płatność"]]} />
      <PageTitle>Dostawa i płatność</PageTitle>

      <CheckoutLayout as="form" ref={formRef} onSubmit={handleSubmit} noValidate>
        <FormColumn>
          <Card>
            <h2>
              <StepNumber>1</StepNumber>Dane kontaktowe
            </h2>
            <FieldGrid>
              {field("email", "E-mail", { type: "email", autoComplete: "email", wide: true })}
              {field("firstName", "Imię", { autoComplete: "given-name" })}
              {field("lastName", "Nazwisko", { autoComplete: "family-name" })}
              {field("phone", "Telefon", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "500 600 700" })}
            </FieldGrid>
          </Card>

          <Card>
            <h2>
              <StepNumber>2</StepNumber>Sposób dostawy
            </h2>
            <OptionList role="radiogroup" aria-label="Sposób dostawy">
              {DELIVERY_METHODS.map((method) => {
                const price = getDeliveryPrice(method, cartTotalPrice, PROMO_CODES[promoCode]);
                return (
                  <OptionCard key={method.id} $active={deliveryId === method.id}>
                    <input
                      type="radio"
                      name="delivery"
                      value={method.id}
                      checked={deliveryId === method.id}
                      onChange={() => handleDeliveryChange(method.id)}
                    />
                    <span>
                      <strong>{method.label}</strong>
                      <small>{method.description}</small>
                    </span>
                    <em>{price === 0 ? "Gratis" : formatPrice(price)}</em>
                  </OptionCard>
                );
              })}
            </OptionList>

            {deliveryId === "courier" && (
              <FieldGrid>
                {field("street", "Ulica i numer", { autoComplete: "street-address", wide: true })}
                {field("postalCode", "Kod pocztowy", { autoComplete: "postal-code", inputMode: "numeric", placeholder: "00-000" })}
                {field("city", "Miejscowość", { autoComplete: "address-level2" })}
              </FieldGrid>
            )}
            {deliveryId === "parcel-locker" && (
              <FieldGrid>{field("lockerCode", "Kod paczkomatu", { placeholder: "np. WAW01A", wide: true })}</FieldGrid>
            )}
          </Card>

          <Card>
            <h2>
              <StepNumber>3</StepNumber>Płatność
            </h2>
            <OptionList role="radiogroup" aria-label="Metoda płatności">
              {availablePayments.map((method) => (
                <OptionCard key={method.id} $active={paymentId === method.id}>
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentId === method.id}
                    onChange={() => setPaymentId(method.id)}
                  />
                  <span>
                    <strong>{method.label}</strong>
                    <small>{method.description}</small>
                  </span>
                  <em>{method.fee > 0 ? `+${formatPrice(method.fee)}` : ""}</em>
                </OptionCard>
              ))}
            </OptionList>
          </Card>

          <Card>
            <h2>
              <StepNumber>4</StepNumber>Uwagi i zgody
            </h2>
            <Field $wide>
              <label htmlFor="checkout-notes">Uwagi do zamówienia (opcjonalnie)</label>
              <textarea id="checkout-notes" name="notes" rows={3} value={form.notes} onChange={handleChange} />
            </Field>
            <CheckboxField $invalid={Boolean(showError("acceptTerms"))}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={form.acceptTerms}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(showError("acceptTerms"))}
              />
              <span>
                Akceptuję <Link to={`${BASE_PATH}/help/terms`}>regulamin sklepu</Link> i zasady zwrotów. *
                {showError("acceptTerms") && <em>{errors.acceptTerms}</em>}
              </span>
            </CheckboxField>
            <CheckboxField>
              <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
              <span>Chcę otrzymywać informacje o nowościach i promocjach.</span>
            </CheckboxField>
          </Card>
        </FormColumn>

        <SummaryCard as="aside" aria-label="Podsumowanie zamówienia">
          <h2>Twoje zamówienie</h2>
          <SummaryItems>
            {cartItemsDetailed.map((item) => (
              <li key={item.lineKey}>
                <img src={item.itemImage} alt="" width="44" height="58" />
                <span>
                  {item.itemName}
                  <small>
                    {item.quantity} × {formatPrice(item.price)}
                    {item.size && ` · ${item.size}`}
                  </small>
                </span>
                <strong>{formatPrice(item.summaryPrice)}</strong>
              </li>
            ))}
          </SummaryItems>
          <OrderSummary totals={totals} promoCode={promoCode} />
          <Button type="submit" $block>
            <AiOutlineLock />
            Zamawiam i płacę {formatPrice(totals.total)}
          </Button>
          <DemoNotice>
            <AiOutlineInfoCircle aria-hidden="true" />
            To sklep demonstracyjny — zamówienie zostanie zapisane tylko w Twojej przeglądarce, żadna
            płatność nie zostanie pobrana.
          </DemoNotice>
        </SummaryCard>
      </CheckoutLayout>
    </div>
  );
};
