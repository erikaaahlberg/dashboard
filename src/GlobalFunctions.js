import React from 'react';

export const removeFromLocalStorage = () => {
    localStorage.removeItem('notes');
}

export const getTime = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const day = days[today.getDay()];
    const hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    min = this.addZero(min);
    sec = this.addZero(sec);
    return `${day} ${hour}:${min}:${sec}`;
}

export const addZero = (sec) => {
    if (sec < 10) {
      sec = "0" + sec;
    }
    return sec;
  }