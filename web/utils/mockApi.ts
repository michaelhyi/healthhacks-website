export interface Profile {
  id: number;
  name: string;
  email: string;
}

const mockProfiles: Profile[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Carol', email: 'carol@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' },
];

export const searchProfilesByEmail = async (profiles: Profile[], search: string): Promise<Profile[]> => {
  return profiles.filter((profile) => profile.name.includes(search.toLowerCase()) || profile.email.includes(search.toLowerCase()));
};