export default function RebecaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-10 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-cyan-300 mb-4">
          Hola bienvenido a la pag de Rebeca
        </h1>
        <p className="text-lg text-amber-100 mb-6">
          En esta página ofrecemos órganos con dedicación y cuidado a medias.
        </p>
        <button className="px-6 py-3 bg-amber-400 text-cyan-900 font-semibold rounded-lg shadow-md hover:bg-amber-300 transition">
          Explorar más
        </button>
      </div>
    </div>
  );
}
