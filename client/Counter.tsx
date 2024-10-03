import { useState } from "preact/hooks";
import viteLogo from "./vite.svg";
import phpLogo from "./php.svg";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.php.net/" target="_blank">
        <img src={phpLogo} class="logo" alt="PHP logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p class="read-the-docs">Click on the Vite logo to learn more</p>
    </div>
  );
}
