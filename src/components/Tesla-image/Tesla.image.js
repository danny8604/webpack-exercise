import Tesla from "./Tesla.jpg";
import "./Tesla-image.scss";

class TeslaImage {
  render() {
    const img = document.createElement("img");
    img.src = Tesla;
    img.alt = "Tesla Model-X";
    img.classList.add("tesla-image");

    const bodtDomElement = document.querySelector("body");
    bodtDomElement.appendChild(img);
  }
}

export default TeslaImage;
