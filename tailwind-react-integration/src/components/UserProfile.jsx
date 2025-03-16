

function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-sm max-auto my-20 rounded-lg shadow-lg">
        <img className="rounded-full w-36 h-36 mx-auto" src="/JohnDoe.jpeg" alt="User" />
        <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-blue-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;