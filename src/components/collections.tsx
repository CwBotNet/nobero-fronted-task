import { useCollection } from "../hooks"

interface product {
    _id: string,
    category: string,
    url: string,
    image_link: string,
    name: string,
    price: {
        regular: string
        sale: string
        discount: string
    },
    "price-drop": string,
}

const ProductCollection = () => {
    const { loading, products } = useCollection()



    if (loading) {

        return <div className="loader">
            <div className="justify-content-center jimu-primary-loading"></div>
        </div>
    }

    if (!loading && !products) {
        return (
            <div className="flex justify-center items-center h-[90vh] w-full">
                <section className="bg-white">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500 dark:text-primary-500">500</h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Internal Server Error.</p>
                            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">We are already working to solve the problem. </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="ml-auto mr-auto">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-wrap  -m-4">
                    {products.map((item: product) => (

                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item._id}>
                            <a href={item.url} >
                                <a className="block relative h-56 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-56 h-full block" src={item.image_link} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                    <p className="mt-1"> ₹{item.price.regular} <span className="text-green-500">{item.price.discount}</span></p>
                                    <p className="mt-1 text-xs"> MRP <span className="line-through">
                                        ₹{item.price.sale}
                                    </span> Inclusive of all Taxes
                                    </p>
                                    <p className="text-green-500 font-sans text-xs">
                                        {item["price-drop"]}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCollection;