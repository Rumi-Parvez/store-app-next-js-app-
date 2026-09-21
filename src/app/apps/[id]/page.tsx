import Image from "next/image";
import Link from "next/link";

import { IAppData } from "@/Types/jsondata";

import {
  FaStar,
  FaDownload,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import InstallButton from "@/app/buttons/installbutton";



interface PageProps {
  params: Promise<{
    id: string;
  }>;
}


const AppsDetailsPage = async ({ params }: PageProps) => {


  const { id } = await params;

  const res = await fetch(
    `http://localhost:3001/app_api/${id}`
  );

  if (!res.ok) {
    throw new Error("App not found");
  }

  const app:IAppData = await res.json();

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">

      {/* Back */}
      <Link
        href="/apps"
        className="inline-flex items-center gap-2 text-sm text-base-content/60 hover:text-primary transition mb-8"
      >
        <FaArrowLeft />
        Back to Apps
      </Link>

      {/* Main Details */}
      <section className="rounded-3xl border border-base-300 bg-base-100 shadow-sm overflow-hidden">

        {/* Top */}
        <div className="p-6 md:p-10">

          <div className="flex flex-col md:flex-row gap-7">

            {/* Icon */}
            <Image
              src={app.icon}
              alt={app.name}
              width={150}
              height={150}
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-md"
            />

            {/* Info */}
            <div className="flex-1">

              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold">
                  {app.name}
                </h1>

                <span className="badge badge-primary">
                  {app.category}
                </span>
              </div>

              <p className="text-base-content/60 mt-2">
                Developed by{" "}
                <span className="font-semibold text-base-content">
                  {app.company}
                </span>
              </p>

              <p className="mt-5 text-base-content/70 leading-7 max-w-2xl">
                {app.shortDescription}
              </p>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-6 mt-6">

                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />

                  <span className="font-bold text-lg">
                    {app.reviews.rating
}
                  </span>

                  <span className="text-sm text-base-content/50">
                    Rating
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FaDownload className="text-primary" />

                  <span className="font-bold">
                    {app.reviews.reviewCount}
                  </span>

                  <span className="text-sm text-base-content/50">
                    Reviews
                  </span>
                </div>

              </div>

              {/* Install */}
              <div className="mt-7">
               
                  <InstallButton></InstallButton>
                
              </div>

            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-base-300 bg-base-200/40 grid grid-cols-2 md:grid-cols-4">

          <div className="p-5 text-center border-r border-base-300">
            <p className="text-xs text-base-content/50">
              Rating
            </p>
            <p className="font-bold text-xl mt-1">
              {app.ratings}
            </p>
          </div>

          <div className="p-5 text-center md:border-r border-base-300">
            <p className="text-xs text-base-content/50">
              Reviews
            </p>
            <p className="font-bold text-xl mt-1">
              {app.reviews.reviewCount
              }
            </p>
          </div>

          <div className="p-5 text-center border-r border-base-300">
            <p className="text-xs text-base-content/50">
              Category
            </p>
            <p className="font-bold mt-1">
              {app.category}
            </p>
          </div>

          <div className="p-5 text-center">
            <p className="text-xs text-base-content/50">
              Developer
            </p>
            <p className="font-bold mt-1 truncate">
              {app.company}
            </p>
          </div>

        </div>

      </section>

      {/* Description */}
      <section className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-6 md:p-8">

        <h2 className="text-2xl font-bold">
          About {app.name}
        </h2>

        <p className="mt-4 leading-8 text-base-content/70">
          {app.longDescription}
        </p>

      </section>

      {/* Features */}
      <section className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-6 md:p-8">

        <h2 className="text-2xl font-bold">
          Why you will love {app.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-success" />
            <span>Easy and user-friendly experience</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-success" />
            <span>Fast and reliable performance</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-success" />
            <span>Regularly updated application</span>
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-success" />
            <span>Designed for everyday use</span>
          </div>

        </div>

      </section>

    </main>
  );
};

export default AppsDetailsPage;