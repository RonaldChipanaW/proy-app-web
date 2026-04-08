export default function AndresPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-950 via-emerald-900 to-lime-900 px-4">
      
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center max-w-md w-full border border-white/20">
        
        <h1 className="text-4xl font-extrabold text-emerald-300 mb-3 tracking-tight">
          Hola, soy Andrés
        </h1>

        <p className="text-lg text-green-100 mb-6 leading-relaxed">
          Bienvenido a mi espacio. Aquí puedes explorar ideas, hacer preguntas 
          y descubrir cosas interesantes conmigo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-6 py-2 rounded-xl transition duration-300 shadow-lg hover:scale-105">
            Explorar
          </button>

          <button className="bg-white/20 hover:bg-white/30 text-green-100 font-medium px-6 py-2 rounded-xl transition duration-300 backdrop-blur-md">
            Saber más
          </button>
        </div>

        <div className="mt-8 text-sm text-green-200/70">
          ✨ Hecho con React + Tailwind
        </div>

      </div>

    </div>
  );
}
