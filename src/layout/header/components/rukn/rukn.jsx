import React, { useState } from "react";
import { Stack, TextField, Select, MenuItem } from "@mui/material";

export const Rukn = () => {
  const [rukn, setRukn] = useState("Ruknlar");

  const handleChange = (e) => {
    setRukn(e.target.value);
  };
  return (
    <Stack>
      <Select sx={{width:"100px"}} onChange={handleChange} value={rukn}>
        <MenuItem selected disabled value="Ruknlar">Ruknlar</MenuItem>
        <MenuItem value="rukn1">Rukn 1</MenuItem>
        <MenuItem value="rukn2">Rukn 2</MenuItem>
        <MenuItem value="rukn3">Rukn 3</MenuItem>
      </Select>
    </Stack>
  );
};
