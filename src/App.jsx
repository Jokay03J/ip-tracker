import { useEffect } from "react";
import { useState } from "react";
import Box from "./ui/Box";
import Input from "./ui/Input";
import Navbar from "./ui/Navbar";

function App() {
  const [ipText, setIpText] = useState("");
  const [response, setResponse] = useState({ lat: 0, lon: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status !== "success") return alert("error !");
        if (data.lon & data.lat) {
          setResponse(data);
        }
      });
  };

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status !== "success") return alert("error !");
        if (data.lon & data.lat) {
          setResponse(data);
        }
      });
    return () => {};
  }, []);

  return (
    <div className="h--screen w--screen" style={{ overflowX: "hidden" }}>
      <Navbar
        title={"ip-tracker"}
        items={[{ title: "Home", href: "/" }]}
      ></Navbar>
      <h1 className="d--flex justify--center my--1">ip tracker</h1>
      <form onSubmit={handleSubmit} className="d--flex justify--center">
        <Input
          placeholder={"entrer une ip"}
          className="rounded--xs border--1 border--solid border--red h--1 w--6-12 px--2"
          value={ipText}
          onChange={(e) => setIpText(e.target.value)}
        ></Input>
      </form>
      <Box
        className="my--1 w--6-6"
        style={{
          textAlign: "center",
        }}
      >
        {response.country ? <p>{response.country}</p> : null}
        {response.regionName ? <p>{response.regionName}</p> : null}
        {response.city ? <p>{response.city}</p> : null}
        {response.as ? <p>{response.as}</p> : null}
        {response.query ? <p>{response.query}</p> : null}
      </Box>
      <Box className="d--flex justify--center my--1 w--12-12 h--4-6">
        <iframe
          className="w--6-6 h--6-6 px--4 border--0"
          frameBorder={0}
          src={`https://maps.google.com/maps?q=${response.lat},${response.lon}&z=11&output=embed`}
        >
          <p>votre navigateur ne prend pas en charge</p>
        </iframe>
      </Box>
    </div>
  );
}

export default App;
