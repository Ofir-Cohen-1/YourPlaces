import React from "react";
import UsersList from "../Components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ul",
      name: "Ofir",
      places: 3,
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
