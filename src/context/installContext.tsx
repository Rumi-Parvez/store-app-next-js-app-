"use client";

import {
  createContext,
  useState,
  type ReactNode,
} from "react";

interface InstallContextType {
  installedApps: string[];
  installApp: (id: string) => void;
  uninstallApp: (id: string) => void;
  isInstalled: (id: string) => boolean;
}

export const IsInstalled =
  createContext<InstallContextType | null>(null);

const InstallContext = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<string[]>([]);

  const installApp = (id: string) => {
    setInstalledApps((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  const uninstallApp = (id: string) => {
    setInstalledApps((prev) =>
      prev.filter((appId) => appId !== id)
    );
  };

  const isInstalled = (id: string) => {
    return installedApps.includes(id);
  };

  return (
    <IsInstalled.Provider
      value={{
        installedApps,
        installApp,
        uninstallApp,
        isInstalled,
      }}
    >
      {children}
    </IsInstalled.Provider>
  );
};

export default InstallContext;