import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/UploadButton.css"

export const UploadButton = () => {
  const [loaded, setLoaded] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");

  const { store, actions } = useContext(Context)


  // 1. third party script load
  useEffect(() => {
    // check to see if this script is already loaded and that we are in an 
    // environment that recognizes the window object
    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
    // if window is defined and script is not loaded and not in window add script
    if (typeof window !== "undefined" && !loaded && !cldScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "cloudinaryUploadWidgetScript");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  // 2. process results
  // the Upload Widget will send back status that could be used in a progress bar
  // we'll wait for success and the render the image to the page
  const processResults = (error, result) => {
    if (error) {
      console.log("error", error);
    }
    if (result && result.event === "success") {
      console.log(result);
      console.log("success", result.info.secure_url);
      setUploadedImage(result.info.secure_url);
      actions.setImageUrl(result.info.secure_url)
    }
  };

  // 3. open the widget
  // minmal upload widget configuration to allow for local and url uploads
  // a rendered button onclick event calls this function to open the widget
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dor5yvd0i",
        uploadPreset: "runnest",
        sources: ["local", "url"],
      },
      processResults
    );
  };

  // code includes a form to enter Cloud Name and Unsigned Preset
  // this allows for users to upload to their own Cloudinary project environment
  return (
    <div className="Contenedor">
      <img src={uploadedImage} alt="Imagen para subir" className="uploadedImage" />
      <button
        className="btn btn-dark"
        type="button"
        onClick={uploadWidget}
      >
        Subir foto
      </button>
    </div>
  );
}