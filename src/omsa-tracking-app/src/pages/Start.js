import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// function LocationActivationButton() {
//   return (
//     <button className="justify-center px-7 py-4 mt-10 font-bold bg-yellow-300 rounded-[50px] text-stone-900">
//       Activar Ubicación
//     </button>
//   );
// }

function LocationActivationButton() {
  const navigate = useNavigate();
  
  const handleLocationActivation = () => {
    // Solicitar la ubicación al usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // Éxito: redirigir a la ruta de Home
        () => {
          navigate("/home");
        },
        // Error:
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
        }
      );
    } else {
      console.error("Geolocalización no es soportada por este navegador");
    }
  };

  return (
    <button
      className="justify-center px-7 py-4 mt-10 font-bold bg-yellow-300 rounded-[50px] text-stone-900"
      onClick={handleLocationActivation}
    >
      Activar Ubicación
    </button>
  );
}

function Details() {
  return (
    <main className="flex flex-col items-center px-3 py-20 mx-auto w-full text-lg text-black bg-white max-w-[480px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/afd594ea0a199ec9c306a987b12e9f5f65db1a74d56fbf7d7701bac3e70a59d5?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Placeholder image"
        className="self-stretch mt-11 w-full aspect-[1.12]"
      />
      <p className="mt-24 text-center">
        Activar la ubicación para encontrar paradas de autobuses cercanos
      </p>
      <LocationActivationButton />
      <Link to="/home" className="mt-6 font-light underline">
        Buscaré manualmente
      </Link>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c858458e9702b178d5141da109fb299991341a118966fbdeb300b009584d5ef6?apiKey=fb34ab8a011e440488e897e0309c7345&"
        alt="Placeholder image"
        className="mt-14 aspect-[4.76] max-w-[339px] w-[339px]"
      />
    </main>
  );
}

export default Details;