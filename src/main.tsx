/** biome-ignore-all lint/style/noNonNullAssertion: It's there. Chill, homie. */
import { render } from "preact";
import App from "./app.tsx";

import "./app.css";

render(<App />, document.getElementById("container")!);
