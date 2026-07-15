import Container from "../ui/Container";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="site-header">
      <Container>
        <nav className="site-nav">
          <Logo />

          <DesktopNav />

          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}