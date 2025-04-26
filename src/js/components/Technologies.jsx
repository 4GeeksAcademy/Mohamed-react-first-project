import React from "react";


const Technologies = () => {
  const tools = [
    {
      name: "HTML",
      img: "https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png",
    },
    {
      name: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Git/GitHub",
      img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "VS Code",
      img: "https://code.visualstudio.com/assets/images/code-stable.png",
    },
    {
      name: "Bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
  ];

  return (
    <div className="technologies-container">
      <h1 className="technologies-heading">My Tools:</h1>
      <div className="technologies-grid">
        {tools.map((tool, index) => (
          <div key={index} className="technology-card">
            <img src={tool.img} alt={tool.name} className="technology-image" />
            <p className="technology-name">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;