import React, { createContext } from 'react';

/*
  Робота з контекстом:
  1. Створити контекст
  2. Покласти дані в контекст
  3. отримати дані там де вони потрібні
*/

// 1. Створити контекст
export const OurContext = React.createContext();

export const ThemeContext = createContext();

export const UserContext = createContext();