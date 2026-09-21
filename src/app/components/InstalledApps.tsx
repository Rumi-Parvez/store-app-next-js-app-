"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";

import { IsInstalled } from "@/context/installContext";
import { IAppData } from "@/Types/jsondata";

interface InstalledAppsProps {
  apps: IAppData[];
}

const InstalledApps = ({ apps }: InstalledAppsProps) => {
  const context = useContext(IsInstalled);

  if (!context) {
    throw new Error(
      "InstalledApps must be inside InstallContext"
    );
  }

  const { installedApps, uninstallApp } = context;

  const installedAppData = apps.filter((app) =>
    installedApps.includes(String(app.id))
  );

  const handleUninstall = (id: string, name: string) => {
    uninstallApp(id);
    toast.info(`${name} uninstalled successfully!`);
  };

  return (
    <main className="min-h-screen bg-base-200 px-4 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Your Installed Apps
          </h1>

          <p className="text-sm text-base-content/60 mt-3">
            Explore all your installed applications
          </p>
        </div>

        {/* Count + Sort */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">
            {installedAppData.length} Apps Found
          </h2>

          <select className="select select-sm select-bordered">
            <option>Sort By Size</option>
            <option>Sort By Rating</option>
            <option>Sort By Name</option>
          </select>
        </div>

        {/* Empty */}
        {installedAppData.length === 0 ? (
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body items-center text-center py-16">

              <div className="text-6xl mb-4">
                📱
              </div>

              <h2 className="text-2xl font-bold">
                No Apps Installed
              </h2>

              <p className="text-base-content/60 mt-2">
                You haven t installed any apps yet.
              </p>

              <Link
                href="/apps"
                className="btn btn-primary mt-5"
              >
                Explore Apps
              </Link>

            </div>
          </div>
        ) : (

          /* Installed Apps */
          <div className="space-y-3">

            {installedAppData.map((app) => (
              <div
                key={app.id}
                className="bg-base-100 rounded-xl border border-base-300 shadow-sm p-4"
              >

                <div className="flex items-center gap-4">

                  {/* App Icon */}
                  <Link href={`/apps/${app.id}`}>
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </Link>

                  {/* App Info */}
                  <div className="flex-1 min-w-0">

                    <Link
                      href={`/apps/${app.id}`}
                      className="font-semibold hover:text-primary transition"
                    >
                      {app.name}
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs">

                      <span className="text-success flex items-center gap-1">
                        <FaDownload />
                        {app.reviews.reviewCount}
                      </span>

                      <span className="text-warning flex items-center gap-1">
                        <FaStar />
                        {app.reviews.rating}
                      </span>

                      <span className="text-base-content/50">
                        {app.category}
                      </span>

                    </div>

                  </div>

                  {/* Uninstall */}
                  <button
                    onClick={() =>
                      handleUninstall(
                        String(app.id),
                        app.name
                      )
                    }
                    className="btn btn-success btn-sm"
                  >
                    Uninstall
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
};

export default InstalledApps;