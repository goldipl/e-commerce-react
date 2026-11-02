import React from "react";
import { DELIVERY_METHODS, FREE_SHIPPING_THRESHOLD, PAYMENT_METHODS } from "../../data/checkout";
import { formatPrice } from "../../utils/format";

// Help center content. Delivery and payment tables are built from data/checkout.js,
// so prices here always match what the checkout charges.
export const HELP_TOPICS = [
  {
    slug: "delivery",
    title: "Dostawa i płatności",
    content: (
      <>
        <p>
          Zamówienia złożone w dni robocze do godziny 14:00 wysyłamy tego samego dnia. Przy
          zamówieniach od {formatPrice(FREE_SHIPPING_THRESHOLD)} dostawa paczkomatem lub kurierem jest
          darmowa.
        </p>
        <h2>Sposoby dostawy</h2>
        <table>
          <tbody>
            {DELIVERY_METHODS.map((method) => (
              <tr key={method.id}>
                <th scope="row">{method.label}</th>
                <td>{method.description}</td>
                <td>{method.price === 0 ? "Bezpłatnie" : formatPrice(method.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Metody płatności</h2>
        <table>
          <tbody>
            {PAYMENT_METHODS.map((method) => (
              <tr key={method.id}>
                <th scope="row">{method.label}</th>
                <td>{method.description}</td>
                <td>{method.fee > 0 ? `+${formatPrice(method.fee)}` : "Bez opłat"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  {
    slug: "returns",
    title: "Zwroty i reklamacje",
    content: (
      <>
        <p>
          Masz 30 dni od otrzymania przesyłki na zwrot produktu bez podawania przyczyny. Zwracany
          towar powinien być nieużywany, a gry i książki — w oryginalnym, nienaruszonym opakowaniu
          foliowym.
        </p>
        <h2>Jak zwrócić produkt?</h2>
        <ol>
          <li>Napisz do nas, podając numer zamówienia i produkty, które chcesz zwrócić.</li>
          <li>Otrzymasz bezpłatną etykietę zwrotną do paczkomatu.</li>
          <li>Pieniądze zwrócimy w ciągu 14 dni od otrzymania przesyłki, tą samą metodą płatności.</li>
        </ol>
        <h2>Wymiana rozmiaru</h2>
        <p>
          Jeśli t-shirt nie pasuje, wymienimy go na inny rozmiar bez dodatkowych kosztów — wystarczy
          zaznaczyć to w zgłoszeniu zwrotu.
        </p>
        <h2>Reklamacje</h2>
        <p>
          Na wszystkie produkty obowiązuje rękojmia. Reklamację rozpatrujemy w ciągu 14 dni od jej
          otrzymania.
        </p>
      </>
    ),
  },
  {
    slug: "contact",
    title: "Kontakt",
    content: (
      <>
        <p>Chętnie pomożemy w wyborze produktu i odpowiemy na pytania o zamówienie.</p>
        <table>
          <tbody>
            <tr>
              <th scope="row">E-mail</th>
              <td>kontakt@buyit.example</td>
            </tr>
            <tr>
              <th scope="row">Godziny pracy</th>
              <td>Poniedziałek–piątek, 9:00–17:00</td>
            </tr>
            <tr>
              <th scope="row">Czas odpowiedzi</th>
              <td>Do 24 godzin w dni robocze</td>
            </tr>
          </tbody>
        </table>
        <p>BuyIt to sklep demonstracyjny — powyższe dane kontaktowe są przykładowe.</p>
      </>
    ),
  },
  {
    slug: "terms",
    title: "Regulamin",
    content: (
      <>
        <p>
          BuyIt jest projektem demonstracyjnym. Zamówienia składane w sklepie nie są realizowane,
          płatności nie są pobierane, a dane z formularza zamówienia są zapisywane wyłącznie w
          pamięci Twojej przeglądarki (localStorage) i nigdzie nie są wysyłane.
        </p>
        <h2>Ceny</h2>
        <p>
          Ceny podane są w złotych polskich i zawierają podatek VAT. Przy produktach w promocji
          podajemy najniższą cenę z 30 dni przed obniżką.
        </p>
        <h2>Kody rabatowe</h2>
        <p>
          Kod BUYIT10 obniża wartość produktów o 10%, a kod DOSTAWA0 daje darmową dostawę. W jednym
          zamówieniu można użyć jednego kodu.
        </p>
      </>
    ),
  },
];
