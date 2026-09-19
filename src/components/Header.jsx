function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">L</span>
          Lumina
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
