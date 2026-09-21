"use client";

import { useContext } from "react";
import { toast } from "react-toastify";

import { IsInstalled } from "@/context/installContext";

interface InstallButtonProps {
  appId: string;
  appName: string;
}

const InstallButton = ({
  appId,
  appName,
}: InstallButtonProps) => {
  const context = useContext(IsInstalled);

  if (!context) {
    throw new Error(
      "InstallButton must be inside InstallContext"
    );
  }

  const {
    installApp,
    uninstallApp,
    isInstalled,
  } = context;

  const installed = isInstalled(appId);

  const handleInstall = () => {
    installApp(appId);

    toast.success(`${appName} installed successfully!`);
  };

  const handleUninstall = () => {
    uninstallApp(appId);

    toast.info(`${appName} uninstalled successfully!`);
  };

  return (
    <button
      onClick={installed ? handleUninstall : handleInstall}
      className={`btn px-8 rounded-xl ${
        installed ? "btn-error" : "btn-primary"
      }`}
    >
      {installed ? "Uninstall" : "Install App"}
    </button>
  );
};

export default InstallButton;