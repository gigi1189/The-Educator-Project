 
  function openPage2() {
    const box1 = document.querySelector('#interview-box-1');
    if (box1) {
      box1.style.display = 'none'; // 
      const box2 = document.querySelector('#interview-box-2');
    if (box2) {
      box2.style.display = 'block'; // Shows the 'interview-box-2' div
    }
  }
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  }, 100);
}
function openPage1() {
  const box2 = document.querySelector('#interview-box-2');
  if (box2) {
    box2.style.display = 'none'; // Hide interview-box-2
  }
  
  const box1 = document.querySelector('#interview-box-1');
  if (box1) {
    box1.style.display = 'block'; // Show interview-box-1
  }
  
  // Scroll back to the top of the page
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  }, 100);
}
