import React from "react";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

/**
 * Brand lockup: SDSC wordmark + stacked "Expanse / User Guide" title,
 * integrated as a single unit linking to the docs home page.
 * The accessible name comes from the visible text ("Expanse User Guide"),
 * so the wordmark image is marked decorative.
 */
export default function NavbarLogo() {
  return (
    <Link to={useBaseUrl("/")} className="navbar-brand-lockup">
      <ThemedImage
        className="navbar-brand-lockup__logo"
        alt=""
        sources={{
          light: useBaseUrl("img/sdsc-logo.svg"),
          dark: useBaseUrl("img/sdsc-logo-white.svg"),
        }}
      />
      <span className="navbar-brand-lockup__divider" aria-hidden="true" />
      <span className="navbar-brand-lockup__text">
        <span className="navbar-brand-lockup__title">Expanse{" "}</span>
        <span className="navbar-brand-lockup__subtitle">User Guide</span>
      </span>
    </Link>
  );
}
