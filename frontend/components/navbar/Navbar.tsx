import React from "react";
import ThemeSwitcher from "../theme-toggler";

export default function Navbar() {
  return (
    <header className="flex justify-end">
      <div className="container px-4 sm:px-6 py-4 flex justify-end">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
