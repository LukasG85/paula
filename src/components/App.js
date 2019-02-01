import React, { Component } from "react";
import styled from "styled-components";
import image from "../images/paula.jpg";
import imagePhone from "../images/paulaPhone.jpg";
import "../bootstrap.min.css";

import "./App.css";

class Countdown extends Component {
  state = {
    years: "",
    month: "",
    days: "",
    hours: "",
    mins: "",
    seconds: ""
  };

  getDate = () => {
    const dateMeetPaula = new Date("2/15/2014 21:15:00");

    const dateNow = new Date();
    const time = new Date(
      Math.abs(dateNow.getTime() - dateMeetPaula.getTime())
    );

    //Time calculations
    return this.setState({
      years: time.getFullYear() - 1970,
      month: time.getMonth(),
      days: time.getDate(),
      hours: time.getHours(),
      mins: time.getMinutes(),
      seconds: time.getSeconds()
    });
  };

  componentDidMount() {
    setInterval(this.getDate, 1000);
  }

  render() {
    const { years, month, days, hours, mins, seconds } = this.state;
    return (
      <CounterWrapper>
        <div className="landing-inner">
          <h1 className="comingsoon">Paulina i Łukasz</h1>
          <p>Razem od:</p>
          <div className="countdown row">
            <div className="item">
              {years}
              <span>Lat</span>
            </div>
            <div className="item">
              {month}
              <span>Miesięcy</span>
            </div>
            <div className="item">
              {days}
              <span>Dni</span>
            </div>
            <div className="item">
              {hours}
              <span>Godzin</span>
            </div>
            <div className="item">
              {mins}
              <span>Minut</span>
            </div>
            <div className="item">
              {seconds}
              <span>Sekund</span>
            </div>
          </div>
        </div>
      </CounterWrapper>
    );
  }
}

export default Countdown;

const CounterWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${imagePhone});
  background-position: center;
  background-size: cover;
  @media (min-width: 576px) {
    background-image: url(${image});
  }

  .landing-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding-top: 30px;
  }

  .comingsoon {
    margin-top: 3rem;
    font-size: 50px;
    p {
      font-size: 20px;
    }
  }

  .countdown {
    display: grid;
    justify-content: center;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 80px);
    font-size: 30px;
    overflow: hidden;
    margin: 0;

    @media (min-width: 350px) {
      grid-template-columns: repeat(3, 90px);
    }
    @media (min-width: 420px) {
      grid-template-columns: repeat(3, 160px);
      grid-gap: 20px;
      font-size: 50px;
    }

    @media (min-width: 1100px) {
      grid-template-columns: repeat(6, 160px);
    }
  }

  .item {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 10px;
    margin: 5px;
    opacity: 0.4;
    background: #000;
    color: #fff;
    @media (min-width: 420px) {
      padding: 20px;
    }
  }

  .item:first-child {
    opacity: 0.5;
  }

  .countdown span {
    display: block;
    font-size: 15px;
    @media (min-width: 420px) {
      font-size: 25px;
    }
  }
`;
