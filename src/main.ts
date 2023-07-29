import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="content">
    <div class="colorContainer"  id="color1">
      <h1 class="colorHex" id="color1Hex"></h1>
    </div>
    <div class="colorContainer" id="color2">
      <h1 class="colorHex" id="color2Hex"></h1>
    </div>
    <div class="colorContainer" id="color3">
      <h1 class="colorHex" id="color3Hex"></h1>
    </div>
    <div class="colorContainer" id="color4">
      <h1 class="colorHex" id="color4Hex"></h1>
    </div>
  </div>

  <div>
    <button onclick="button()">GENERATE RANDOM PALETTE</button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
