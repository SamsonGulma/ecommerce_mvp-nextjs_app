import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href="/">
                    E-Commerce MVP
                </Link>
            </div>
            <div>
                <Link href="/">
                    Home
                </Link>
            </div>
            <div>
                <Link href="/products">
                    Product
                </Link>
            </div>
            <div>
                <Link href="/checkout">
                    Check out
                </Link>
            </div>
        </nav>
  )
}

export default Navbar