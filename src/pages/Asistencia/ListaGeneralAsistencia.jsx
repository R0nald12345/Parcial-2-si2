import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Encabezado_Asistencia from "../../components/Encabezado_Listas/Encabezado_Asistencia";
import { getDatoArea } from "../../api/apiService";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from 'xlsx';

const ListaGeneralAsistencia = () => {
  const [listaArea, setListaArea] = useState([]);
  const [opcionBusqueda, setOpcionBusqueda] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filtroAsistio, setFiltroAsistio] = useState("");
  const [filtroAtraso, setFiltroAtraso] = useState("");
  const [filtroNombre, setFiltroNombre] = useState("");

  useEffect(() => {
    const fetchingListaArea = async () => {
      try {
        const response = await getDatoArea();
        setListaArea(response);

        const opciones = response.map((area) => ({
          label: area.nombre,
          value: area.id,
        }));
        setOpcionBusqueda(opciones);
      } catch (error) {
        console.log("Error en Componente ListaGeneralAsistencia", error);
      }
    };
    fetchingListaArea();
  }, []);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const generarPDF = () => {
    const contenido = document.getElementById("contenidoParaPDF");

    html2canvas(contenido).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 210;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("lista_asistencia.pdf");
    });
  };

  const generarExcel = () => {
    const tablaDatos = document.getElementById("tablaAsistencia");
    const workbook = XLSX.utils.table_to_book(tablaDatos, { sheet: "Asistencias" });
    XLSX.writeFile(workbook, "lista_asistencia.xlsx");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-[90%] flex-col justify-center p-2 mb-2">
        <div className="bg-white rounded-xl py-2">
          <h3 className="text-3xl text-center font-semibold">
            Listado de Asistencias
          </h3>
        </div>

        <section className="w-full flex justify-between mt-5">
          <section className="flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Nombre</p>
            <div className="w-full flex bg-gray-300 border border-black rounded-xl px-2">
              <FaMagnifyingGlass className="mt-2" />
              <input
                type="text"
                placeholder="Buscar"
                className="w-full font-semibold rounded-xl py-1 bg-gray-300 px-1 outline-none"
                value={filtroNombre}
                onChange={(e) => setFiltroNombre(e.target.value)}
              />
            </div>
          </section>

          <section className="flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Área</p>
            <select
              className="py-1 px-1 rounded-md outline-none font-semibold"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="">Todas</option>
              {opcionBusqueda.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </section>

          <section className="flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Fecha Inicio</p>
            <input
              type="date"
              className="py-1 px-1 rounded-md outline-none font-semibold"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </section>

          <section className="flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Fecha Fin</p>
            <input
              type="date"
              className="py-1 px-1 rounded-md outline-none font-semibold"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </section>

          <section className="flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Falta</p>
            <select
              className="py-1 px-1 rounded-md outline-none font-semibold"
              value={filtroAsistio}
              onChange={(e) => setFiltroAsistio(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </section>

          <section className="flex items-center justify-end px-3 gap-3">
            <p className="font-new-font font-new-bold text-white">Atraso</p>
            <select
              className="py-1 px-1 rounded-md outline-none font-semibold"
              value={filtroAtraso}
              onChange={(e) => setFiltroAtraso(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </section>
        </section>
      </section>

      <section className="w-[90%] flex justify-end mb-5">
        <button
          onClick={generarPDF}
          className="py-2 px-5 mr-2 bg-red-600 text-white rounded-lg font-semibold"
        >
          Exportar PDF
        </button>
        <button
          onClick={generarExcel}
          className="py-2 px-5 bg-green-600 text-white rounded-lg font-semibold"
        >
          Exportar Excel
        </button>
      </section>

      <section className="w-[90%]" id="contenidoParaPDF">
        <Encabezado_Asistencia
          selectedOption={selectedOption}
          startDate={startDate}
          endDate={endDate}
          filtroAsistio={filtroAsistio}
          filtroAtraso={filtroAtraso}
          filtroNombre={filtroNombre}
        />
      </section>
    </div>
  );
};

export default ListaGeneralAsistencia;
