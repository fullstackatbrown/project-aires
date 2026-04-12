export default function EBoardPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl font-semibold text-[#08B2E3] mb-4">
          Executive Board
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-10">
            <img
              src="/leila.jpg"
              alt="Leila Kim"
              className="w-24 h-24 object-cover rounded-md mx-auto"
            />

            <h2 className="text-xl mt-6 text-black">Leila Kim</h2>
            <p className="text-[#08B2E3] text-sm mt-1">Co-President</p>

            <div className="w-10 h-0.5 bg-gray-200 mx-auto my-5" />

            <p className="text-gray-500 text-sm leading-relaxed">
              Leila Kim is a senior concentrating in Computer Science and Applied Mathematics with a focus on deep learning and algorithmic fairness. She is passionate about developing AI technologies that prioritize ethical considerations and societal well-being. Through AIRES, she hopes to foster conversations about responsible AI development among Brown students.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-10">
            <img
              src="/rosanna.jpg"
              alt="Rosanna Zhao"
              className="w-24 h-24 object-cover rounded-md mx-auto"
            />

            <h2 className="text-xl mt-6 text-black">Rosanna Zhao</h2>
            <p className="text-[#08B2E3] text-sm mt-1">Co-President</p>

            <div className="w-10 h-0.5 bg-gray-200 mx-auto my-5" />

            <p className="text-gray-500 text-sm leading-relaxed">
              Rosanna Zhao is a junior concentrating in Computer Science with an interest in human-computer interaction and privacy-preserving AI systems. She believes that ethical considerations should be at the forefront of technological innovation. As Co-President, she works to create educational opportunities that prepare students to make informed decisions about AI in their future careers.
            </p>
          </div>

        </div>

        <div className="bg-[#08B2E3] text-white rounded-xl mt-20 py-16 px-10">
          <h2 className="text-2xl mb-4">
            Section 1.10.33 of "de Finibus Bonorum et Malorum"
          </h2>

          <p className="text-sm opacity-90">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet.
          </p>
        </div>

      </div>
    </main>
  );
}