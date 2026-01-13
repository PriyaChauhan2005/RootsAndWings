const Footer = () => {
  return (
    <footer className="w-full">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT CTA SECTION */}
        <div className="bg-slate-800 text-white px-8 py-16 flex flex-col justify-center gap-6">
          <div className="space-y-4">
            <button className="flex items-center gap-3 text-lg font-semibold hover:text-cyan-400 transition">
              TAKE ACTION
              <span className="w-6 h-6 border border-white/60 rounded-full flex items-center justify-center">
                →
              </span>
            </button>

            <button className="flex items-center gap-3 text-lg font-semibold hover:text-cyan-400 transition">
              PARTNER WITH US
              <span className="w-6 h-6 border border-white/60 rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>

          <button className="mt-6 w-fit bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-cyan-500/40 transition">
            DONATE
          </button>
        </div>

        {/* RIGHT LINKS SECTION */}
        <div className="bg-cyan-50 px-8 py-16 text-slate-700">
          <div className="grid grid-cols-2 gap-10">

            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-4 text-slate-800">
                ABOUT ROOTS & WINGS
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-600 cursor-pointer">Organization</li>
                <li className="hover:text-cyan-600 cursor-pointer">Impact Report</li>
                <li className="hover:text-cyan-600 cursor-pointer">Governance</li>
                <li className="hover:text-cyan-600 cursor-pointer">Team</li>
                <li className="hover:text-cyan-600 cursor-pointer">Media</li>
                <li className="hover:text-cyan-600 cursor-pointer">Careers</li>
                <li className="hover:text-cyan-600 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-4 text-slate-800">
                NEWS & EVENTS
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-600 cursor-pointer">News & Articles</li>
                <li className="hover:text-cyan-600 cursor-pointer">Stories</li>
                <li className="hover:text-cyan-600 cursor-pointer">Events</li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                {["f", "in", "yt", "tw", "ig"].map((icon) => (
                  <div
                    key={icon}
                    className="w-9 h-9 border border-slate-300 rounded-full flex items-center justify-center text-sm font-bold text-slate-600
                               hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-slate-900 text-slate-400 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
        <p>
          © Roots & Wings. All rights reserved.
          <span className="ml-2">Privacy Policy · Terms · Sitemap</span>
        </p>

        <button className="flex items-center gap-2 border border-slate-400 px-5 py-2 rounded-full
                           hover:bg-white hover:text-slate-900 transition">
          ✉ SUBSCRIBE NOW
        </button>
      </div>

    </footer>
  );
};

export default Footer;
