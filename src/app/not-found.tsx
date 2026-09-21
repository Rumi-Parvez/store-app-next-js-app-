import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="text-center max-w-xl">

        <div className="text-8xl font-black text-primary/20">
          404
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mt-4">
          App Not Found
        </h1>

        <p className="text-base-content/60 mt-4 leading-7">
          Sorry, we couldn`t find the app you`re looking for.
          It may have been removed or the link may be incorrect.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">

          <Link
            href="/apps"
            className="btn btn-primary"
          >
            <FaSearch />
            Browse Apps
          </Link>

          <Link
            href="/"
            className="btn btn-outline"
          >
            <FaHome />
            Go Home
          </Link>

        </div>

      </div>
    </main>
  );
};

export default NotFound;