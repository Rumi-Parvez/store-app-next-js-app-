"use client";

import {
  createContext,
  useState,
  type ReactNode,
} from "react";

interface InstallContextType {
  installStatus: boolean;
  setInstallStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsInstalled = createContext<InstallContextType | null>(null);

const InstallContext = ({ children }: { children: ReactNode }) => {
  const [installStatus, setInstallStatus] = useState(false);

  return (
    <IsInstalled.Provider value={{ installStatus, setInstallStatus }}>
      {children}
    </IsInstalled.Provider>
  );
};

export default InstallContext;