"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between">
      
      <header className="relative flex items-center justify-center text-center h-screen bg-gray-900">
        {/* Fondo imagen */}
        <Image
         src="/cancha.jpg"
          alt="Fondo de estadio de fútbol"
          fill
          priority
          className="object-cover object-center opacity-50"
        />

  {/* Capa de oscurecimiento */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Contenido en primer plano */}
  <div className="relative z-10 px-6 sm:px-12 max-w-6xl w-full">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      
      {/* Columna Izquierda */}
      <div className="text-center md:text-left space-y-6">
        <Image
          src="/Falso_9.logo.png"
          alt="Falso 9 Logo"
          width={250}
          height={120}
          priority
          className="mx-auto md:mx-0 md:ml-8 mb-4 drop-shadow-lg"
        />

            {/* Aparece el texto con un efecto de tipo desplazamiento */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}   // empieza invisible y aparece de a poco
              animate={{ opacity: 1, y: 0 }}     // aparece y baja a su lugar
              transition={{ duration: 1 }}     
              className="text-5xl sm:text-6xl font-bold text-white drop-shadow-md leading-tight text-center md:text-left"
              >
              Bienvenido a <br /> Falso 9
              </motion.h1>

        <p className="mt-4 text-lg sm:text-xl max-w-md text-green-100 leading-relaxed mx-auto md:mx-0">
          El juego futbolero para disfrutar entre amigos.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#download"
            className="px-6 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition-colors"
          >
            Descargar App
          </a>
          <a
            href="#features"
            className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-800 transition-colors"
          >
            Ver Funcionalidades
          </a>
        </div>
      </div>

      {/* Columna Derecha*/}
      {/* Aparece la imagen con un efecto de tipo desplazamiento */}
      <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[250px] h-[500px]"
          >
            <Image
              src="/app_Falso9.png"
              alt="Falso 9 App"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
    </div>
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

      <section id="download" className="py-16 px-5 bg-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Descargá la App</h2>
          <h3 className="text-lg text-white mb-8">Disponible para Android</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#"
              download
              className="px-8 py-4 bg-yellow-500 text-black rounded-lg font-medium hover:bg-green-800 transition-colors">
              Descargar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
