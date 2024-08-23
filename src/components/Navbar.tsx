import { ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 bg-white z-50 p-4 flex items-center justify-around">
                <a href="/">

                <h1 className="capitalize font-sans font-extrabold text-2xl">Cloth<span className=" text-blue-400">Store</span></h1>
                </a>

                <div className="font-medium hidden lg:inline-block space-x-4 capitalize">
                    <a href="/collection/men-collection">mens</a>
                    <a>Women</a>
                    <a>Classic t-Shirt</a>
                    <a>Oversized T-Shirts</a>
                    <a>Fashion Joggers</a>
                    <a>Hoodies</a>
                </div>

                <div className="flex gap-x-2 items-center">
                    <input type="text" placeholder="search" className="border-2 rounded-lg p-1 border-blue-400 px-2" />
                    <ShoppingCart />
                </div>
            </nav>
        </>
    );
}

export default Navbar;