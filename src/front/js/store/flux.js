const getState = ({ getStore, getActions, setStore }) => {




	// obtener el token del usuario para actualizar el store.isLoggedIn 
	//para saber cundo el usuario tiene un session abierta
	const token = localStorage.getItem("accessToken")
	//obtener el tipo de usuario desde el session storage
	const userTypeInStorage = localStorage.getItem("userType")

	const url = process.env.REACT_ENV_URL

	return {
		store: {
			message: null,
			isLoggedIn: token,
			userType: userTypeInStorage,

			favoritos: [],

			carreras: [],

			imageUrl: "",

			usuario: {
				apellido: "",
				direccion: "",
				email: "",
				id: "",
				nombre: "",
				telefono: ""
			},

			organizador: {
				email: "",
				nombre: "",
				telefono: "",
				organizacion: "",
				pagina_web: "",
				id: "",
			},

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			setImageUrl: (image) => {
				setStore({
					imageUrl: image,
				})
				console.log(getStore().imageUrl)
			},


			//funcion para actualizar el isLoggedIn y renderizar el componente navBar
			//solo cuando el usuario inicia session
			setIsLoggedIn: () => {
				setStore({
					isLoggedIn: true,
				})
			},

			//funcion para actualizar el isLoggedIn y renderizar el componente navBar
			//solo cuando el usuario cierra session
			setIsLoggedOut: () => {
				setStore({
					isLoggedIn: false,
				})
			},
			//funciones para modificar el tipo de usuario en el session storage
			setUserTypeToUsuario: () => {
				setStore({
					userType: "usuario"
				})
			},

			setUserTypeToOrganizador: () => {
				setStore({
					userType: "Organizador"
				})
			},



			//funcion para obtener la data del usuario una vez haya iniciado session
			getUserData: async () => {
				try {
					const token2 = localStorage.getItem("accessToken")
					const response = await fetch(url + "/user", {
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token2
						}
					});

					const responseToJson = await response.json()
					if (response.status == 200) {
						setStore({
							usuario: responseToJson
						});
						return responseToJson
					} else {
						return console.log("error status code: ", response.status)
					}

				} catch (error) {
					console.log(error);
				}
			},

			//funcion para obtener la data del organizador una vez haya iniciado session
			getOrganizadorData: async () => {
				try {
					const token3 = localStorage.getItem("accessToken")
					const organizadorResponse = await fetch(url + "/organizador", {
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token3
						}
					});
					const organizadorResponseToJson = await organizadorResponse.json()
					if (organizadorResponse.status == 200) {
						setStore({
							organizador: organizadorResponseToJson
						})
					} else {
						return console.log("error status code: ", organizadorResponse.status)
					}
				} catch (error) {
					console.log(error);
				}
			},



			getCarreras: async () => {
				try {
					const carreraResponse = await fetch(url + "/carrera");
					const carreraResponseToJson = await carreraResponse.json()
					if (carreraResponse.status == 200) {
						setStore({
							carreras: carreraResponseToJson
						});
					} else {
						return carreraResponseToJson
					}
				} catch (error) {
					console.log(error)
				}
			},

			//funcion para obtener puntuacion

			getPuntuacion: async () => {
				try {
					const puntuacionResponse = await fetch(url + "/puntuacion");
					const puntuacionResponseToJson = await puntuacionResponse.json()
					if (puntuacionResponseResponse.status == 200) {
						setStore({
							puntuacion: puntuacionResponseToJson
						});
					} else {
						return puntuacionResponseToJson
					}
				} catch (error) {
					console.log(error)
				}
			},

			//funcion para obtener los favoritos
			getFavorites: async () => {
				try {
					const token4 = localStorage.getItem("accessToken")
					const favoritoResponse = await fetch(url + "/favorito", {
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token4
						}
					})
					const favoritoResponseToJson = await favoritoResponse.json()
					if (favoritoResponse.status == 200) {
						setStore({
							favoritos: favoritoResponseToJson
						})
					}
				} catch (error) {
					console.log(error)
				}
			},

			//funcion para obtener resultados

			getResultados: async () => {
				try {
					const resultadosResponse = await fetch(url + "/ObtenerResultados/<int:carrera_id>");
					const resultadosResponseToJson = await resultadosResponse.json()
					if (resultadosResponse.status == 200) {
						setStore({
							puntuacion: resultadosResponseToJson
						});
					} else {
						return resultadosResponseToJson
					}
				} catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;
