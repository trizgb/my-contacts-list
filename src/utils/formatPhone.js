export const formatPhone = string => {
  return (
    string.substr(0, 3) + ' ' + string.substr(3, 3) + ' ' + string.substr(6, 3)
  )
}
