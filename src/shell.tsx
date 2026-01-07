import type { ComponentChildren } from "preact";
import packageJson from "../package.json";

const DOMAIN = "freeorange.net";
const URI = `https://${DOMAIN}`;
const AUTHOR = "Nikhil Anand";
const TITLE = "a free Orange, LLC &ndash; DSM / NYC";
const DESCRIPTION = "A Fullstack Consultancy in DSM and NYC.";
const KEYWORDS = [
  "fullstack",
  "web design",
  "consultancy",
  "web development",
  "frontend engineering",
];

const Shell = ({ children }: { children?: ComponentChildren }) => (
  <html lang="en-US">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="view-transition" content="same-origin" />
      <meta name="version" content={packageJson.version} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={AUTHOR} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URI} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content="/og-image.png" />
      <meta name="twitter:title" content={TITLE} />
      <meta property="twitter:domain" content={DOMAIN} />
      <meta property="twitter:url" content={URI} />

      <title dangerouslySetInnerHTML={{ __html: TITLE }} />

      <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="stylesheet" href="/index.css" />
      <link rel="canonical" href={URI} />

      <script
        async
        defer
        data-domain={URI}
        src="https://plausible.io/js/plausible.js"
      />
    </head>
    <body>
      <div className="container">{children}</div>
    </body>
  </html>
);

export default Shell;
