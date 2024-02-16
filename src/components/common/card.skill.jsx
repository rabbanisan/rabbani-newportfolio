import React from "react";

const SkillCard= ({ image, name, className, imgClassname}) => {

  const addImgClassName = imgClassname ? `${imgClassname}` : "";
  const addClassName = className ? `${className}` : "";

  return (
      <div className={`bg-white shadow-card rounded-lg flex items-center p-6 ${addClassName}`}>
          <img src={image} className={`mr-6 ${addImgClassName}`}/>
          <div>
              <h4 className="text-lg font-semibold font-sans">{name}</h4>
          </div>
      </div>
  );
}

export default SkillCard;