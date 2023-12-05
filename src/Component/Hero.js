import React from 'react'

const Hero = (props) => {
  return (
    <div
      id="hero"
      class="cakecious-hero cakecious-section-default cakecious-text-align-center"
      role="region"
      aria-label="Hero Section"
    >
      <div class="cakecious-hero-inner cakecious-section-inner">
        <div class="cakecious-wrapper">
          <div class="content-header left">
            <h1 class="entry-title">{props.title}</h1>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero
