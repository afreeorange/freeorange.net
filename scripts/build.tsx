/** @jsx h */
import fs from "node:fs/promises";
import { exec } from "node:child_process";

import { h } from "preact";
import { render } from "preact-render-to-string";

import App from "../src/app";
import Shell from "../src/shell";

(async () => {
  console.log("Removing dist/");
  await fs.rm("dist", { recursive: true, force: true });

  console.log("Building HTML");
  await fs.mkdir("./dist");

  await fs.writeFile(
    "./dist/index.html",
    "<!DOCTYPE html>" +
      render(
        <Shell>
          <App />
        </Shell>
      )
  );

  console.log("Building CSS");
  await exec(
    `pnpm exec npx @tailwindcss/cli -i ./src/app.css -o dist/index.css`,
    (error, stdout, stderr) => {
      console.log(stdout);

      if (error) {
        console.log(error);
        console.log(stderr);
      }
    }
  );

  console.log("Copying assets");
  await fs.cp("public", "dist", { recursive: true });

  console.log("🎊 All done!");
})();
