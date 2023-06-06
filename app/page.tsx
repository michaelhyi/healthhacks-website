import HomeComponent from "./HomeComponent";
import readApplicationStatusById from "./actions/readApplicationStatusById";
import readUser from "./actions/readUser";

export default async function Home() {
  const user = await readUser();

  let whitelisted = false;

  if (user) whitelisted = await readApplicationStatusById({ userId: user.id });

  return <HomeComponent user={user} whitelisted={whitelisted} />;
}
