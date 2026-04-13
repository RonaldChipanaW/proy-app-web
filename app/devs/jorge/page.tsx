export default function JorgePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-cyan-400">
          Hola, soy Jorge
        </h1>

        <p className="text-gray-300 mb-6">
          Esta es mi página personal en el proyecto.
        </p>

        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-400">Información</p>
          <p className="text-lg text-white mt-2">
            Me gusta aprender y seguir mejorando en desarrollo web.
          </p>
        </div>

        <button className="px-5 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition">
          Ver más
        </button>
      </section>
    </main>
  );
}