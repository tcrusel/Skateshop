import './Footer.css';
import logoInsta from "../assets/images/logo_insta.jpg";
import logoFb from "../assets/images/logo_fb.png";
import logoTiktok from "../assets/images/logo_tiktok.png";

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
                        <a href="instagram"><img src={logoInsta} alt="Instagram" width="40" height="auto" /></a>
                        <a href="facebook"><img src={logoFb} alt="Facebook" width="33" height="auto" /></a>
                        <a href="tiktok"><img src={logoTiktok} alt="TikTok" width="40" height="auto" /></a>
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
