const getThemeColor = () => {
    const theme = typeof window !== "undefined" && window.__theme

    if (theme === 'dark') return '#121212'
    if (theme === 'light') return '#fff'
}

export default getThemeColor