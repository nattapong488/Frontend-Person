import "./Footer_Person.css"
import {FaFacebook, FaTwitch, FaInstagram, FaTwitter} from "react-icons/fa"
function Footer_Person(){
    return (
        <>
        <footer class="footer">
        <div class="footer-container">
            <p class="copyright">&copy; 2025 Web Nattapong</p>
            <div class="social-links">              
                <a href="#" target="_blank" class="social-link"><FaFacebook></FaFacebook></a>
                <a href="#" class="social-link"><FaTwitter></FaTwitter> </a>
                <a href="#" class="social-link"><FaInstagram></FaInstagram> </a>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer_Person;