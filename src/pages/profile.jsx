import React from "react";
import { loadState } from "../lib/storage";
import profile from "../assets/profile.png";
import { Button } from "@mui/material";
import { request } from "../request";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";


export const Profile = () => {
  const token = loadState("user-token");
  const navigate = useNavigate()
  const Delete = () => {
    const userId = token.user.id;
    if (confirm("Rostan ham hisobni o'chirmoqchimisiz?")) {
      request.delete(`/users/${userId}`);
      localStorage.clear("user-token");
      navigate("/")
    } else toast("Bekor qilindi", { theme: "colored", type: "success" });
  };
  return (
    <div className="container-uz pt-5">
      <p>
        <span className="text-blue-600 ">Bosh sahifa</span> / Profile
      </p>
      {token ? (
        <div className="flex items-center gap-10 mt-10">
          <>
            {token.user.img ? (
              <img
                onClick={() => setModal(!modal)}
                className="w-[150px] h-[150px] rounded-full object-cover  cursor-pointer "
                src={token?.user?.img}
                alt=""
              />
            ) : (
              <img
                onClick={() => setModal(!modal)}
                className="w-[150px] h-[150px] rounded-full object-cover cursor-pointer"
                src={profile}
                alt=""
              />
            )}
          </>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-3xl">
              {token.user.name} {token.user.lastname}
            </h1>
            <p className="font-bold text-lg">+{token.user.phone}</p>
            <p>ID: {token.user.id}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <Button onClick={Delete}>Hisobni o'chirish</Button>
    </div>
  );
};
