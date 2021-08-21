import React from 'react';
import RootStack from './src/nav/RootStack';

export const lightTheme = {
  backgroundColor: '#fff',
  color: '#000'
}

export const darkTheme = {
  backgroundColor: '#000',
  color: '#fff'
}

const initUserInfo = {
  name: 'Nguyen van A',
  age: '20',
  address: 'Ha Noi'
}

const initThemeContext = {
  theme: lightTheme,
  setTheme: (newValue: { backgroundColor: string, color: string }) => { }
}

export const UserContext = React.createContext({
  userInfo: initUserInfo,
  setUserInfo: (newValue: { name: string, age: string, address: string }) => { },
});

export const ThemeContext = React.createContext(initThemeContext)

const App = () => {
  const [userInfo, setUserInfo] = React.useState(initUserInfo);
  const [theme, setTheme] = React.useState(lightTheme);

  const valueUserContext = React.useMemo(
    () => ({ userInfo, setUserInfo }),
    [userInfo],
  );
  const valueThemeContext = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <UserContext.Provider value={valueUserContext}>
      <ThemeContext.Provider value={valueThemeContext}>
        <RootStack />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );


};

export default App;
