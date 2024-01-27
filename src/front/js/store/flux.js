const getState = ({ getStore, getActions, setStore }) => {


	// obtener el token del usuario para actualizar el store.isLoggedIn 
	//para saber cundo el usuario tiene un session abierta
	const token = sessionStorage.getItem("accessToken")
	//obtener el tipo de usuario desde el session storage
	const userTypeInStorage = sessionStorage.getItem("userType")


	return {
		store: {
			message: null,
			isLoggedIn: token,
			userType: userTypeInStorage,

			usuario: {
				apellido: "",
				direccion: "",
				email: "",
				id: "",
				nombre: "",
				telefono: ""
			},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
					const token2 = sessionStorage.getItem("accessToken")
    				const url = "https://reimagined-space-spoon-qpjvjgqr7x936569-3001.app.github.dev/api/user"
					const response = await fetch(url, {
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token2
						}
					});
		
					const responseToJson = await response.json()
					if (response.status == 200) {
						setStore({
							usuario: responseToJson
						})
						return responseToJson
					} else {
						return "hubo un error"
					}
		
				} catch (error) {
					console.log(error)
				}
			},



			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
