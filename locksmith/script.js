// Open Modal
function openModal() {
  document.getElementById('ctaModal').style.display = 'block';
}

// Close Modal
function closeModal() {
  document.getElementById('ctaModal').style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById('ctaModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
