import LanguageProvider from "./components/common/LanguageProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <LanguageProvider>
      {/* <Layout> */}
        <AppRouter />
      {/* </Layout> */}
    </LanguageProvider>
  );
}

export default App;
