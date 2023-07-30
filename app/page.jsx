"use client";
import style from "./loginpage.module.scss";

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location = "/menu";
  };

  return (
    <div className={style.MainContainer}>
      <form className={style.Form} onSubmit={handleSubmit}>
        <input
          className={style.FormInput}
          name="username"
          type="text"
          placeholder="Type your username"
        />
        <input
          className={style.FormInput}
          name="password"
          type="password"
          placeholder="Type your password"
        />
        <input className={style.SubmitBtn} type="submit" value="Log in" />
      </form>
    </div>
  );
}
