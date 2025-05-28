import './Header.css'

interface HeaderInterface {
    totalFavorites: number;
    totalCartItems: number;
}


function Header({ totalFavorites, totalCartItems }: HeaderInterface) {
    return (
        <header>
            <div className='logo-title'>
                <img id="logo" src="src/images/logo.jpg" alt="logo" width="40" height="40" />
                <h1>Skateshop</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/decks">Decks</a></li>
                    <li><a href="/grips">Grips</a></li>
                    <li><a href="/trucks">Trucks</a></li>
                    <li><a href="/wheels">Wheels</a></li>
                    <li><a href="/bearings">Bearings</a></li>
                    <li><a href="/screws">Screws</a></li>
                </ul>
            </nav>
            <div className='buttons-nav'>
                <span id="account"><a href="create your account">Create your account</a></span>
                <button id="favoris">{<p id="logo-favorite">❤️</p>}{totalFavorites}</button>
                <button id="panier">{<img src="src/images/panier.png" alt="panier" width="20" height="20" />}{totalCartItems}</button>
            </div>
        </header>
    )
}

export default Header;