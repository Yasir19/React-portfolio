
import React from "react";

function footer() {
  const soicalMedia = [
    {
      name: "fa fa-github",
      link: "https://github.com/Yasir19",
    },

    {
      name: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/yasir-habboo/",
    },
    {
      name: "fa fa-twitter",
      link: "https://twitter.com/HabbooYasir",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {soicalMedia.map((media) => (
        <a
          href={media.link}
          key={media.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={media.name} />
        </a>
      ))}
    </footer>
  );
}
export default footer