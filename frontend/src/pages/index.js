import Head from "next/head";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import ListMovie from "@/components/ListMovie";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filmes &copy; 2025</title>
        <meta
          name="description"
          content="Consumo em React de uma API de filmes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <ListMovie />
        </Container>
      </main>
      <Footer />
    </>
  );
}
