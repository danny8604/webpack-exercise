import "./hello-world-button.css";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello world!!!!";
    const body = document.querySelector("body");
    body.appendChild(button);
  }

  click() {
    const body = document.querySelector("body");
    const but = document.querySelector("button");
    but.classList.add("hello-world-button");
    but.addEventListener("click", function () {
      const p = document.createElement("p");
      p.classList.add("hello-world-text");
      p.innerHTML = "Hello world!🐧🐧";
      body.append(p);
    });
  }
}

export default HelloWorldButton;
