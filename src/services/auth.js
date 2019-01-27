export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

const setUser = user =>
  window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  let resp = false;
  if (username === `john@example.com` && password === `pass`) {
    setUser({
      name: `Johnny`,
      email: `john@example.com`,
    })
    resp = true
  }
  return resp;
    
  

}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.email
}

export const logout = (callback) => {
  setUser({})
  callback()
}