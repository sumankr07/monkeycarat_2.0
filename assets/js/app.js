document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('[data-link]');
    const content = document.getElementById('content');
  
    const loadPage = (url) => {
      fetch(url)
        .then(response => response.text())
        .then(html => {
          content.innerHTML = html;
          history.pushState(null, '', url);
        });
    };
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(e.target.getAttribute('href'));
      });
    });
  
    window.addEventListener('popstate', () => {
      loadPage(location.pathname);
    });
  });
  