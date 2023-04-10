import React, { useState } from "react";
import { Profile } from "../utils/mockApi";
import SearchModal from "./SearchModal";

const ProfileBox: React.FC<{ profile?: Profile; onAdd: () => void }> = ({
  profile,
  onAdd,
}) => {
  if (profile) {
    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "lightgray",
        cursor: "pointer",
      }}
      onClick={onAdd}
    >
      <p>+</p>
    </div>
  );
};

const ProfileGrid: React.FC = () => {
  const [profiles, setProfiles] = useState<Array<Profile | undefined>>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState<
    number | null
  >(null);

  const handleProfileSelect = (profile: Profile) => {
    if (selectedProfileIndex !== null) {
      setProfiles((prevProfiles) => {
        const newProfiles = [...prevProfiles];
        newProfiles[selectedProfileIndex] = profile;
        return newProfiles;
      });
    }
    setSelectedProfileIndex(null);
  };

  const handleSubmit = async () => {};

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {profiles.map((profile, index) => (
          <ProfileBox
            key={index}
            profile={profile}
            onAdd={() => {
              setSelectedProfileIndex(index);
            }}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Profiles</button>
      <SearchModal
        isOpen={selectedProfileIndex !== null}
        onSelect={handleProfileSelect}
        onClose={() => setSelectedProfileIndex(null)}
      />
    </div>
  );
};

export default ProfileGrid;
