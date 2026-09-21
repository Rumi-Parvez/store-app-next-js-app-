import InstalledApps from "@/app/components/InstalledApps";
import { IAppData } from "@/Types/jsondata";

const InstallationPage = async () => {
  const res = await fetch(
    "http://localhost:3001/app_api"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch apps");
  }

  const apps: IAppData[] = await res.json();

  return <InstalledApps apps={apps} />;
};

export default InstallationPage;