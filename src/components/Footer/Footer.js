import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-[#e6d7ca] font-elegist text-center py-6 mt-16 border-t border-white/20">
      <p className="text-sm sm:text-base">
        Made with ❤️ by Meethu & Akhil | © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
