
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Si lo necesitas, asegúrate de importar FontAwesome correctamente
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; // Si lo necesitas, asegúrate de importar FontAwesome correctamente
import Swal from "sweetalert2";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const contexto = useContext(Context);
  
  const [dataUser, setDataUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  useEffect(() => {
    signupUser()
  }, []);

  const signupUser = async () => {
    try {
      const resp = await fetch("https://literate-space-potato-r5jxp4x4grxc5qq6-3000.app.github.dev/api/user", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": "ejemplo@gmail.com",
          "password": "********",
          "nombre": "Pepito"
        })
      });

      await fetchData(); 
        console.log('Registro exitoso');
    } catch (error) {
      console.log('Error en el registro:', error)
    }
  };

  
	
  async function fetchData() {
		try {
		  const response = await fetch("https://literate-space-potato-r5jxp4x4grxc5qq6-3000.app.github.dev/api/user");
		  const data = await response.json();
		  contexto.actions.signupUser(data);
		} catch (error) {
		  console.error("Error de información", error);
		}
	  }
	


  function handleRedirect() {
    actions.signupUser(dataUser)
      .then(() => {
        console.log("Registro exitoso");
        createUser();
        // Puedes considerar otras acciones después de createUser
        setTimeout(() => {
          navigate("/offers");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error en el registro:", error);
        // Mostrar un mensaje de error si es necesario
        setTimeout(() => {
          Swal.fire({
            title: "Error",
            text: "Email already exists",
            icon: "error",
            timer: 1000
          });
        }, 1000);
      });
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phone_number: "",
        address: "",
        acceptTerms: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Formato erróneo para el correo electrónico').required('Campo obligatorio'),
        password: Yup.string().min(8, 'Debe tener 8 caracteres o más').required('Campo obligatorio').matches(
          /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Debe contener al menos una mayúscula, un número y un símbolo'
        ),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
          .required('Campo obligatorio'),
        firstname: Yup.string()
          .min(2, 'Debe tener 2 caracteres o más')
          .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ][A-Za-zÁÉÍÓÚáéíóúÑñ]*$/, 'Debe comenzar con una letra mayúscula o minúscula ')
          .required('Campo obligatorio!'),
        lastname: Yup.string()
          .min(2, 'Debe tener 2 caracteres o más')
          .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ][A-Za-zÁÉÍÓÚáéíóúÑñ]*$/, 'Debe comenzar con una letra mayúscula o minúscula ')
          .required('Campo obligatorio!'),
        phone_number: Yup.string()
          .matches(/^\d+$/, 'Ingresa solo números')
          .min(7, 'Número debe tener al menos 7 dígitos')
          .required('El número telefónico es un campo obligatorio'),
        passport: Yup.string().min(2, 'Debe tener 2 caracteres o más').required('Campo obligatorio'),
        address: Yup.string()
          .min(5, 'Debe tener 5 caracteres o más')
          .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ][A-Za-zÁÉÍÓÚáéíóúÑñ0-9,.*!¡?¿\s- ]*$/, 'Debe comenzar con una letra mayúscula o minúscula ')
          .required('Campo obligatorio!'),

        acceptTerms: Yup.boolean()
          .required('Campo obligatorio')
          .oneOf([true], 'Debes aceptar los términos y condiciones para registrarte'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Call your async submit function here (You can also use your handleSubmit function)
        // console.log("Form submitted:", values);

        actions.signupUser(values)
          .then(() => {
            // Handle successful submission


            //console.log("Form submitted successfully!");
            Swal.fire({
              title: "Registro exitoso",
              text: "Tu registro fue todo un éxito!!! Revisa tu correo electrónico.",
              icon: "success",
              timer: 1000
            });
            setTimeout(() => {
              navigate("/offers");
            }, 1000);

          })
          .catch((error) => {
            // Handle submission error
            console.error("Error submitting form:", error);

            setTimeout(() => {
              Swal.fire({
                title: "Error",
                text: "Email already exists",
                icon: "error",
                timer: 1000
              });
            }, 1000);
          })
          .finally(() => {
            setSubmitting(false); // Set submitting to false after submission is done
          });
      }}
    >
      {formik => (

<div className="container-signup">
  <div className="content-signup">
    <div className='title-password'>¿Are you a Runner?</div>
    <div className='subtitle-password'>Rellena el formulario y empieza a disfrutar de ofertas exclusivas para nuestra comunidad!</div>

    <Form onSubmit={formik.handleSubmit}>
      <div className=" custom-input-password">
        <Field
          name="email"
          type="email"
          className="form-control"
        />
        <label
          htmlFor="email"
          className={formik.values.email ? 'input-label has-value' : 'input-label'}
        >
          Correo electrónico</label>
        <ErrorMessage name="email" />
      </div>

      <div className=" custom-input-password">
        <div className="d-flex">
          <label htmlFor="password"
            className={formik.values.password ? 'input-label has-value' : 'input-label'}
          >Contraseña</label>
          <Field name="password" type={showPassword ? 'text' : 'password'} className="form-control" />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        <ErrorMessage name="password" />
      </div>


      <div className="custom-input-password">
        <div className="d-flex">
          <label htmlFor="confirmPassword"
            className={formik.values.confirmPassword ? 'input-label has-value' : 'input-label'}
          >Confirmar Contraseña</label>

          <Field
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            className="form-control"
            onChange={(e) => {
              formik.handleChange(e);
              setPasswordsMatch(e.target.value === formik.values.password);
            }}
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>
        {passwordsMatch ? (
          <>
            <span>Las contraseñas coinciden.</span>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginLeft: '5px' }} />
          </>
        ) : null}

        <ErrorMessage name="confirmPassword" />
      </div>


      <div className=" custom-input-password">
        <label htmlFor="username" className={formik.values.username ? 'input-label has-value' : 'input-label'}>Nombre de usuario</label>
        <Field name="username" type="text" className="form-control" />
        <ErrorMessage name="username" />
      </div>

      <div className=" custom-input-password">
        <label htmlFor="firstname" className={formik.values.firstname ? 'input-label has-value' : 'input-label'}>Nombre</label>
        <Field name="firstname" type="text" className="form-control" />
        <ErrorMessage name="firstname" />
      </div>

      <div className=" custom-input-password">
        <label htmlFor="lastname" className={formik.values.lastname ? 'input-label has-value' : 'input-label'}>Apellido</label>
        <Field name="lastname" type="text" className="form-control" />
        <ErrorMessage name="lastname" />
      </div>


      <div className=" custom-input-password">
        <label htmlFor="address" className={formik.values.address ? 'input-label has-value' : 'input-label'}>Dirección</label>
        <Field name="address" type="text" className="form-control" />
        <ErrorMessage name="address" />
      </div>

      <div className="d-flex">

  
        <div className=" custom-input-signup-phone">
          <label htmlFor="phone_number" className={formik.values.phone_number ? 'input-label has-value' : 'input-label'}>Número de Teléfono</label>
          <Field name="phone_number" type="text" className="form-control" />
        </div>

      </div>
      <div>

        <ErrorMessage name="phone_prefix" /> <br />
        <ErrorMessage name="phone_number" />
      </div>


      
      <div className="d-flex">
        <div className="me-2">
          <Field type="checkbox" name="acceptTerms" />
        </div>
        <div>
          <span> Acepto los
            <Link to="/terms">
              <strong> términos y condiciones</strong>
            </Link>
          </span>
        </div>


      </div>
      <ErrorMessage name="acceptTerms" />
      <button type="submit" className="btn btn-primary reset-button-signup mt-2">Crear mi cuenta</button>
      <button type="button" onClick={handleRedirect} className='back-button-signup mt-2'>Volver</button>

    </Form>
  </div>
</div>
)}
</Formik>
);
};

export default SignUp