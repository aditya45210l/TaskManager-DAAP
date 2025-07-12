const Footer = () => {
  return (
    <footer className="border-t border-solid border-t-[#1F2937] px-10 py-8 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 text-[#00A9E0] mb-3">
            <div className="size-7">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
            </svg>
            </div>
            <h2 className="text-white text-xl font-bold">TaskChain</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Empowering a decentralized workforce through transparent and secure
            task management on the blockchain.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-[#00A9E0] transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#00A9E0] transition-colors" href="#">
                How It Works
              </a>
            </li>
            <li>
              <a className="hover:text-[#00A9E0] transition-colors" href="#">
                Support / FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-[#00A9E0] transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-[#00A9E0] transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Connect With Us
          </h3>
          <p className="text-sm mb-3">
            Stay updated with the latest news and platform updates.
          </p>
          <div className="flex space-x-4">
            <a
              className="text-[#9CA3AF] hover:text-[#00A9E0] transition-colors"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              className="text-[#9CA3AF] hover:text-[#00A9E0] transition-colors"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              className="text-[#9CA3AF] hover:text-[#00A9E0] transition-colors"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-[#374151] text-center">
        <p className="text-sm text-[#9CA3AF]">
          © 2024 TaskChain. All rights reserved. Built on the Blockchain for a
          transparent future.
        </p>
        <p className="text-xs text-[#6B7280] mt-1">
          Smart Contract Audited by SecureChain Labs.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
