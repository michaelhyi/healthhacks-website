import React, { useEffect, useState } from "react";
import { Profile, searchProfilesByEmail } from "../utils/mockApi";

interface SearchModalProps {
  isOpen: boolean;

  onSelect: (profile: Profile) => void;

  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onSelect,
  onClose,
}) => {
  const [searchResults, setSearchResults] = useState<Profile[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/allParticipantSheets");

        const data = await res.json();

        setData(data.values);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);

        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    let profiles: Profile[] = [];

    for (let i = 1; i < data!.length; i++) {
      //skips the first value since that is the labels

      let currRow: string[] = data[i];

      if (currRow.length >= 4 && currRow[4] != "") {
        let name: string = currRow[2] + " " + currRow[3];

        let ob: Profile = { id: i, email: currRow[4], name: name };

        profiles.push(ob);
      }
    }

    const results = await searchProfilesByEmail(profiles, searchTerm);

    setSearchResults(results);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          width: "50%",
          margin: "100px auto",
          backgroundColor: "white",
          padding: "20px",
          color: "black",
        }}
      >
        <h3>Search Profile</h3>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter email to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>

        <ul>
          {searchResults.map((profile) => (
            <li key={profile.id} onClick={() => onSelect(profile)}>
              {profile.name} - {profile.email}
            </li>
          ))}
        </ul>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SearchModal;
