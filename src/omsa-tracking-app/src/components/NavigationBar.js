import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaHome, FaInfoCircle } from 'react-icons/fa';
import HeartSelected from "../components/icons/heart-selected";
import HeartUnselected from "../components/icons/heart=unselected";
import ListSelected from "../components/icons/navigation/list-selected";
import ListUnSelected from "../components/icons/navigation/list-unselected";
import LocationSelected from "../components/icons/navigation/location-selected";
import LocationUnSelected from "../components/icons/navigation/location-unselected";

// TODO: Change icons according to the design. Use filled icons when page is active
function NavigationBar() {

  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState('');

  useEffect(() => {
    // Actualiza el estado de la página seleccionada cuando cambia la ubicación
    setSelectedPage(location.pathname);
  }, [location]);

  return (
    <nav className="max-w-[480px] bg-white flex justify-between items-center h-16 px-0 pb-1 mt-3 w-full fixed bottom-0 w-full z-10 border-t-indigo-500" style={{ boxShadow: '2px 0px 8px -2px gray' }}>
      <ul className="flex justify-evenly w-full">
        <li className="flex items-center w-[160px] justify-center">
          <Link
            to="/favorites"
            className="flex items-center text-gray-700 hover:text-blue-500"
            onClick={() => setSelectedPage('/favorites')}
            style={{ cursor: 'pointer' }}
          >
            {selectedPage === '/favorites' ? <HeartSelected /> : <HeartUnselected />}
          </Link>
        </li>
        <li className="flex items-center w-[160px] justify-center">
          <Link
            to="/home"
            className="flex items-center text-gray-700 hover:text-blue-500"
            onClick={() => setSelectedPage('/home')}
            style={{ cursor: 'pointer' }}
          >
            {selectedPage === '/home' ? <LocationSelected /> : <LocationUnSelected />}
          </Link>
        </li>
        <li className="flex items-center w-[160px] justify-center">
          <Link
            to="/details"
            className="flex items-center text-gray-700 hover:text-blue-500"
            onClick={() => setSelectedPage('/details')}
            style={{ cursor: 'pointer' }}
          >
            {selectedPage === '/details' ? <ListSelected /> : <ListUnSelected />}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;