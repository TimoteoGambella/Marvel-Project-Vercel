import { InputAdornment, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import logo from "../../assets/marvel.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import NavBarCategories from "../NavBarCategories/NavBarCategories";
import { UseApiContext } from "../../context/ApiContext";

const NavBar = () => {
  const {showCategories, setShowCategories, category}=useContext(UseApiContext)
  console.log(category);
   
 useEffect(()=>{
  if(category){
    setShowCategories(true)
  }
 },[])
 
  
  return (
    <div className="navbar-container d-flex-row">
      <Link to={"/"}>
        <img src={logo} alt="LOGO" /> 
      </Link>
      {showCategories===true && <NavBarCategories/>}
      <TextField
        placeholder="Search"
        className="searchbar font-family-marvel-roboto"
        InputProps={{
          className: "searchbar font-family-marvel-roboto",
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          "&.Mui-focused": {
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default NavBar;
