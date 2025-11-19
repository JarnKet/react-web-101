import { Routes, Route } from "react-router";

// Layout
import RootLayout from "./components/RootLayout";
import PrivateLayout from "./components/PrivateLayout";

// Public Page
import Login from "./pages/auth/Login";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PostList from "./pages/post/PostList";
import PostDetail from "./pages/post/PostDetail";
import SearchPage from "./pages/SearchPage";
import UserList from "./pages/user/UserList";
import UserDetail from "./pages/user/UserDetail";
import MutatePost from "./pages/post/MutatePost";
import PhotoLists from "./pages/photos/PhotoLists";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="/private" element={<PrivateLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<PostList />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="posts/mutate" element={<MutatePost />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="users" element={<UserList />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="photos" element={<PhotoLists />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
