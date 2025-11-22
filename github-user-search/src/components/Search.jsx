import React, {useState} from "react";

const Search = ({onSearch}) => {
    // To store the input value
    const [userName, setUsername] = useState("");

    //Handle Form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!userName.trim())
            return;

        //Passing the username to the parent component
        onSearch(userName);

        //Clears input after search
        setName("");
    };

     return (
    
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    
  );

}

export default Search;