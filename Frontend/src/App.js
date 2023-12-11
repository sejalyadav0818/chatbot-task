import React, { useState } from "react";
import NavBar from "./components/NavBar";
import RegisterForm from "./pages/RegisterForm";
import { Route, Routes } from "react-router-dom";
import ShowData from "./pages/ShowData";
import ChatView from "./pages/ChatView";
import InitialScreen from "./pages/InitialScreen";
import LoginForm from "./pages/LoginForm";

function App() {
  const [searchText, SetSearchText] = useState("");
  const [user, setUser] = useState(null);

  const handleUserSubmit = (firstname, lastname) => {
    console.log(firstname, lastname,"dhweiqikqhihfqiw");
    setUser({ firstname, lastname });
  };

  return (
    <>
      {/* <NavBar searchText={searchText} SetSearchText={SetSearchText} /> */}
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="/edit/:id" element={<RegisterForm />} />
        <Route path="/show" element={<ShowData searchText={searchText} />} />
        <Route
          path="/chat"
          element={
            user ? (
              <ChatView user={user} />
            ) : (
              <LoginForm onUserSubmit={handleUserSubmit} />
              // <InitialScreen onSubmit={handleUserSubmit} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
