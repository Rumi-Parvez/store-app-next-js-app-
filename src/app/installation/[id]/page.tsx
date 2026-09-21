import InstallationPage from "@/app/components/InstalledApps";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:3001/app_api/${id}`
  );

  if (!res.ok) {
    throw new Error("App not found");
  }

  const app = await res.json();

  return (
    <InstallationPage
      id={app.id}
      appName={app.name}
    />
  );
};

export default Page;