import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="https://static.wixstatic.com/media/aebaa7_090fb1a2b5d34c418af64c8ebab58b76.png/v1/fill/w_196,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aebaa7_090fb1a2b5d34c418af64c8ebab58b76.png"></img>
        <Link href="/">Home</Link>
        <Link href="/portraits">Portraits</Link>
        <Link href="/landscape">Landscape</Link>
        <a>Other Works</a>
        
      </div>
      <h2 className="navtitle"><b>Kingsland Photography</b></h2>
    </nav>
  );
};

export default Navbar;
