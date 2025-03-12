import { useEffect, useState } from "react";

function NavBar() {
  const [isSm, setIsSm] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [navTranslate, setNavTranslate] = useState("translate-x-[100%]");

  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth)
  })

  function navbarSlideOpen() {
    setNavTranslate("translate-x-[0%]");
    document.body.style.overflow = "hidden";
  }
  function navbarSlideClose() {
    setNavTranslate("translate-x-[100%]");
    document.body.style.overflow = "";

  }

  useEffect(() => {
    if (innerWidth <= 640) {
      setIsSm(true);
    } else {
      setIsSm(false)
    }

  }, [innerWidth])



  return (
    <nav className="flex justify-between items-center">
      <div>
        <img className="clickable" src="images/logo.svg" alt="" />
      </div>

      {!isSm && <div className="flex flex-col gap-10 text-gray-600
                      sm:flex-row">
        <div className="clickable">Home</div>
        <div className="clickable">New</div>
        <div className="clickable">Popular</div>
        <div className="clickable">Trending</div>
        <div className="clickable">Categories</div>
      </div>}



      {isSm && <>
        <img onClick={navbarSlideOpen}
          className="clickable w-4 h-4" src="images/icon-menu.svg" alt="menu open icon" />
        <div onClick={navbarSlideClose}
          className={`w-[100vw] h-[100vh] bg-[#0000007a] fixed top-0 left-0 ${navTranslate}`}> </div>
        <div className={`bg-amber-200 h-[100vh] w-[8rem] p-4 fixed right-0 top-0 
                        flex flex-col gap-10 text-gray-600 ${navTranslate} transition-all`}>
          <img onClick={navbarSlideClose}
            className="clickable w-4 h-4" src="images/icon-menu-close.svg" alt="menu close icon" />
          <div className="clickable">Home</div>
          <div className="clickable">New</div>
          <div className="clickable">Popular</div>
          <div className="clickable">Trending</div>
          <div className="clickable">Categories</div>
        </div>
      </>
      }
    </nav>
  )
}

export default NavBar