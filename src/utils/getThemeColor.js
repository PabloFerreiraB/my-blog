const getThemeColor = () => {
    const theme = typeof window !== "undefined" && window.__theme

    if (theme === 'dark') return '#101E26'
    if (theme === 'light') return '#fff'
}

export default getThemeColor