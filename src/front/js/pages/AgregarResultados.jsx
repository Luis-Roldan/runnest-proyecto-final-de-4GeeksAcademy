import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AgregarResultados.css";

export const AgregarResultados = () => {

    const [participantes, setParticipantes] = useState([
        { participante: "", edad: "", horas: "", minutos: "", segundos: "", carrera_id: "9" },
        { participante: "", edad: "", horas: "", minutos: "", segundos: "", carrera_id: "9" },
        { participante: "", edad: "", horas: "", minutos: "", segundos: "", carrera_id: "9" }
    ]);


    const [participante, setParticipante] = useState("")
    const [edad, setEdad] = useState("")
    const [horas, setHoras] = useState("")
    const [minutos, setMinutos] = useState("")
    const [segundos, setSegundos] = useState("")
    const [carrera_id, setCarrera_id] = useState("")


    const data = {
        participante: participante,
        edad: edad,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
        carrera_id: carrera_id

    }

    const [careerId, setCareerId] = useState("");

    const { store, actions } = useContext(Context);
    const url = process.env.REACT_ENV_URL;
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        actions.getCarreras();

    }, []);


    const carrera = store.carreras.find(carrera => carrera.id === careerId);
    if (carrera) {
        // Establecer el careerId con el id de la carrera encontrada
        setCareerId(carrera.id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Iterar sobre cada participante
        participantes.forEach(participante => {
            fetch(url + "/resultados", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setParticipante("");
                    setEdad("");
                    setHoras("");
                    setMinutos("");
                    setSegundos("");
                    setCarrera_id("")

                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                });
        });

        // Restablecer los estados después de enviar el formulario
        setParticipantes([
            { participante: "", edad: "", horas: "", minutos: "", segundos: "", carrera_id: 8 },
            { participante: "", edad: "", horas: "", minutos: "", segundos: "", carrera_id: 8 },
            { participante: "", edad: "", horas: "", minutos: "", segundos: "", carrera_id: 8 }
        ]);
    };

    const handleChange = (index, field, value) => {
        const newParticipantes = [...participantes];
        newParticipantes[index][field] = value;
        setParticipantes(newParticipantes);
    };

    return (
        <div>
            <div className="DatosDeLaCarrera">
                <h1>{`Nombre de la carrera: ${store.carreras_id?.nombre}`}</h1>
                <h2>{`Distancia: ${store.carreras[0]?.distancia}`}</h2>
                <h2>{`Lugar: ${store.carreras[0]?.ciudad}`}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col">Participante</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Tiempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {participantes.map((participante, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className="Participante">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="inputParticipante"
                                        value={participante.participante}
                                        onChange={(e) => handleChange(index, 'participante', e.target.value)}
                                    />
                                </td>
                                <td className="Edad">
                                    <input
                                        type="number"
                                        placeholder="Edad"
                                        min="0"
                                        max="120"
                                        className="inputEdad"
                                        value={participante.edad}
                                        onChange={(e) => handleChange(index, 'edad', e.target.value)}
                                    />
                                </td>
                                <td className="Time">
                                    <input
                                        type="number"
                                        placeholder="Horas"
                                        min="0"
                                        max="60"
                                        className="TimeInput"
                                        value={participante.horas}
                                        onChange={(e) => handleChange(index, 'horas', e.target.value)}
                                    />
                                    <span>:</span>
                                    <input
                                        type="number"
                                        placeholder="Minutos"
                                        min="0"
                                        max="60"
                                        className="TimeInput"
                                        value={participante.minutos}
                                        onChange={(e) => handleChange(index, 'minutos', e.target.value)}
                                    />
                                    <span>:</span>
                                    <input
                                        type="number"
                                        placeholder="Segundos"
                                        min="0"
                                        max="60"
                                        className="TimeInput"
                                        value={participante.segundos}
                                        onChange={(e) => handleChange(index, 'segundos', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary SubmitButtonForCareerRegistration">Enviar</button>
            </form>
        </div>
    );

    // const [participante, setParticipante] = useState("")
    // const [edad, setEdad] = useState("")
    // const [horas, setHoras] = useState("")
    // const [minutos, setMinutos] = useState("")
    // const [segundos, setSegundos] = useState("")
    // const [career_id, setCareer_id] = useState("")

    // const data = {
    //     participante: participante,
    //     edad: edad,
    //     horas: horas,
    //     minutos: minutos,
    //     segundos: segundos,
    //     career_id: career_id,
    // }


    // const { store, actions } = useContext(Context)

    // useEffect(() => { actions.getCarreras(); }, [])

    // const url = process.env.REACT_ENV_URL

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const token = localStorage.getItem("accessToken")


    //     fetch(url + "/resultados", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + token,
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);

    //             setParticipante("");
    //             setEdad("");
    //             setHoras("");
    //             setMinutos("");
    //             setSegundos("");


    //         })
    //         .catch((error) => {
    //             console.error("Error submitting form:", error);
    //         });

    // };

    // return (
    //     <div>
    //         <div className="DatosDeLaCarrera">
    //             <h1>{`Nombre de la carrera: ${store.carreras[0]?.nombre}`}</h1>
    //             <h2>{`Distancia: ${store.carreras[0]?.distancia}`}</h2>
    //             <h2>{`Lugar: ${store.carreras[0]?.ciudad}`}</h2>
    //         </div>
    //         <form>
    //             <table className="table ">
    //                 <thead>
    //                     <tr className="table-dark">
    //                         <th scope="col">#</th>
    //                         <th scope="col">Participante</th>
    //                         <th scope="col">Edad</th>
    //                         <th scope="col">Tiempo</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <th scope="row">1</th>
    //                         <td className="Participante">
    //                             {/* <input type="text" placeholder="nombre" className="inputParticipante" /> */}
    //                             <select aria-label="Default select example" className="form-select inputParticipante" onChange={(e) => setParticipante(e.target.value)}
    //                                 value={participante}>
    //                                 <option value="">Lista de Participantes</option>
    //                                 <option value="1">Participante 1</option>
    //                                 <option value="2">Participante 2</option>
    //                                 <option value="3">Participante 3</option>
    //                             </select>
    //                         </td>
    //                         <td className="Edad">
    //                             <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" onChange={(e) => setEdad(e.target.value)}
    //                                 value={edad} />
    //                         </td>
    //                         <td className="Time">
    //                             <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" onChange={(e) => setHoras(e.target.value)}
    //                                 value={horas} />
    //                             <span>:</span>
    //                             <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" onChange={(e) => setMinutos(e.target.value)}
    //                                 value={minutos} />
    //                             <span>:</span>
    //                             <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" onChange={(e) => setSegundos(e.target.value)}
    //                                 value={segundos} />
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <th scope="row">2</th>
    //                         <td className="Participante">
    //                             {/* <input type="text" placeholder="nombre" className="inputParticipante" /> */}
    //                             <select aria-label="Default select example" className="form-select inputParticipante" defaultValue="">
    //                                 <option value="">Lista de Participantes</option>
    //                                 <option value="1">Participante 1</option>
    //                                 <option value="2">Participante 2</option>
    //                                 <option value="3">Participante 3</option>
    //                             </select>
    //                         </td>
    //                         <td className="Edad">
    //                             <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" />
    //                         </td>
    //                         <td className="Time">
    //                             <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" />
    //                             <span>:</span>
    //                             <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" />
    //                             <span>:</span>
    //                             <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" />
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <th scope="row">3</th>
    //                         <td className="Participante">
    //                             {/* <input type="text" placeholder="nombre" className="inputParticipante" /> */}
    //                             <select aria-label="Default select example" className="form-select inputParticipante" defaultValue="">
    //                                 <option value="">Lista de Participantes</option>
    //                                 <option value="1">Participante 1</option>
    //                                 <option value="2">Participante 2</option>
    //                                 <option value="3">Participante 3</option>
    //                             </select>
    //                         </td>
    //                         <td className="Edad">
    //                             <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" />
    //                         </td>
    //                         <td className="Time">
    //                             <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" />
    //                             <span>:</span>
    //                             <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" />
    //                             <span>:</span>
    //                             <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" />
    //                         </td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </form>
    //         <button type="submit" className="btn btn-primary SubmitButtonForCareerRegistration" onClick={handleSubmit}>Enviar</button>
    //     </div>)
}