import React from 'react';

const Marquee = () => {
  const logos = [
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4234885e4c2e7955fc993c_zendesk.svg",
      width: "125",
      height: "24",
      alt: "Zendesk"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f68c5ab2b2bc1f1cce91512_rakuten-logo-black.svg",
      width: "100",
      height: "31",
      alt: "Rakuten"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/63601e7de4cee932ead423db_logo-nyt.svg",
      width: "222",
      height: "30",
      alt: "New York Times"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/614898ff2064cdb3edb45ec0_dell-black.svg",
      width: "75",
      height: "25",
      alt: "Dell"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f68c62e7e087c31a302df7b_upwork-black-webclip.svg",
      width: "105",
      height: "32",
      alt: "Upwork"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4b269921bce7314c68055f_Page%201.svg",
      width: "130",
      height: "25",
      alt: "Lattice"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/618d7c5ba338e335284bd8ce_logo-pwc.svg",
      width: "75",
      height: "57",
      alt: "PWC"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4c8b2c574a787655d450ce_getaround.svg",
      width: "125",
      height: "30",
      alt: "Getaround"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f9880bc2c1d2a36c4cd639b_hellosign.svg",
      width: "145",
      height: "24",
      alt: "Hellosign"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f6bac6a70255801a19ae02e_petal-black.svg",
      width: "65",
      height: "24",
      alt: "Petal"
    },
    {
      src: "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/62ed89cc58b878aa2c44aae2_logo-vice.svg",
      width: "89",
      height: "28",
      alt: "Vice"
    }
  ];

  return (
    <div className="logos__marquee">
      <div className="marquee__logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
            loading="eager"
            className="intro-logos_logo"
          />
        ))}
      </div>
      <div className="marquee__logos" aria-hidden="true">
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
            loading="eager"
            className="intro-logos_logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
