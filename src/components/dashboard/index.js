import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Input from "../../components/input";
import Navbar from "../navbar";
import Button from "../button";
import axios from "axios";
import { config } from '../config'
export const loader=async()=>{
  try{
    let response = await axios.get(`${config.apiUrl}/posts`);
    console.log(response.data);
return response.data;
  }
  catch(error){
    console.log("Error", error.message);
  return null;
  }
}

const Dashboard = () => {
  const posts= useLoaderData();
  const [items, setItems] = useState(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [error,setError]= useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ItemsPerPage = 20; 

  
 /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data)
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);*/
 /* useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false)
      });
  }, []);
  */
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filteredItems = items.slice(
    (currentPage - 1) * ItemsPerPage,
    currentPage * ItemsPerPage
  );

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      id: id,
      title: title
    };
    console.log(obj.id)
    console.log(obj.title)
    items.push(obj);
    setItems([...items]);
    console.log(items);
    reset();

  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  }
  const handleEdit = (id) => {
    let find = items.find(item => item.id === id)
    if (find) {
      setTitle(find.title);
      setId(find.id);
      setIsModalOpen(true);

    }

  }
  const reset = () => {
    setTitle('');
    setId('');
  }
  const handleDelete = (id) => {
    let filter = items.filter(item => item.id !== id);
    setItems(filter);
  }
  return (
    <>
      <Navbar />

      <h2 className="text-center mt-8 mb-8 text-5xl">Dashboard</h2>
      <div className=" flex justify-center pt-0 mt-0 items-center h-2/6 ">

        <div className="border border-gray-300 w-3/5 bg-slate-400 shadow-md rounded mt-0 px-8 pt-8 pb-8 ">

          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-black">ID</th>
                <th className="px-4 py-2 text-black">Title</th>
                <th className="px-4 py-2 text-black">Actions</th>

              </tr>
            </thead>
           
        <tbody>
            {filteredItems.map((item) => {
          return(
              <tr key={item.id}>
                 {item.id &&<td className="border border-gray-700 px-4 py-2 text-gray-900 font-medium">
              {item.id}
            </td>}
               { item.title && <td className="border border-gray-700 px-4 w-full py-2 text-gray-900 font-medium">
                  {item.title}
                </td>}
                
                <td className="border border-gray-700 px-4 py-2 text-gray-900 font-medium">
                  <div className="flex flex-row mr-2">
                    <Button type="submit" size="small" onClick={() => handleEdit(item.id)} className="mr-4 w-12 bg-blue-500 hover:bg-blue-500 rounded-lg hover:text-gray-700">
                      Edit
                    </Button>
                    <Button
                      type="button"
                      size="small"
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
          );
})}
</tbody>
   
{error && <p>{error}</p>}

          </table>
          <Button
            className="flex flex-left mt-3 w-8 h-8 text-3xl bg-blue-500 rounded-lg hover:bg-blue-500 "
            type="button"

            onClick={() => setIsModalOpen(true)}
          >
            Add
          </Button>
          <div className="flex justify-between mt-4">
        <Button
          type="button"
          size="medium"
          className='disabled:bg-gray-800'
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          &larr;
        </Button>
        <Button
          type="button"
          size="medium"
          className='disabled:bg-gray-800'
          disabled={currentPage * ItemsPerPage >= items.length}
          onClick={handleNextPage}
        >
          &rarr;
        </Button>
        </div>
        </div>
      </div>
      <CreateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleClick={handleClick}
        title={title}
        setTitle={setTitle}
        id={id}
        setId={setId}
        handleModalClose={handleModalClose}

      />
    </>
  );
};

const CreateModal = ({ isModalOpen, handleClick, title, setTitle, id, setId, handleModalClose }) => {
  return (
    <>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        class={`fixed flex flex-center justify-center items-center mt-20  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${isModalOpen ? '' : 'hidden'} `}>
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={handleModalClose}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-white dark:text-white">
                Add new Book Info
              </h3>
              <form className="space-y-6" onSubmit={handleClick}>
              <div className="mb-6">

<Input label="Id" value={id} name="version" id="version" placeholder="Id" onChange={e => setId(e.target.value)} required />
</div>
                <div className="mb-6">

                  <Input label="Title" value={title} name="title" id="title" placeholder="title" type="text" onChange={e => setTitle(e.target.value)} required />
                </div>
               
                <div className="flex justify-center items-center">
                  <Button type="submit" variant='white' size="medium" className="mr-4 w-16">
                    Add
                  </Button>
                  <Button
                    type="button"
                    size="medium"
                    variant="danger"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </Button>
                </div>
                
              </form>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;