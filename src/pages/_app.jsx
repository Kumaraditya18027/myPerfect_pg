
import "../app/globals.css"; // Import your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <section>

      <main>
        <Component {...pageProps} />
      </main>
    </section>
  );
}

export default MyApp;
