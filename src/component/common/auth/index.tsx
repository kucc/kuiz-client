import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Auth = (children: any) => {
  const history = useHistory();
  const [authCookie] = useCookies(["accessToken"]);

  console.log("auth");
  const checkUserLogin = async () => {
    console.log(authCookie.email);
    if (!authCookie.email) {
      history.push("/login");
    }
  };

  useEffect(() => {
    console.log("실행");
    checkUserLogin();
  }, []);

  return children;
};

export default Auth;
