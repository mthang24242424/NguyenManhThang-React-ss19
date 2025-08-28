import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext<any>(null)

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "vi">("en")

  const changeLanguage = (lang: "en" | "vi") => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <header>
      Ngôn ngữ hiện tại:{" "}
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value as "en" | "vi")}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </header>
  )
}

const Content = () => {
  const { language } = useContext(LanguageContext)
  return (
    <main>
      {language === "en" ? (
        <h1>Welcome!</h1>
      ) : (
        <h1>Xin chào!</h1>
      )}
    </main>
  )
}

export default function Bai9() {
  return (
    <LanguageProvider>
      <Header />
      <Content />
    </LanguageProvider>
  )
}
