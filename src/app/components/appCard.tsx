import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

import { IAppData } from "@/Types/jsondata";

interface appCardProps {
    app : IAppData
}
const AppCard = ({app} : appCardProps) => {
    console.log(app);
    return (
         <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <div className="card-body p-4">

        {/* Icon + Name */}
        <div className="flex items-center gap-4">

          <Image
            src={app.icon}
            alt={app.name}
            width={400} height={400}
            className="w-20 h-20 rounded-2xl object-cover"
          />

          <div className="min-w-0">
            <h2 className="font-bold text-lg truncate">
              {app.name}
            </h2>

            <p className="text-sm text-gray-500 truncate">
              {app.company}
            </p>

            <div className="flex items-center gap-1 mt-2">
              <FaStar className="text-yellow-400 text-sm" />

              <span className="font-semibold text-sm">
                {app.ratings}
              </span>

              <span className="text-xs text-gray-400">
                ({app.reviews.reviewCount})
              </span>
            </div>
          </div>

        </div>

        {/* Category */}
        <div className="mt-4">
          <span className="badge badge-primary badge-sm">
            {app.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-3 line-clamp-2">
          {app.shortDescription}
        </p>

        {/* Button */}
        <div className="card-actions mt-4">

          <Link href={`/apps/${app.id}`} ><button className="btn btn-primary btn-sm w-full rounded-xl">
            View Details
          </button></Link>

        </div>

      </div>

    </div>
    );
};

export default AppCard;