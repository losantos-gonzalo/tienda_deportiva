export const productos = [
    {
        id: 1,
        nombre: "Superstar",
        categoria: "zapas",
        precio: 59.99,
        stock: 101,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b383bec4abcd48c9b40f0cf6079cf162_9366/Zapatillas_Response_Negro_IG9922_01_standard.jpg"
    },
    {
        id: 2,
        nombre: "Stan Smith",
        categoria: "zapas",
        precio: 79.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85d73e3f92484276952460be9e5db84c_9366/Zapatillas_Racer_TR23_Verde_ID7835_01_standard.jpg"
    },
    {
        id: 3,
        nombre: "UltraBoost",
        categoria: "zapas",
        precio: 99.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7812852c47544f67a7ab71e32ade3e60_9366/Zapatillas_CourtJam_Control_3_para_Tenis_Blanco_IF7888_01_standard.jpg"
    },
    {
        id: 4,
        nombre: "NMD",
        categoria: "zapas",
        precio: 69.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5d92c76604e491bb676ac9100cb8211_9366/CLOUDFOAM_PURE_2.0_Negro_H04753_01_standard.jpg"
    },
    {
        id: 5,
        nombre: "Gazelle",
        categoria: "pantalon",
        precio: 89.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09f2d5a2825b4c10868caf1900dff325_9366/Pantalon_Essentials_Stanford_AEROREADY_Piernas_Conicas_Logo_Pequeno_Bordado_Negro_IC0059_21_model.jpg"
    },
    {
        id: 6,
        nombre: "Continental 80",
        categoria: "pantalon",
        precio: 109.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b961f358ffab4cc78ff934fb8c142be7_9366/Jeans_KSENIASCHANIDER_3_Tiras_Multi_IS1699_21_model.jpg"
    },
    {
        id: 7,
        nombre: "Yeezy Boost",
        categoria: "camiseta",
        precio: 79.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9e9af28ac5964651b92ed3cb5a326957_9366/Remera_Corta_Tiro_Summer_Naranja_IS0726_21_model.jpg"
    },
    {
        id: 8,
        nombre: "Campus",
        categoria: "camiseta",
        precio: 99.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8a405d0e3e434b5b8114501e26493441_9366/Remera_3_Tiras_Baby_Negro_IU2532_21_model.jpg"
    },
    {
        id: 9,
        nombre: "Swift Run",
        categoria: "buzos",
        precio: 119.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51c577f248174cf09303af50002bcb78_9366/SWEATSHIRT_Naranja_IK7697_21_model.jpg"
    },
    {
        id: 10,
        nombre: "Samba",
        categoria: "buzos",
        precio: 89.99,
        stock: 10,
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5db69be601ec493fa4cdaf6200c70f40_9366/Buzo_Essentials_3_Tiras_Gris_IC9905_21_model.jpg"
    }
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
};

export const productsByCategory = (category) => {

    return new Promise((res) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoria === category
        );
        setTimeout(() => {
            res(productosFiltrados);
        }, 200);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 200);
    });
};