import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full bg-[#202027] text-white px-6 py-6 flex flex-col md:flex-row items-center justify-between font-poppins z-50"
    >
      {}
      <div className="flex gap-6 mb-4 md:mb-0">
        <Button text="About Us" />
        <Button text="Contact" />
      </div>

      {}
      <div className="flex gap-6">
        <Icon type="facebook" link="https://facebook.com" />
        <Icon type="twitter" link="https://twitter.com" />
      </div>
    </footer>
  );
}

export default Footer;
