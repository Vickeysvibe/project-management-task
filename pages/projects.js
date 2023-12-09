import Layout from "@/components/layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    async function doit() {
      axios.get("/api/project").then((Response) => {
        setProject(Response.data);
        console.log(projects);
      });
    }
    doit();
  }, []);
  if (!projects) {
    return (
      <Layout>
        <div className=" h-full w-full flex justify-center items-center">
          <div>
            <Link
              href={"/project/create"}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Create project
            </Link>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div class="px-4">
          <div class="my-5">
            <h2 class="text-2xl font-semibold text-gray-900">Projects</h2>
          </div>

          {projects.map((projects) => (
            <div
              key={projects._id}
              class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3"
            >
              <Link
                href={"/project/" + projects._id}
                class="mb-6 rounded-lg bg-gray-100 p-6"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div>
                      <h3 class="text-base font-semibold text-gray-900">
                        {projects.name}
                      </h3>
                      <span class="block text-xs font-normal text-gray-500">
                        {projects.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p class="my-6 text-sm font-normal text-gray-500">
                  {projects.desc}
                </p>
                <div class="mt-6 flex items-center justify-between text-sm font-semibold text-gray-900">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mr-2 h-5 w-5 text-base text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                    <span class="mr-1">{projects.members.length}</span> Members
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
