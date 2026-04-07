export default function AndresPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-900 to-blue-800">
      
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center">
        
        <h1 className="text-3xl font-bold text-cyan-300 mb-4">
          👋 Hola desde la Página de Andres
        </h1>

        <p className="text-amber-200 mb-6">
          Bienvenido a mi pagina, preguntame lo que quieras.
        </p>

        <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-2 rounded-xl transition duration-300">
          Explorar
        </button>

      </div>

    </div>
  );
}