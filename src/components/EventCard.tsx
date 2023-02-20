import { EventDetailed } from "./types";
import styles from "../../styles/EventPage.module.css";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

export const EventCard = (event: EventDetailed) => {
  const inputEmail = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue: string = inputEmail.current.value;
    const eventId = router?.query.id;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
      if (!response.ok) throw new Error(`Error: ${response.status}`);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <div className={styles.container}>
      <h1>{event.title}</h1>
      <Image src={event.image} alt="" width="640" height="480" />
      <p>{event.description}</p>
      <form onSubmit={onSubmit} >
        <label>Get registered for this event </label>
        <input
        className={styles.input}
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please enter your email "
        />
        <button className={styles.button} type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EventCard;
