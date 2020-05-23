import { Product } from '../types.ts';

let products: Product[] = [
    {
        id: "1",
        name: "Product One",
        description: "This is product one",
        price: 29.99,
    },
    {
        id: "2",
        name: "Product Two",
        description: "This is product two",
        price: 39.99,
    },
    {
        id: "3",
        name: "Product Three",
        description: "This is product three",
        price: 59.99,
    },
];

// @desc    Get all products
// @route   GET /api/v1/products
const getProducts = ({ response }: {response: any}) => {
    response.body = {
        success: true,
        data: products
    }
}

// @desc    Get single product
// @route   GET /api/v1/products/:id
const getProduct = ({ params, response }: {params: {id: string}, response: any}) => {
    response.body = 'get';
    const product: Product | undefined = products.find(p => p.id === params.id);

    if(product) {
        response.status = 200;
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404;
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
}

// @desc    Add product
// @route   Post /api/v1/products
const addProduct = ({ response }: {response: any}) => {
    response.body = 'add';
}

// @desc    Update product
// @route   PUT /api/v1/products/:id
const updateProduct = ({ response }: {response: any}) => {
    response.body = 'update';
}

// @desc    Delete product
// @route   DELETE /api/v1/products/:id
const deleteProduct = ({ response }: {response: any}) => {
    response.body = 'delete';
}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
























