export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Tellow"
];

export const filters = [
    {
    id: "color",
    name: "Color",
    options: [
        {value: "white", label: "White"},
        {value: "beige", label: "Beige"},
        {value: "blue", label: "Blue"},
        {value: "brown", label: "Brown"},
        {value: "green", label: "Green"},
        {value: "purple", label: "Purple"},
        {value: "yellow", label: "Yellow"},

        ],
    },

    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label:"S"},
            {value: "M", label:"M"},
            {value: "L", label:"L"},
        ],
    },
    {
        id: "price",
        name: "Prince",
        options: [
            {value: "150-500", label:"₹150-₹500"},
            {value: "500-1000", label:"₹500-₹1000"},
            {value: "1000-2000", label: "₹1000-₹2000"},
            {value: "2000-3500", label: "₹2000-₹3500"},
            {value: "3500-5000", label: "₹3500-₹5000"},
        ],
    },

    {
        id: "discound",
        name: "Discount Range",
        options: [
            {value:"10", label: "10% and Above"},
            {value:"25", label: "25% and Above"},
            {value:"50", label: "50% and Above"},
            {value:"80", label: "80% and Above"},
        ],
    },

    {
        id: "stock",
        name: "Avilability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out of Stock"},
        ],
    },
];
