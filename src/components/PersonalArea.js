import React from "react";
import "./PersonalArea.css";

const PersonalArea = () => {
  return (
    <div className="personalArea">
      <section className="wrapperm">
        <div className="form-heading">
          <div className="titlem">Вход </div>
        </div>
        <form action="#">
          <div className="form-content">
            <div className="icon"></div>
            <input className="inputp" type="tel" placeholder="Телефон" />
          </div>
          <div className="form-content">
            <div className="icon"></div>
            <input className="inputp" type="password" placeholder="Пароль" />
          </div>
          <button className="enter">Войти</button>
        </form>
        <div className="link">
          Забыли пароль?
          <a href="#">Создать новую учетную запись</a>
        </div>
      </section>
    </div>
  );
};

export default PersonalArea;
