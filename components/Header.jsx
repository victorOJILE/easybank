import { useState } from "react";

export default function Header() {
  return (
    <header className="relative">
      <div className="sm:absolute top-0 left-0 w-full bg-white z-50">
        <nav className="container mx-auto max-w-5xl flex items-center justify-between relative lg:px-4">
          <a href="/" className="inline-block p-5">
            <img className="w-32" src="logo.svg" alt="Easy Bank Official Logo" />
          </a>
          <TopNavigation />
        </nav>
      </div>
      <section className="hero">
        <div className="relative container mx-auto max-w-5xl h-full flex flex-wrap items-center">
          <div className="md:w-6/12 md:absolute top-0 z-0 right-0 px-4 md:p-0">
            <img className="mx-auto" src="image-mockups.png" alt="" />
          </div>
          <div className="w-full md:w-5/12 p-4 text-center md:text-left mb-5 md:mb-0 md:mt-10">
            <h1 className="text-3xl">Next generation<br />digital banking</h1>
            <p className="text-gray-500 py-4 text-sm leading-relaxed max-w-sm mx-auto">
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <a href="" className="mt-3 invite-btn block mx-auto md:ml-0">
              Request Invite
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

function TopNavigation() {
  const [open, setOpen] = useState(false);

  function toggle() {
    document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    setOpen(prev => !prev);
  }

  return (
    <div className="md:flex-grow md:flex items-center justify-between dropdown" style={{ maxWidth: "40rem" }}>
      <div className="p-3 m-2 hover:bg-gray-100 rounded md:hidden" onClick={toggle}>
        { 
          open ? <img src="icon-close.svg" alt="Close Navigation" /> : 
          <img src="icon-hamburger.svg" alt="View Navigation" />
         }
      </div>
      <nav
        className={ "p-6 nav-mobile-bg overflow-auto md:block" + (open ? "" : " hidden") }
        onClick={toggle}
        >
        <ul className="rounded grayish" onClick={(e) => e.stopPropagation()}>
          <li>
            <a href="">
              Home
            </a>
          </li>
          <li>
            <a href="">
              About
            </a>
          </li>
          <li>
            <a href="">
              Contact
            </a>
          </li>
          <li>
            <a href="">
              Blog
            </a>
          </li>
          <li>
            <a href="">
              Careers
            </a>
          </li>
        </ul>
      </nav>
      <a href="" className="invite-btn hidden md:block">
        Request Invite
      </a>
    </div>
  );
}