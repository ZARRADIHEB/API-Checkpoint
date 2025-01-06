import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchData = async () => {
    try {
      setloading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 style={{ fontSize: "4rem" }}>List Of Users</h1>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {loading ? (
          <h1>Loading Data ...</h1>
        ) : (
          data.map(({ name, email, website }, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#eee",
                flexBasis: "350px",
                borderRadius: "14px",
              }}
            >
              <h2>User {index + 1} </h2>
              <h1 style={{ color: "teal" }}>{name}</h1>
              <p>
                <b>Email:</b> {email}
              </p>
              <h3>
                <b>Website:</b>{" "}
                <span style={{ fontWeight: "normal" }}>{website}</span>
              </h3>

              <hr />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UserList;
