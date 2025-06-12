const fetchAdvice = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data.slip;
  } catch (error) {
    console.error('Error:', error);
    return 'Could not fetch advice.';
  }
}

const showAdvice = async () => {
  const advice = document.getElementById("advice")
  const adviceNumber = document.getElementById("adviceNumber")
  const data = await fetchAdvice();
  advice.textContent = data.advice
  adviceNumber.textContent = `Advice #${data.id}`
}

const newAdvice = document.getElementById("newAdvice")
newAdvice.addEventListener("click", showAdvice)

window.addEventListener('DOMContentLoaded', showAdvice)



//hover style 
const container = document.querySelector(".container");
const THRESHOLD = 5;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight } = currentTarget;

  const offsetLeft = currentTarget.getBoundingClientRect().left;
  const offsetTop = currentTarget.getBoundingClientRect().top;


  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;

  const axisY = ((1 - horizontal * 2) * THRESHOLD).toFixed(2);

  const axisX = ((2 * vertical - 1) * THRESHOLD).toFixed(2);

  container.style.transform = `perspective(${clientWidth}px) rotateX(${axisX}deg) rotateY(${axisY}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  container.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!window.matchMedia("(prefers-reduced-motion)").matches) {
  container.addEventListener("mousemove", handleHover);
  container.addEventListener("mouseleave", resetStyles);
}
