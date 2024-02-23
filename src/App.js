import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";

import NotFoundPage from "./components/NotFoundPage";
import AddForm from "./components/AddForm";
import BlogDetail from "./components/BlogDetail";
import EditForm from "./components/EditForm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/add-blog" element={<AddForm />} />
        <Route path="/edit-blog/:id" element={<EditForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
