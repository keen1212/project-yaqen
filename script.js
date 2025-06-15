document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  main.style.opacity = 0;
  setTimeout(() => 
{
    main.style.opacity = 1;
  }, 200);
});
