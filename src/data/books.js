import book01 from './../assets/img/books/Book_01.jpg'
import book02 from './../assets/img/books/Book_02.jpg'
import book03 from './../assets/img/books/Book_03.jpg'
import book04 from './../assets/img/books/Book_04.jpg'
import book05 from './../assets/img/books/Book_05.jpg'
import book06 from './../assets/img/books/Book_06.jpg'
import book07 from './../assets/img/books/Book_07.jpg'
import book08 from './../assets/img/books/Book_08.jpg'
import book09 from './../assets/img/books/Book_09.jpg'
import book10 from './../assets/img/books/Book_10.jpg'
import book11 from './../assets/img/books/Book_11.jpg'
import book12 from './../assets/img/books/Book_12.jpg'

// `author` is only set where the author is known — otherwise the product card
// falls back to showing the book's topic.
export const BOOKS = [
    {
        id: 101,
        category: "books",
        itemName: "JavaScript od podstaw",
        price: 45.00,
        itemImage: book01,
        topic: "JavaScript",
        stock: 24,
        addedAt: "2024-02-10",
        isBestseller: true,
        description:
            "Przystępne wprowadzenie do JavaScriptu dla osób, które dopiero zaczynają przygodę z programowaniem. Zmienne, funkcje, obiekty, praca z DOM i obsługa zdarzeń — krok po kroku, na praktycznych przykładach.",
    },
    {
        id: 102,
        category: "books",
        itemName: "JavaScript. Przewodnik",
        author: "David Flanagan",
        price: 40.00,
        oldPrice: 49.00,
        itemImage: book02,
        topic: "JavaScript",
        stock: 15,
        addedAt: "2024-01-18",
        isBestseller: true,
        description:
            "Klasyczne, wyczerpujące kompendium wiedzy o języku JavaScript. Omawia składnię, typy, obiekty, klasy, moduły, programowanie asynchroniczne oraz API dostępne w przeglądarce i w Node.js.",
    },
    {
        id: 103,
        category: "books",
        itemName: "JavaScript. Zaawansowane zagadnienia",
        price: 40.00,
        itemImage: book03,
        topic: "JavaScript",
        stock: 9,
        addedAt: "2023-11-05",
        description:
            "Dla programistów, którzy znają podstawy i chcą lepiej zrozumieć, jak działa JavaScript pod maską: domknięcia, prototypy, kontekst `this`, pętla zdarzeń i wzorce projektowe.",
    },
    {
        id: 104,
        category: "books",
        itemName: "Zrozumieć JavaScript. Wydanie III",
        price: 155.00,
        itemImage: book04,
        topic: "JavaScript",
        stock: 4,
        addedAt: "2024-03-02",
        isNew: true,
        description:
            "Obszerne opracowanie mechanizmów języka JavaScript — od typów i koercji, przez zakresy i domknięcia, po asynchroniczność. Książka dla tych, którzy chcą wiedzieć nie tylko jak, ale też dlaczego.",
    },
    {
        id: 105,
        category: "books",
        itemName: "JS, jakiego jeszcze nie znasz",
        author: "Kyle Simpson",
        price: 54.99,
        itemImage: book05,
        topic: "JavaScript",
        stock: 18,
        addedAt: "2023-09-14",
        isBestseller: true,
        description:
            "Seria, która pomogła tysiącom programistów naprawdę zrozumieć JavaScript. Autor rozkłada na czynniki pierwsze zakresy, domknięcia, obiekty i typy, rozwiewając popularne mity o języku.",
    },
    {
        id: 106,
        category: "books",
        itemName: "Java. Zadania z programowania",
        price: 48.99,
        itemImage: book06,
        topic: "Java",
        stock: 11,
        addedAt: "2023-06-21",
        description:
            "Zbiór zadań z rozwiązaniami, który pozwala utrwalić podstawy Javy w praktyce: od instrukcji sterujących i tablic, przez klasy i obiekty, po kolekcje i obsługę wyjątków.",
    },
    {
        id: 107,
        category: "books",
        itemName: "Java. Efektywne programowanie",
        author: "Joshua Bloch",
        price: 99.99,
        itemImage: book07,
        topic: "Java",
        stock: 7,
        addedAt: "2023-10-03",
        isBestseller: true,
        description:
            "Zbiór sprawdzonych zasad pisania czytelnego, wydajnego i bezpiecznego kodu w Javie. Każda rada jest krótka, konkretna i poparta przykładami — pozycja obowiązkowa dla każdego programisty Javy.",
    },
    {
        id: 108,
        category: "books",
        itemName: "Java w 24 godziny",
        author: "Rogers Cadenhead",
        price: 49.50,
        oldPrice: 59.90,
        itemImage: book08,
        topic: "Java",
        stock: 20,
        addedAt: "2023-04-12",
        description:
            "Kurs podzielony na 24 jednogodzinne lekcje. Pozwala w krótkim czasie poznać składnię Javy, programowanie obiektowe i najważniejsze elementy biblioteki standardowej.",
    },
    {
        id: 109,
        category: "books",
        itemName: "Java. Techniki zaawansowane. Wydanie XI",
        author: "Cay S. Horstmann",
        price: 89.50,
        itemImage: book09,
        topic: "Java",
        stock: 3,
        addedAt: "2024-02-27",
        isNew: true,
        description:
            "Drugi tom klasycznego podręcznika Javy, poświęcony zaawansowanym zagadnieniom: strumieniom, wejściu-wyjściu, XML, sieciom, bazom danych, bezpieczeństwu i internacjonalizacji.",
    },
    {
        id: 110,
        category: "books",
        itemName: "Język C++. Szkoła programowania. Wydanie VI",
        author: "Stephen Prata",
        price: 59.99,
        oldPrice: 79.00,
        itemImage: book10,
        topic: "C++",
        stock: 13,
        addedAt: "2023-08-08",
        isBestseller: true,
        description:
            "Kompletny podręcznik języka C++, który prowadzi od podstaw do programowania obiektowego, szablonów, obsługi wyjątków i biblioteki STL. Liczne ćwiczenia pomagają utrwalić materiał.",
    },
    {
        id: 111,
        category: "books",
        itemName: "Python od podstaw",
        price: 74.99,
        itemImage: book11,
        topic: "Python",
        stock: 16,
        addedAt: "2024-03-10",
        isNew: true,
        description:
            "Praktyczne wprowadzenie do Pythona: typy danych, funkcje, moduły, praca z plikami i podstawy programowania obiektowego. Dobry wybór na pierwszy język programowania.",
    },
    {
        id: 112,
        category: "books",
        itemName: "Python. Kurs dla nauczycieli i studentów",
        price: 38.99,
        itemImage: book12,
        topic: "Python",
        stock: 8,
        addedAt: "2023-05-19",
        description:
            "Podręcznik przygotowany z myślą o zajęciach dydaktycznych. Uczy programowania w Pythonie na przykładach z matematyki, nauk ścisłych i inżynierii.",
    },
]
