// Loading themes
const theme=localStorage.getItem("theme")

// Loading themes
if (theme==="dark") {
  document.documentElement.style.background="black";
  document.documentElement.style.color="white";
} else {
  document.documentElement.style.background="white";
  document.documentElement.style.color="black";
}
