import "./App.css";
import { IconShare } from "./assets/img/IconShare";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";
import { Share } from "./components/Share/Share";

import Michelle from "./assets/img/avatar-michelle.jpg";
import MainImg from "./assets/img/drawers.jpg";
import { AuthorInfo } from "./components/AuthorInfo/AuthorInfo";
import { CardContent } from "./components/CardContent/CardContent";

function App() {
  return (
    <>
      <Card img={MainImg}>
        <CardContent />
      </Card>

      <Footer />
    </>
  );
}

export default App;
