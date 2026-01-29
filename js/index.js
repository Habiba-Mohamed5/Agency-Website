const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});






    const faqCards = document.querySelectorAll(".faq-card");
    faqCards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
    });

























document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stories-case').forEach(caseEl => {
    const tabs = caseEl.querySelectorAll('.stories-tab'); 
    const title = caseEl.querySelector('.stories-solution-title'); 
    const text = caseEl.querySelector('.stories-solution-txt'); 
    
    const solutionText = text.innerHTML.trim();

    const contentMap = {
      CHALLENGE: `CHALLENGE — our expertise in app development, we built an interactive mobile app with user-friendly features.
      The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms.
      Real-time data synchronization enabled users to access their data on multiple devices.`,

      SOLUTION: solutionText,

      RESULTS: `RESULTS — our expertise in app development, we built an interactive mobile app with user-friendly features.
      The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms.
      Real-time data synchronization enabled users to access their data on multiple devices.`
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.textContent.trim();
        title.textContent = tabName;
        text.innerHTML = contentMap[tabName] || '';
      });
    });
  });
});
