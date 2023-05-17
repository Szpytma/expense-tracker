import "./Footer.css";
const Footer = () => {
  const szpytma = "https://github.com/Szpytma/";
  let year = new Date().getFullYear();

  return (
    <footer className="Footer">
      Created by{" "}
      <a href={szpytma} target="_blank" rel="noreferrer">
        Szpytma
      </a>{" "}
      ® {year}
    </footer>
  );
};

export default Footer;
