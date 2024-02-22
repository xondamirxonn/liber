import { Select, Stack, MenuItem, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { UserIcon } from "../../../../assets/icon/user-icon";
import { COLORS } from "../../../../config/color";
import { request } from "../../../../request";
import { saveState } from "../../../../lib/storage";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Login = () => {
  const navigate = useNavigate();
  const [lang, setLang] = React.useState("uz");
  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("")
  const selectLang = (e) => {
    setLang(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    request
      .post("/login", {
        email,
        password,
        
      })
      .then((res) => {
        saveState("user-token", res.data);
        console.log(res.data);
        navigate("/profile",  setModal(false) );
      }).catch((error) => {
        toast(error.response.data)
      })
  };

  const RegisterSubmit = (e) => {
    e.preventDefault()

    request.post("/register", {
      name,
      lastname,
      phone,
      email,
      password,
      img,
    }).then((res) => {
      saveState("user-token", res.data)
      console.log(res.data);
      navigate("/profile")
    }).catch((error) => {
      toast(error?.response?.data, {type: "error", theme: "colored"})
    })

  }
  return (
    <Stack direction="row" gap="20px" alignItems="center">
      <Select
        IconComponent={UserIcon}
        value={lang}
        sx={{ width: "105px", bgcolor: COLORS.secondary }}
        onChange={selectLang}
      >
        <MenuItem value={"uz"}>uz</MenuItem>
        <MenuItem value={"ru"}>ru</MenuItem>
        <MenuItem value={"eng"}>eng</MenuItem>
      </Select>
      <Button
        onClick={() => setModal(!modal)}
        startIcon={<UserIcon />}
        variant="contained"
      >
        Kirish
      </Button>
      {modal ? (
        <div className="border border-white rounded-lg bg-white p-10 shadow-xl absolute top-[30%] right-[35%] z-10">
          <form onSubmit={submit}>
            <TextField
              fullWidth
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex  items-center gap-3">
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "2rem" }}
              >
                Add
              </Button>
              <Button
                sx={{ marginTop: "2rem" }}
                variant="contained"
                onClick={() => setModal(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
          <h3 className="mt-3">
            Akkountingiz yo'qmi?{" "}
            <Link
              onClick={() => setRegister(!register) || setModal(false)}
             
              className="text-blue-800"
            >
              Ro'yxatdan o'tish
            </Link>
          </h3>
        </div>
      ) : (
        ""
      )}
      {register ? (
        <div className="border border-white rounded-lg bg-white p-10 shadow-xl absolute top-[15%] right-[25%] z-10">
          <h1>Ro'yxatdan o'tish</h1>

          <form onSubmit={RegisterSubmit}>
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="First Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="Last Name"
              type="text"
              onChange={(e) => setLastname(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="998xx xxx xx xx"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ marginTop: "1rem" }}
              placeholder="Profile for img"
              type="text"
              onChange={(e) => setImg(e.target.value)}
            />
            <div className="flex  items-center gap-3">
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "2rem" }}
              >
                Add
              </Button>
              <Button
                sx={{ marginTop: "2rem" }}
                variant="contained"
                onClick={() => setRegister(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </Stack>
  );
};
