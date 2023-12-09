import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();
  const [name, setName] = useState();
  const [admin, setAdmin] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState();
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setList((prevList) => [...prevList, inputValue]);
      setInputValue("");
    }
  };
  const handleDeleteButtonClick = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };
  const createProj = async (e) => {
    e.preventDefault();
    const data = { name, admin, desc, type, members: list };
    await axios.post("/api/project", data);
    router.push("/projects");
  };
  return (
    <Layout>
      <div>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div class="text-gray-600">
                    <p class="font-medium text-lg">New project</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <form onSubmit={createProj} class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div class="md:col-span-5">
                        <label for="full_name">Project Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-5">
                        <label for="email">Admin Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="email@domain.com"
                          onChange={(e) => {
                            setAdmin(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-3">
                        <label for="address">description</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                      </div>

                      <div class="md:col-span-2">
                        <label for="city">project type</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        />
                      </div>
                      <div class="md:col-span-5">
                        <label for="email">Team members email</label>
                        <input
                          type="text"
                          name="members"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                        <button
                          onClick={handleAddButtonClick}
                          class=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          add
                        </button>
                      </div>
                      <div className="w-96">
                        <div class="flex flex-col">
                          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                              <div class="overflow-hidden">
                                <table class="min-w-full">
                                  <thead class="bg-gray-200 border-b">
                                    <tr>
                                      <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                      >
                                        no
                                      </th>
                                      <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                      >
                                        Members
                                      </th>
                                      <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                      >
                                        Options
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {list?.map((mem, index) => (
                                      <tr
                                        key={index}
                                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                      >
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          {index + 1}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          {mem}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          <button
                                            onClick={(e) => {
                                              e.preventDefault();
                                              handleDeleteButtonClick(index);
                                            }}
                                          >
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke-width="1.5"
                                              stroke="currentColor"
                                              class="w-6 h-6"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                              />
                                            </svg>
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end">
                          <button
                            type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
