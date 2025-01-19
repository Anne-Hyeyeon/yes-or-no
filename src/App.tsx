// App.tsx
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Opening from "./components/opening/Opening";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isOpening, setIsOpening] = useState(true);

  const handleEnter = () => {
    setIsOpening(false);
  };

  if (isOpening) {
    return <Opening onEnter={handleEnter} />;
  }

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
