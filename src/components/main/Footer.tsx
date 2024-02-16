import { pageStrings } from "../../assets/text/pageStrings";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full text-right p-4">
      <div>
        <p className="text-[#1b3a0695]">{pageStrings.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
