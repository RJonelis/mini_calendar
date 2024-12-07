document.addEventListener('DOMContentLoaded', function() {

  const dayOfWeekElement = document.getElementById('dayOfWeek');
  const monthElement = document.getElementById('month');
  const dayElement = document.getElementById('day');
  const yearElement = document.getElementById('year');

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  dayOfWeekElement.textContent = today.toLocaleDateString('en-US', { weekday: 'long' });
  monthElement.textContent = today.toLocaleDateString('en-US', { month: 'long' });
  dayElement.textContent = today.getDate();
  yearElement.textContent = today.getFullYear();
});
