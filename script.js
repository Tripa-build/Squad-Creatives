document.addEventListener('DOMContentLoaded', function () {
  // Skeleton Preloader Dismissal
  var skeletonPreloader = document.getElementById('skeletonPreloader');
  if (skeletonPreloader) {
    function hideSkeleton() {
      if (skeletonPreloader && !skeletonPreloader.classList.contains('is-hidden')) {
        skeletonPreloader.classList.add('is-hidden');
      }
    }

    window.addEventListener('load', function () {
      setTimeout(hideSkeleton, 600);
    });

    // Fallback safety timeout
    setTimeout(hideSkeleton, 900);
  }

  // Contact Form Handling
  var form = document.getElementById('squadContactForm');
  var status = document.getElementById('cf-status');
  var topicSelect = document.getElementById('cf-topic');
  var subjectField = document.getElementById('cf-subject');

  if (topicSelect && subjectField) {
    topicSelect.addEventListener('change', function () {
      subjectField.value = 'New inquiry: ' + topicSelect.value;
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
            status.textContent = 'Message sent! We\'ll get back to you shortly.';
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

    // Auto-close menu when a link inside mobile nav is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }

  // Touch Device Handler for Team Cards Popup Overlay
  var teamCards = document.querySelectorAll('.team-framer-card');
  teamCards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      // Don't toggle card popup if clicking on a social button link
      if (e.target.closest('.framer-social-btn')) return;

      var isActive = card.classList.contains('is-touch-active');
      teamCards.forEach(function (c) { c.classList.remove('is-touch-active'); });
      if (!isActive) {
        card.classList.add('is-touch-active');
      }
    });
  });

  // Team Dropdown Toggle (Show 3 default, expand remaining 1)
  var toggleTeamBtn = document.getElementById('toggleTeamBtn');
  var teamDropdownWrap = document.getElementById('teamDropdownWrap');
  var toggleTeamText = document.getElementById('toggleTeamText');

  if (toggleTeamBtn && teamDropdownWrap) {
    toggleTeamBtn.addEventListener('click', function () {
      var isExpanded = teamDropdownWrap.classList.toggle('is-expanded');
      toggleTeamBtn.classList.toggle('is-active', isExpanded);

      if (toggleTeamText) {
        toggleTeamText.textContent = isExpanded
          ? 'Show Less Team Members'
          : 'View Remaining Team Member (1)';
      }
    });
  }

  // Broken Word Shatter & Particle Effect
  var brokenWord = document.getElementById('brokenWord');
  if (brokenWord) {
    function createShards(e) {
      var rect = brokenWord.getBoundingClientRect();
      var count = e && e.type === 'click' ? 14 : 7;

      for (var i = 0; i < count; i++) {
        var shard = document.createElement('span');
        shard.className = 'broken-shard';

        var size = Math.random() * 6 + 3;
        var isPolygon = Math.random() > 0.5;

        shard.style.width = size + 'px';
        shard.style.height = (isPolygon ? size * (Math.random() * 1.6 + 0.6) : size) + 'px';
        shard.style.background = Math.random() > 0.4 ? (Math.random() > 0.5 ? '#1D4ED8' : '#0A1930') : '#2563EB';

        var startX = (Math.random() - 0.1) * rect.width;
        var startY = (Math.random() - 0.1) * rect.height;
        shard.style.left = startX + 'px';
        shard.style.top = startY + 'px';

        var angle = Math.random() * Math.PI * 2;
        var distance = (Math.random() * 35 + 15) * (e && e.type === 'click' ? 2 : 1);
        var sx = Math.cos(angle) * distance;
        var sy = Math.sin(angle) * distance;
        var sr = (Math.random() - 0.5) * 720;

        shard.style.setProperty('--sx', sx + 'px');
        shard.style.setProperty('--sy', sy + 'px');
        shard.style.setProperty('--sr', sr + 'deg');

        brokenWord.appendChild(shard);

        (function (s) {
          setTimeout(function () {
            if (s.parentNode) {
              s.parentNode.removeChild(s);
            }
          }, 650);
        })(shard);
      }
    }

    function triggerShatter() {
      createShards({ type: 'click' });
      brokenWord.classList.add('is-shattered');
      setTimeout(function () {
        brokenWord.classList.remove('is-shattered');
      }, 700);
    }

    brokenWord.addEventListener('mouseenter', createShards);
    brokenWord.addEventListener('click', triggerShatter);

    // Auto-trigger breaking/shattering effect on site load or reload
    setTimeout(triggerShatter, 500);
  }

  // How We Work Interactive Workbench Controller
  var stepBtns = document.querySelectorAll('.process-step-btn');
  var stepContents = document.querySelectorAll('.process-content');
  var phaseTag = document.getElementById('processPhaseTag');
  var activeNumSpan = document.getElementById('wbActiveNum');
  var wbPrevBtn = document.getElementById('wbPrevBtn');
  var wbNextBtn = document.getElementById('wbNextBtn');
  var currentStep = 1;
  var totalSteps = 4;

  var phaseNames = [
    'PHASE 01 // DISCOVERY CONSOLE',
    'PHASE 02 // UI/UX ARCHITECTURE',
    'PHASE 03 // AGILE DEVELOPMENT SPRINT',
    'PHASE 04 // DEPLOYMENT & SCALING'
  ];

  function setActiveStep(stepNum) {
    if (stepNum < 1 || stepNum > totalSteps) return;
    currentStep = stepNum;

    stepBtns.forEach(function (btn) {
      var num = parseInt(btn.getAttribute('data-step'), 10);
      if (num === currentStep) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    stepContents.forEach(function (content, index) {
      if (index + 1 === currentStep) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    if (phaseTag) {
      phaseTag.textContent = phaseNames[currentStep - 1];
    }

    if (activeNumSpan) {
      activeNumSpan.textContent = '0' + currentStep;
    }
  }

  stepBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var num = parseInt(btn.getAttribute('data-step'), 10);
      setActiveStep(num);
    });
  });

  if (wbPrevBtn) {
    wbPrevBtn.addEventListener('click', function () {
      var prev = currentStep > 1 ? currentStep - 1 : totalSteps;
      setActiveStep(prev);
    });
  }

  if (wbNextBtn) {
    wbNextBtn.addEventListener('click', function () {
      var next = currentStep < totalSteps ? currentStep + 1 : 1;
      setActiveStep(next);
    });
  }
});

