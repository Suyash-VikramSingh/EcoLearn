import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./pages/student/Login";

function App() {return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
