import "preact";

declare module "preact" {
  namespace JSX {
    /** Example with custom attributes */
    // interface ExternalLinkAttributes extends HTMLAttributes<HTMLElement> {
    //   href?: string;
    //   provider?: "github" | "linkedin" | "twitter";
    //   internal?: boolean;
    // }

    interface IntrinsicElements {
      "content-top": HTMLAttributes<HTMLElement>;
      "content-bottom": HTMLAttributes<HTMLElement>;
    }
  }
}
