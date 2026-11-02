import tshirt01 from './../assets/img/tshirts/tshirt01.jpg'
import tshirt02 from './../assets/img/tshirts/tshirt02.jpg'
import tshirt03 from './../assets/img/tshirts/tshirt03.jpg'
import tshirt04 from './../assets/img/tshirts/tshirt04.jpg'
import tshirt05 from './../assets/img/tshirts/tshirt05.jpg'
import tshirt06 from './../assets/img/tshirts/tshirt06.jpg'
import tshirt07 from './../assets/img/tshirts/tshirt07.jpg'
import tshirt08 from './../assets/img/tshirts/tshirt08.jpg'
import tshirt09 from './../assets/img/tshirts/tshirt09.jpg'
import tshirt10 from './../assets/img/tshirts/tshirt10.jpg'

export const TSHIRT_SIZES = ["S", "M", "L", "XL", "XXL"]

// Approximate garment measurements in cm (chest width × length)
export const TSHIRT_SIZE_CHART = [
    { size: "S", width: 48, length: 70 },
    { size: "M", width: 51, length: 72 },
    { size: "L", width: 55, length: 74 },
    { size: "XL", width: 58, length: 76 },
    { size: "XXL", width: 61, length: 78 },
]

const TSHIRT_DESCRIPTION =
    "Klasyczny t-shirt o prostym kroju z okrągłym dekoltem. Miękka, przewiewna bawełna sprawdzi się na co dzień, na trening i jako baza pod nadruk. Wzmocnione szwy na ramionach zapewniają trwałość po wielu praniach."

const tshirt = ({ id, colorName, hex, sizes = TSHIRT_SIZES, ...rest }) => ({
    id,
    category: "tshirts",
    itemName: `T-shirt Classic — ${colorName.toLowerCase()}`,
    color: { name: colorName, hex },
    sizes,
    material: "100% bawełna",
    description: TSHIRT_DESCRIPTION,
    ...rest,
})

export const TSHIRTS = [
    tshirt({ id: 301, colorName: "Biały", hex: "#ffffff", price: 15.00, itemImage: tshirt01, stock: 60, addedAt: "2023-03-01", isBestseller: true }),
    tshirt({ id: 302, colorName: "Czerwony", hex: "#e3262f", price: 10.00, oldPrice: 14.99, itemImage: tshirt02, stock: 34, addedAt: "2023-03-01" }),
    tshirt({ id: 303, colorName: "Szary melanż", hex: "#c9cbcc", price: 10.00, itemImage: tshirt03, stock: 41, addedAt: "2023-03-01", isBestseller: true }),
    tshirt({ id: 304, colorName: "Niebieski", hex: "#1e63c6", price: 15.00, itemImage: tshirt04, stock: 22, addedAt: "2023-05-15", sizes: ["S", "M", "L", "XL"] }),
    tshirt({ id: 305, colorName: "Granatowy", hex: "#16245a", price: 14.99, itemImage: tshirt05, stock: 38, addedAt: "2023-05-15", isBestseller: true }),
    tshirt({ id: 306, colorName: "Bordowy", hex: "#6e1f33", price: 18.99, itemImage: tshirt06, stock: 12, addedAt: "2024-02-20", isNew: true, sizes: ["M", "L", "XL", "XXL"] }),
    tshirt({ id: 307, colorName: "Żółty", hex: "#f5c518", price: 9.99, oldPrice: 12.99, itemImage: tshirt07, stock: 16, addedAt: "2023-06-01", sizes: ["S", "M", "L"] }),
    tshirt({ id: 308, colorName: "Butelkowa zieleń", hex: "#1f4a33", price: 9.50, itemImage: tshirt08, stock: 19, addedAt: "2024-03-05", isNew: true }),
    tshirt({ id: 309, colorName: "Fuksja", hex: "#e8338a", price: 9.50, itemImage: tshirt09, stock: 4, addedAt: "2023-06-01", sizes: ["S", "M"] }),
    tshirt({ id: 310, colorName: "Pomarańczowy", hex: "#f47b20", price: 9.99, itemImage: tshirt10, stock: 27, addedAt: "2023-06-01", sizes: ["M", "L", "XL"] }),
]
