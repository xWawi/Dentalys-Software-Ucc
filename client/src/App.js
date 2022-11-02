import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import { EditarProducto } from "./components/EditarProducto";
import { Header } from "./components/Header";
import { NuevoProducto } from "./components/NuevoProducto";


import Aside from "./components/Aside";
import HomeScreen from "./screens/layout/HomeScreen";
import LoginScreen from "./screens/auth/LoginScreen";

import AsideRoutes from "./screens/Aside/routes/AsideRoutes";

import AgendamientoPacienteScreen from "./screens/Aside/AgendamientoPacienteScreen"
import RecordatorioScreen from "./screens/RecordatorioScreen";
import PacientesScreen from "./screens/Aside/PacientesScreen";
import FinanzasScreen from "./screens/Aside/FinanzasScreen";
import InventarioScreen from "./screens/Aside/InventarioScreen"
import RadiografiaScreen from "./screens/Aside/RadiografiaScreen";


import Index from "./screens/IndexScreen"
import Steps from "./screens/Steps"

//Redux
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Router>


      <Provider store={store}>


        <Header />

        <div className="com-container">
          <Aside />
          <Routes>

            <Route path="aside/*" element={<AsideRoutes />} />

            <Route path="/steps" element={<Steps />} />


            <Route path="/agendamiento" element={<AgendamientoPacienteScreen />} />

            <Route path="/pacientes" element={<PacientesScreen />} />

            <Route path="/finanzas" element={<FinanzasScreen />} />

            <Route path="/radiografia" element={<RadiografiaScreen />} />

            <Route path="/Pacientes/editar/:id" element={<EditarProducto />} />

            <Route path="/inventario" element={<InventarioScreen />} />

            <Route path="/recordatorio" element={<RecordatorioScreen />} />

            <Route path="/login" element={<LoginScreen />} />

          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;