import { pageStrings } from "../../assets/text/pageStrings";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full text-right p-4">
      <div>
        <p className="text-[#e9f5e135] text-sm">{pageStrings.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
