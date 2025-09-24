"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col justify-between">
      
      <header className="relative flex items-center justify-center text-center min-h-screen bg-gray-900">
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
        <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            
            {/* Columna Izquierda */}
            <div className="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1">
              <Image
                src="/Falso_9.logo.png"
                alt="Falso 9 Logo"
                width={250}
                height={120}
                priority
                className="mx-auto md:mx-0 md:ml-8 mb-4 drop-shadow-lg w-48 sm:w-56 md:w-64 h-auto"
              />

              {/* Aparece el texto con un efecto de tipo desplazamiento */}
              <motion.h1
                initial={{ opacity: 0, y: -30 }}   // empieza invisible y aparece de a poco
                animate={{ opacity: 1, y: 0 }}     // aparece y baja a su lugar
                transition={{ duration: 1 }}     
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md leading-tight text-center md:text-left"
              >
                Bienvenido a <br /> Falso 9
              </motion.h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl max-w-md text-green-100 leading-relaxed mx-auto md:mx-0 px-4 md:px-0">
                El juego futbolero para disfrutar entre amigos.
              </p>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start px-4 md:px-0 pb-3">
                <a
                  href="#download"
                  className="px-6 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition-colors text-sm sm:text-base"
                >
                  Descargar App
                </a>
                <a
                  href="#features"
                  className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-800 transition-colors text-sm sm:text-base"
                >
                  Ver Funcionalidades
                </a>
              </div>
            </div>

            {/* Columna Derecha*/}
            {/* Aparece la imagen con un efecto de tipo desplazamiento */}
            <div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] md:w-[250px] md:h-[500px]"
              >
                <Image
                  src="/app_Falso9.png"
                  alt="Falso 9 App"
                  fill
                  className="object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>
      
      <section id="features" className="py-12 md:py-16 px-4 md:px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Funcionalidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4">Múltiples jugadores</h3>
              <p className="text-sm md:text-base text-gray-600">Disfruta con tus amigos de rondas emocionantes</p>
            </div>
            <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4">Gran cantidad de futbolistas</h3>
              <p className="text-sm md:text-base text-gray-600">Más de 100 jugadores de fútbol disponibles</p>
            </div>
            <div className="p-4 md:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4">Elección de impostores</h3>
              <p className="text-sm md:text-base text-gray-600">Elegí la cantidad de impostores que vos quieras</p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-12 md:py-16 px-4 md:px-5 bg-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 md:mb-8">Descargá la App</h2>
          <h3 className="text-base md:text-lg text-white mb-6 md:mb-8">Disponible para Android</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/falso9.apk"
              download
              className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-600 transition-colors text-sm sm:text-base shadow-lg"
            >
              Descargar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}