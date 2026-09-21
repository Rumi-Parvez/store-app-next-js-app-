"use client";

import { useContext } from "react";
import { toast } from "react-toastify";

import { IsInstalled } from "@/context/installContext";

const InstallButton = () => {
  const context = useContext(IsInstalled);

  if (!context) {
    throw new Error("InstallButton must be inside InstallContext");
  }

  const { installStatus, setInstallStatus } = context;


  const handleClickInstall = () =>{
    
        setInstallStatus(!installStatus)
      if(installStatus){
        toast.success(`your app has installed`)
      }
      else{
        toast.error(`it's has done to installing`)
      }
  }


  return (
    <button
      onClick={handleClickInstall}
      className="btn btn-primary px-8 rounded-xl"
    >
      {installStatus ? "Installed" : "Install App"}
    </button>
  );
};

export default InstallButton;