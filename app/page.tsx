import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between">
      
      <header
        className="flex flex-col items-center text-center py-15 px-8 !bg-green-700"
        style={{
          backgroundColor: "#15803d !important",
          background: "linear-gradient(to bottom, #15803d, #166534) !important",
        }}
      >
        <Image src="/Falso_9.logo.png" 
          alt="Falso 9 Logo" 
          width={250} 
          height={120} 
          priority 
          className="mb-2" 
        />
        <h1 className="text-4xl sm:text-5xl font-bold mt-6 !text-white">Bienvenido a Falso 9</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl !text-green-100">
          El juego futbolero para disfrutar entre amigos.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#download"
            className="px-6 py-3 !bg-white !text-green-800 rounded-full font-medium hover:!bg-green-50 transition-colors shadow-lg"
          >
            Descargar App
          </a>
          <a
            href="#features"
            className="px-6 py-3 border-2 !border-white !text-white rounded-full font-medium hover:!bg-white hover:!text-green-800 transition-colors"
            style={{ backgroundColor: "transparent" }}
          >
            Ver Funcionalidades
          </a>
        </div>
      </header>
      
      <section id="features" className="py-16 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Funcionalidades</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Multiples jugadores</h3>
                <p className="text-gray-600">Disfruta con tus amigos de rondas emocionantes</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Grán cantidad de futbolistas</h3>
                <p className="text-gray-600">Más de 100 jugadores de fútbol disponibles</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Elección de impostores</h3>
                <p className="text-gray-600">Elegí la cantidad de impostores que vos quieras</p>
              </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-16 px-5 bg-green-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Descargá la App</h2>
          <h3 className="text-lg text-white mb-8">Disponible para Android y iOS</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors">
              Descargar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
