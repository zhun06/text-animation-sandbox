// Get all tabs and panels
const tabButtons = document.querySelectorAll('#tabs button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab; 

    // Remove 'active' from all panels
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Add 'active' to the target panel
    const panel = document.getElementById(target);
    panel.classList.add('active');

    // Update active button styling
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // button.classList.add('active');
  });
});