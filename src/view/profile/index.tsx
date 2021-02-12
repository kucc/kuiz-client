import UserModel from "@/common/model/user";
import { RootState } from "@/modules";
import { getUserInfoAsync } from "@/modules/user";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [userData, setUserData] = useState({} as UserModel);
  const dispatch = useDispatch();

  const getUserINfo = () => {
    dispatch(getUserInfoAsync.request());
  };

  useEffect(() => {
    getUserINfo();
  }, [dispatch]);
  return (
    <>
      <h1>프로필</h1>
      {loading ? <h1>로딩중</h1> : <h1>{data?.email}</h1>}
    </>
  );
};

export default ProfilePage;
