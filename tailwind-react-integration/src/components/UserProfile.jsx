
function UserProfile() {
  return (
    
    <div className="user-profile">
        <div className=" max-w-sm mx-auto bg-gray-100 p-8 my-20 rounded-xl shadow-md 
      hover:shadow-lg transition-shadow duration-300 ease-in-out">  
        <div className="flex flex-col items-center">
      <img src="https://via.placeholder.com/150" alt="User"   className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover mx-auto transition-transform duration-300 ease-in-out 
            hover:scale-110"/>
      <h1 className="mt-4 font-bold 
            text-lg md:text-xl 
            text-gray-800 
            transition-colors duration-300 ease-in-out
            hover:text-blue-500">John Doe</h1>
      <p className= "mt-2 text-sm md:text-base text-gray-600 text-center">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
       <button
          className="
            mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg 
            hover:bg-blue-700 transition-colors duration-300 ease-in-out
          "
        >
          View Profile
        </button>
        </div>
    </div>
  );
}

export default UserProfile;