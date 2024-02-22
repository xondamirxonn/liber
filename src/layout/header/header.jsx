import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Container, Stack } from "@mui/material";
// import { Search } from "./components/search/search";
import { Login } from "./components/auth/login";
import { HeaderWrapper } from "./header-style";
import { Rukn } from "./components/rukn/rukn";
import Search from "./components/search/search";
import { loadState } from "../../lib/storage";
import { request } from "../../request";
import { Route, useLocation, useNavigate } from "react-router-dom";
import profile from '../../assets/profile.png'

export const Header = () => {
  const navigate = useNavigate()
  const token = loadState("user-token");
  const [modal, setModal] = useState();

  const profiless = useLocation()
  

  const logout = () => {
    localStorage.removeItem("user-token")
    navigate("/", {replace: true}, setModal(false))
  }

  const profiles = () => {
    navigate("/profile", setModal(false))
  }

  const homee = () => {
    navigate("/", setModal(false))
  }

  console.log(token);
  return (
    <HeaderWrapper>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <Rukn />
          <Search />
          {token ? (
            <>
              {token.user.img ? (
                <img
                  onClick={() => setModal(!modal)}
                  className="w-[50px] h-[50px] rounded-full object-cover  cursor-pointer "
                  src={token?.user?.img}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => setModal(!modal)}
                  className="w-[50px] h-[50px] rounded-full object-cover cursor-pointer"
                  src={profile}
                  alt=""
                />
              )}
            </>
          ) : (
            <Login />
          )}

          {modal ? (
            <div className="p-5 bg-white shadow-2xl absolute right-20 top-[80px]  z-10 rounded-lg flex flex-col gap-3">
              {profiless.pathname === "/profile" ? (
                <button
                  onClick={homee}
                  className="border p-2 rounded-lg hover:bg-gray-200"
                >
                  Asosiy Oyna
                </button>
              ) : (
                <button
                  onClick={profiles}
                  className="border p-2 rounded-lg hover:bg-gray-200"
                >
                  Profilga o'tish
                </button>
              )}

              <button
                onClick={logout}
                className="border p-2 rounded-lg hover:bg-gray-200"
              >
                Chiqish
              </button>
            </div>
          ) : (
            ""
          )}
        </Stack>
      </Container>
    </HeaderWrapper>
  );
};
