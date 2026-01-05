import "./Footer.css";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Button>About Us</Button>
        <Button>Contact</Button>
      </div>

      <div className="footer-right">
        <Icon name="fb" size={32} />
        <Icon name="twitter" size={32} />
      </div>
    </footer>
  );
}

export default Footer;
