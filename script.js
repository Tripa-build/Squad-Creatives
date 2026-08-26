document.addEventListener('DOMContentLoaded', function () {
  // Contact Form Handling
  var form = document.getElementById('squadContactForm');
  var status = document.getElementById('cf-status');
  var topicSelect = document.getElementById('cf-topic');
  var subjectField = document.getElementById('cf-subject');

  if (topicSelect && subjectField) {
    topicSelect.addEventListener('change', function () {
      subjectField.value = 'New inquiry — ' + topicSelect.value;
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.form-submit');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      status.textContent = '';
      status.className = 'form-status';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            status.textContent = 'Message sent — we\'ll get back to you shortly.';
            status.classList.add('success');
            form.reset();
          } else {
            status.textContent = 'Something went wrong. Please email us directly.';
            status.classList.add('error');
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong. Please email us directly.';
          status.classList.add('error');
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = 'Send Message';
        });
    });
  }

  // Mobile Navigation Toggle
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('nav.links');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});
