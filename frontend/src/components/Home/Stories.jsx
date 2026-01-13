const stories = [
  {
    name: "Leslie Alexander",
    role: "Community Supporter",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    quote:
      "Seeing real updates made me trust where my contribution was going. It felt personal.",
    impact: "Helped fund 12 meals",
  },
  {
    name: "Jacob Jones",
    role: "Volunteer Partner",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    quote:
      "This platform doesn’t just ask for help, it shows impact. That’s rare.",
    impact: "Sponsored a festival day",
  },
  {
    name: "Jenny Wilson",
    role: "First-time Donor",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    quote:
      "The plant growing on my dashboard made me feel connected beyond money.",
    impact: "Adopted a Neem sapling",
  },
];

const StarRating = () => (
  <div className="flex gap-1 text-slate-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Stories = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-cyan-50/40 py-24 overflow-hidden">

      {/* Soft cyan accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-sm text-slate-500">
            Voices of Impact
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-800">
            Stories that build trust,
            <span className="text-cyan-500"> one action at a time</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Transparency creates belief. These stories reflect how small actions
            create meaningful change.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-xl hover:border-cyan-200"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition blur-xl -z-10" />

              <StarRating />

              <p className="mt-6 text-slate-700 leading-relaxed italic">
                “{story.quote}”
              </p>

              {/* Impact badge */}
              <div className="inline-block mt-5 px-4 py-1 text-xs font-semibold rounded-full
                              bg-cyan-100 text-cyan-600">
                {story.impact}
              </div>

              <div className="flex items-center mt-8">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div className="ml-4">
                  <p className="font-semibold text-slate-800">
                    {story.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {story.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stories;
