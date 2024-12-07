
import "../app/globals.css"; // Import your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>My Perfect Pg</title>
        <meta name="Perfect Pg" content="Pg NearBy you" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </section>
  );
}

export default MyApp;
