import React from 'react';
import Link from "next/link";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
    return (
        <BaseLayout>

            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto mt-20 ">
              <div className="container">
                  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                      <Link href={"/sing-in"}>Sing In</Link>
                  </button>

                  (or)

                  <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                      <Link href={"sing-up"}>Create Account</Link>
                  </button>
              </div>
            </div>

        </BaseLayout>
    );
};

export default Home;