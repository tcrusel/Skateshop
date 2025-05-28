import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <h3>Skateshop</h3>
                    <p>Le shop 100% ride, 100% passion.</p>
                </div>

                <div className='footer-top-right'>
                    <h4>Suivez-nous</h4>
                    <div className="social-icons">
                        <a href="instagram"><img src="src/images/icon-instagram.png" alt="Instagram" /></a>
                        <a href="facebook"><img src="src/images/icon-facebook.png" alt="Facebook" /></a>
                        <a href="tiktok"><img src="src/images/icon-tiktok.png" alt="TikTok" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Skateshop. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
