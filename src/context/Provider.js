import React, {createContext, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export const Provider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = (email, password, repeated_password) => {
    axios
      .post("https://efe-g-server.onrender.com/register", {
        email,
        password,
        repeated_password
      })
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(e => {
        console.log(`login error ${e}`);
      });
  };

  const login = (email, password) => {

    axios
      .post("https://efe-g-server.onrender.com/login", {
        email,
        password,
      })
      .then(async res => {
        setUserInfo(res.data);
        await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
        console.log(res.data);
      })
      .catch(e => {
        console.log(`login error ${e}`);
      });
  };

  // const logout = async () => {
  //   setUserInfo({});
  //  await AsyncStorage.removeItem("userInfo");
  // };


  // const isLoggedIn = async () => {
  //   try {
  //     setSplashLoading(true);

  //     let userInfo = await AsyncStorage.getItem("userInfo");
  //     userInfo = JSON.parse(userInfo);

  //     if (userInfo) {
  //       setUserInfo(userInfo);
  //     }

  //     setSplashLoading(false);
  //   } catch (e) {
  //     setSplashLoading(false);
  //     console.log(`is logged in error ${e}`);
  //   }
  // };




  return (
    <Context.Provider
      value={{
        userInfo,
        register,
        login,
      }}>
      {children}
    </Context.Provider>
  );
};