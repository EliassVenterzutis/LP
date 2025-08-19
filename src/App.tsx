import { useEffect, useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Priceing from "./components/Pricing";
import Steps from "./components/Steps";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   if (name || email) {
  //     console.log("Form values updated:");
  //     console.log("Name:", name);
  //     console.log("Email:", email);
  //     console.log("Phone:", phone);
  //     console.log("Message:", message);
  //   }
  // }, [name, email, phone, message]);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     await addDoc(collection(db, "waitlist"), {
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       message: message,
  //       createdAt: serverTimestamp(),
  //     });
  //     setEmail("");
  //     setName("");
  //     setPhone("");
  //     setMessage("");
  //   } catch (err) {
  //     console.error("Error adding email:", err);
  //     alert("Error saving your email. Try again.");
  //   }
  // };

  useEffect(() => {
    // Only send to Firestore if both name and email are non-empty (your validation)
    if (name && email) {
      const sendData = async () => {
        try {
          await addDoc(collection(db, "waitlist"), {
            name,
            email,
            phone,
            message,
            created: serverTimestamp(),
          });
          // Clear inputs after successful submission
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          console.log("Form data saved to Firestore");
        } catch (err) {
          console.error("Error saving form data:", err);
          alert("Error saving your data. Try again.");
        }
      };

      sendData();
    }
  }, [name, email, phone, message]);

  return (
    <>
      <NavBar></NavBar>

      <Home setFormData={{ setName, setEmail, setPhone, setMessage }}></Home>

      <Features></Features>
      <Steps></Steps>

      <Priceing></Priceing>

      <Footer></Footer>
    </>
  );
}

export default App;
