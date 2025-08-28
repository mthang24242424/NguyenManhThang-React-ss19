import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext<any>(null)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <h1>My themed app</h1>
      <button onClick={toggleTheme}>
        Toggle theme
      </button>
    </header>
  )
}

const Content = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <main>
      <p>Đây là nội dung của ứng dụng.</p>
      <p>Theme hiện tại: {theme}</p>
    </main>
  )
}

export default function Bai2() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  )
}
