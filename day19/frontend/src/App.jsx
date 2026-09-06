import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/posts/post.context.jsx";
import { FollowContextProvider } from "./features/posts/follow.context.jsx";

function App() {
  return (
    <AuthProvider>
      <FollowContextProvider>
        <PostContextProvider>
          <RouterProvider router={router} />
        </PostContextProvider>
      </FollowContextProvider>
    </AuthProvider>
  );
}

export default App;
