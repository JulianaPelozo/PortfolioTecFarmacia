document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-bs-theme') === 'dark';
  html.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  document.querySelector('#themeToggle i').className = isDark ? 'bi bi-moon-stars' : 'bi bi-sun';
});


document.querySelectorAll('.filter-btns .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btns .btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('#projetos .col').forEach(card => {
      if(filter==='all' || card.dataset.cat===filter){
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const form = document.getElementById('contatoForm');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    if(!form.checkValidity()){
      e.stopPropagation();
      form.classList.add('was-validated');
    } else {
      const toast = new bootstrap.Toast(document.getElementById('successToast'));
      toast.show();
      form.reset();
      form.classList.remove('was-validated');
    }
  });
}