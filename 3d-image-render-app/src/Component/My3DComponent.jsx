import React from 'react'
import loading3d from "../assets/tenor.gif";
import localImage from "../assets/chevrolet_corvette_c8_stingray.glb"

function My3DComponent() {
    const modelRef = React.useRef();
    const imagePath =
      "https://ipfs.io/ipfs/QmNozRh5fLthbsCnDkYhSAW5Rj5U6YqGxViUvfgPF6tdra/";
      
    const getUrl = (url) =>{
        try{
            fetch(url)
              .then((data) => {
                if(data.status === 200){  
                    return data.url;
                }
              })
              .catch((e)=>{
                console.log(e)
              })
        }
        catch (e) {
            return e;
        }
    }

  return (
    <div>
      <model-viewer
        style={{ height: "90vh", width: "100vw" }}
        src={getUrl(imagePath) || localImage}
        allow="*"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster={loading3d}
        shadow-intensity="1"
        ref={(ref) => {
          modelRef.current = ref;
        }}
      ></model-viewer>
    </div>
  );
}

export default My3DComponent