import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg border-b border-[#E5E8EB] shadow-md sticky top-0 z-50">
            <div className="container-fluid flex align-items-center justify-between px-10 py-4 max-w-7xl mx-auto">
                <Link className="navbar-brand flex gap-2 align-items-center" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                    Book Store
                </Link>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex gap-4 align-items-center">
                        <li className="nav-item active">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/category">Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/book">Book</Link>
                        </li>
                    </ul>
                </div>
                <div className="user-profile">
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
                <button className="lg:hidden block navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}
export default Navbar;