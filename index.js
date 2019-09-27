import React, { useEffect } from "react";
import "./index.css";

export default props => {
  const createObject = (props, element, attr) => {
    if (props.type === "circle") {
      element.style.borderRadius = "100%";
    } else {
      element.style.borderRadius = "0%";
    }

    element.style.width = `${attr.size}px`;
    element.style.height = `${attr.size}px`;
    element.style.bottom = `-${attr.size}px`;
    element.style.left = `${attr.position}%`;
    element.style.zIndex = 0;
    element.style.animationDelay = `${attr.delay}s`;
    element.style.animationDuration = `${attr.duration}`;
    element.style.backgroundColor = `${attr.background}`
    element.style.animation = `up ${attr.velocity}s infinite`
    element.style.animationDirection = `${attr.direction}`    
    return element;
  };

  useEffect(() => {
    let ulAnimations = document.querySelector("ul.animation");

    const {
      minSize,
      maxSize,
      minPosition,
      maxPosition,
      minDelay,
      maxDelay,
      minDuration,
      maxDuration,
      count,
      color,
      velocity,
      direction
    } = props;

    let instances = count ? count : 11;

    for (let i = 0; i < instances; i++) {
      const li = document.createElement("li");
      const random = (min, max) => Math.random() * (max - min) + min;

      const size = Math.floor(
        random(minSize ? minSize : 10, maxSize ? maxSize : 120))
        ;
      const position = random(
        minPosition ? minPosition : 1,
        maxPosition ? maxPosition : 99);

      const delay = random(minDelay ? minDelay : 0.1, maxDelay ? maxDelay : 5);
      
      const duration = random(
        minDuration ? minDuration : 12,
        maxDuration ? maxDuration : 24);
        
      const background = color ? color : 'rgba(255,255,255,0.15)'

      const attr = { size, delay, duration, position, background, velocity,direction };

      const elements = createObject(props, li, attr);
      ulAnimations.appendChild(elements);
    }
  });

  return <ul className="animation"></ul>;
};
