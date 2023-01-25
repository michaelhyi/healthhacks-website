import Container from "../components/Container";
import Head from "../components/Head";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <Container>
      <Head />
      <Statistics />
      <div className="flex justify-center pt-16">
        <div className="font-medium text-2xl opacity-75">{`EXPLORE THE HEALTH{HACKS} WAY`}</div>
      </div>
    </Container>
  );
}
