document.addEventListener('DOMContentLoaded', function () {

  // Lucide Icons Auto-Initializer
  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  // ==========================================================================
  // 1. PRODUCTS SHOWCASE STATE ENGINE (RYZON, TRIPA, DUELLA)
  // ==========================================================================
  const productData = {
    ryzon: {
      category: "AI Fintech & Conversational Banking · Client: Ryzon Financial Tech",
      title: "Ryzon",
      desc: "An AI-powered banking assistant executing complex financial operations via natural language with banking-grade security. Ryzon transforms high-friction treasury operations into effortless natural language commands. Requests run through multi-factor cryptographic authorization, anomaly detection models, and hard limit enforcement before settlement.",
      pills: ["Natural Language AI", "Banking API", "Zero-Trust Auth", "Real-time WebSockets"],
      specs: "<div><strong>Frontend:</strong> React 19 + TypeScript + Motion Kinetic UI</div><div><strong>Backend Engine:</strong> Event-driven Microservices + Rust Settlement Worker</div>",
      quote: '"Squad Creatives took an intimidating regulatory and technical hurdle and turned it into the cleanest banking experience on the continent."',
      metrics: [
        { num: "< 450ms", label: "Settlement Speed" },
        { num: "99.98%", label: "Operational Accuracy" },
        { num: "74%", label: "Manual Workload Cut" }
      ],
      terminal: [
        { text: '"Transfer ₦50,000 to Logistics Dept"', type: 'cmd' },
        { text: '<i data-lucide="check" class="icon-inline"></i> AUTH MFA VERIFIED  |  HSM Hash: #0e9f4', type: 'status' },
        { text: 'Settlement Execution: 280ms via NIP Core', type: 'exec' }
      ],
      deliverables: [
        "Conversational Banking Parser",
        "Dual-Key Approval Gateway",
        "Real-time Audit Ledger UI",
        "Multi-currency Automated Routing"
      ]
    },
    tripa: {
      category: "Logistics, Transit & Fleet Systems · Client: Tripa Transit Mobility",
      title: "Tripa",
      desc: "An interstate ticketing and fleet management platform built for African transit operators, managing routes, seats, and passengers live. Built on the ground to address the chaotic reality of interstate transit terminals, Tripa unifies passenger ticketing, manifests, fleet tracking, fuel telemetry, and QR check-in gates into an offline-tolerant architecture.",
      pills: ["Fleet Telematics", "Seat Inventory Engine", "QR Ticketing", "Offline-First DB"],
      specs: "<div><strong>Frontend:</strong> Next.js App Router + Tailwind + Offline Sync</div><div><strong>Backend Engine:</strong> Go / gRPC High-Throughput Inventory Hub</div>",
      quote: '"Terminal dispatchers who struggled with paper logs now process 50-passenger buses in under 3 minutes."',
      metrics: [
        { num: "450K+", label: "Monthly Tickets" },
        { num: "-65%", label: "Terminal Wait Time" },
        { num: "+38%", label: "Route Efficiency" }
      ],
      terminal: [
        { text: 'ROUTE #LAG-ABJ-04  |  SEAT 12 RESERVED', type: 'cmd' },
        { text: '<i data-lucide="check" class="icon-inline"></i> QR MANIFEST ISSUED  |  OFFLINE CACHE: OK', type: 'status' },
        { text: 'Terminal Boarding Throughput: 3.2s per passenger', type: 'exec' }
      ],
      deliverables: [
        "Real-time Interactive Bus Seat Selector",
        "Driver Telemetry & Dispatch Dashboard",
        "Thermal Printer Handheld POS App",
        "Passenger Instant SMS/WhatsApp Pass"
      ]
    },
    duella: {
      category: "Crypto-to-Fiat Liquidity Engine · Client: Duella Offramp Protocols",
      title: "Duella",
      desc: "A crypto-to-Naira offramp engine converting digital assets directly into spendable bank transfers with automated liquidity pools. Duella eliminates peer-to-peer spreads and slow manual settlement. Leveraging automated liquidity market makers, it bridges stablecoins directly into Nigerian NIP bank accounts within seconds.",
      pills: ["Instant Swap", "Naira Liquidity Pools", "Bank Offramp", "Zero Hidden Spread"],
      specs: "<div><strong>Frontend:</strong> React Web3 Core + Ultra-low Latency Price Ticker</div><div><strong>Backend Engine:</strong> Node.js Cluster + Distributed Redis Quote Cache</div>",
      quote: '"Zero hidden spread, zero awkward waiting. It simply deposits the exact Naira into your bank account."',
      metrics: [
        { num: "18s avg", label: "Settlement Time" },
        { num: "3.4%", label: "Spread Savings" },
        { num: "$12M+", label: "Volume Processed" }
      ],
      terminal: [
        { text: '₿ DIGITAL ASSET (USDT/BTC) → AUTOMATED SWAP', type: 'cmd' },
        { text: '₦ SPENDABLE NAIRA IN BANK  |  SPREAD: 0.0%', type: 'status' },
        { text: 'Direct Bank Wire Settled: 16 seconds average', type: 'exec' }
      ],
      deliverables: [
        "Dynamic Slippage-Free Order Routing",
        "Instant Webhook NIP Settlement Pipeline",
        "Institutional Treasury Portal",
        "Automated Compliance & AML Verification"
      ]
    }
  };

  const productBtns = document.querySelectorAll('.product-tab-btn');
  const prodMetaCategory = document.getElementById('prodMetaCategory');
  const prodTitle = document.getElementById('prodTitle');
  const prodDesc = document.getElementById('prodDesc');
  const prodPills = document.getElementById('prodPills');
  const prodSpecsGrid = document.getElementById('prodSpecsGrid');
  const prodQuote = document.getElementById('prodQuote');
  const prodMetricsRow = document.getElementById('prodMetricsRow');
  const prodTerminalBox = document.getElementById('prodTerminalBox');
  const prodDeliverablesList = document.getElementById('prodDeliverablesList');

  function renderProduct(key) {
    const data = productData[key];
    if (!data) return;

    if (prodMetaCategory) prodMetaCategory.textContent = data.category;
    if (prodTitle) prodTitle.textContent = data.title;
    if (prodDesc) prodDesc.textContent = data.desc;
    if (prodQuote) prodQuote.textContent = data.quote;
    if (prodSpecsGrid) prodSpecsGrid.innerHTML = data.specs;

    if (prodPills) {
      prodPills.innerHTML = data.pills.map(p => `<span class="prod-tech-pill mono">${p}</span>`).join('');
    }

    if (prodMetricsRow) {
      prodMetricsRow.innerHTML = data.metrics.map(m => `
        <div class="metric-box">
          <div class="num">${m.num}</div>
          <div class="label mono">${m.label}</div>
        </div>
      `).join('');
    }

    if (prodTerminalBox) {
      prodTerminalBox.innerHTML = data.terminal.map(t => `
        <div class="terminal-line ${t.type}">${t.text}</div>
      `).join('');
    }

    if (prodDeliverablesList) {
      prodDeliverablesList.innerHTML = data.deliverables.map(d => `<li>${d}</li>`).join('');
    }

    initIcons();
  }

  productBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const key = btn.getAttribute('data-prod');
      productBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProduct(key);
    });
  });

  // ==========================================================================
  // 2. WORKBENCH PROTOCOL STEP ENGINE (STEPS 1-4)
  // ==========================================================================
  const wbStepsData = {
    1: {
      header: "PHASE 01 PROTOCOL",
      title: "We sit with the actual problem, not the assumed one.",
      desc: "Before writing code or building screens, we audit who the problem affects, why existing workarounds fail, and what real success looks like.",
      flow: `
        <div class="flow-node">Assumed Bug<br><span style="color:var(--text-dim);">(Surface Symptom)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Diagnose <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Root Cause<br><span style="color:var(--crimson-vibrant);">(Real Issue)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Map <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Output Scope<br><span style="color:var(--text-main);">(Actionable Spec)</span></div>
      `
    },
    2: {
      header: "PHASE 02 PROTOCOL",
      title: "We map the solution around real human behavior.",
      desc: "Every layout and interaction is engineered around intuitive user paths. We eliminate friction points before a single line of frontend code is implemented.",
      flow: `
        <div class="flow-node">User Flow Map<br><span style="color:var(--text-dim);">(Wireframes)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Design <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Design Tokens<br><span style="color:var(--crimson-vibrant);">(UI Components)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Test <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Click Prototype<br><span style="color:var(--text-main);">(User Validated)</span></div>
      `
    },
    3: {
      header: "PHASE 03 PROTOCOL",
      title: "Engineers build in the open with zero surprises.",
      desc: "Our engineers sprint in transparent cycles with bi-weekly staging builds, live progress updates, and automated security checks.",
      flow: `
        <div class="flow-node">Clean Architecture<br><span style="color:var(--text-dim);">(TypeScript/Rust)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Build <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">CI/CD Pipeline<br><span style="color:var(--crimson-vibrant);">(Automated Audit)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Deploy <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Staging Build<br><span style="color:var(--text-main);">(Live Preview)</span></div>
      `
    },
    4: {
      header: "PHASE 04 PROTOCOL",
      title: "Launch is the start, not the finish line.",
      desc: "Deployment marks the transition to active monitoring. We stay on to maintain 99.99% uptime, track usage metrics, and scale seamlessly.",
      flow: `
        <div class="flow-node">Zero-Downtime<br><span style="color:var(--text-dim);">(Production Push)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Monitor <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Telemetry SLA<br><span style="color:var(--crimson-vibrant);">(99.99% Uptime)</span></div>
        <div class="flow-arrow"><i data-lucide="arrow-right"></i> Scale <i data-lucide="arrow-right"></i></div>
        <div class="flow-node">Continuous Growth<br><span style="color:var(--text-main);">(Optimization)</span></div>
      `
    }
  };

  let currentWbStep = 1;
  const wbStepBtns = document.querySelectorAll('.wb-step-btn');
  const wbDisplayHeader = document.getElementById('wbDisplayHeader');
  const wbDisplayTitle = document.getElementById('wbDisplayTitle');
  const wbDisplayDesc = document.getElementById('wbDisplayDesc');
  const wbFlowchart = document.getElementById('wbFlowchart');
  const wbCounter = document.getElementById('wbCounter');
  const wbPrevBtn = document.getElementById('wbPrev');
  const wbNextBtn = document.getElementById('wbNext');

  function renderWbStep(stepNum) {
    if (stepNum < 1 || stepNum > 4) return;
    currentWbStep = stepNum;

    wbStepBtns.forEach(btn => {
      const s = parseInt(btn.getAttribute('data-step'), 10);
      if (s === currentWbStep) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const d = wbStepsData[currentWbStep];
    if (wbDisplayHeader) wbDisplayHeader.textContent = d.header;
    if (wbDisplayTitle) wbDisplayTitle.textContent = d.title;
    if (wbDisplayDesc) wbDisplayDesc.textContent = d.desc;
    if (wbFlowchart) wbFlowchart.innerHTML = d.flow;
    if (wbCounter) wbCounter.textContent = '0' + currentWbStep + ' / 04';

    initIcons();
  }

  wbStepBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const s = parseInt(btn.getAttribute('data-step'), 10);
      renderWbStep(s);
    });
  });

  if (wbPrevBtn) {
    wbPrevBtn.addEventListener('click', function () {
      const p = currentWbStep > 1 ? currentWbStep - 1 : 4;
      renderWbStep(p);
    });
  }

  if (wbNextBtn) {
    wbNextBtn.addEventListener('click', function () {
      const n = currentWbStep < 4 ? currentWbStep + 1 : 1;
      renderWbStep(n);
    });
  }

  // ==========================================================================
  // 3. FAQ ACCORDION ENGINE
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const qBtn = item.querySelector('.faq-question');
    if (qBtn) {
      qBtn.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // 4. WEB3FORMS CONTACT FORM SUBMISSION
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'SENDING REQUEST...';
      }
      if (formStatus) {
        formStatus.textContent = '';
        formStatus.style.color = 'var(--text-muted)';
      }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            if (formStatus) {
              formStatus.textContent = 'Request received! We will reach out within 24 hours.';
              formStatus.style.color = '#00FF66';
            }
            contactForm.reset();
          } else {
            if (formStatus) {
              formStatus.textContent = 'Something went wrong. Please email Ryzon.build@gmail.com directly.';
              formStatus.style.color = 'var(--crimson-vibrant)';
            }
          }
        })
        .catch(() => {
          if (formStatus) {
            formStatus.textContent = 'Network error. Please email Ryzon.build@gmail.com directly.';
            formStatus.style.color = 'var(--crimson-vibrant)';
          }
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'SEND REQUEST <i data-lucide="send"></i>';
            initIcons();
          }
        });
    });
  }

  // ==========================================================================
  // 5. START A PROJECT MODAL ENGINE
  // ==========================================================================
  const projectModal = document.getElementById('projectModal');
  const openModalBtn = document.getElementById('openProjectModal');
  const closeModalBtn = document.getElementById('closeProjectModal');
  const projectModalForm = document.getElementById('projectModalForm');
  const modalSubmitBtn = document.getElementById('modalSubmitBtn');
  const modalFormStatus = document.getElementById('modalFormStatus');
  const disciplinePillsGrid = document.getElementById('disciplinePillsGrid');
  const selectedDisciplinesInput = document.getElementById('selectedDisciplinesInput');

  // Track selected disciplines
  const selectedDiscs = new Set(['Fullstack Web & Mobile MVP']);

  function updateSelectedDisciplinesInput() {
    selectedDisciplinesInput.value = Array.from(selectedDiscs).join(', ');
  }

  function openModal() {
    if (!projectModal) return;
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    initIcons();
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Close on overlay backdrop click
  if (projectModal) {
    projectModal.addEventListener('click', function (e) {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Discipline Pill toggle logic
  if (disciplinePillsGrid) {
    disciplinePillsGrid.querySelectorAll('.disc-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        const disc = pill.getAttribute('data-disc');
        const isActive = pill.classList.contains('active');

        if (isActive) {
          pill.classList.remove('active');
          pill.querySelector('.pill-icon').textContent = '+';
          selectedDiscs.delete(disc);
        } else {
          pill.classList.add('active');
          pill.querySelector('.pill-icon').textContent = '✓';
          selectedDiscs.add(disc);
        }

        updateSelectedDisciplinesInput();
      });
    });
  }

  // Project Modal Form Submission
  if (projectModalForm) {
    projectModalForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (modalSubmitBtn) {
        modalSubmitBtn.disabled = true;
        modalSubmitBtn.innerHTML = 'SUBMITTING...';
      }

      if (modalFormStatus) {
        modalFormStatus.textContent = '';
      }

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(projectModalForm)))
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            if (modalFormStatus) {
              modalFormStatus.textContent = 'Project brief received! We\'ll respond within 24 hours.';
              modalFormStatus.style.color = '#00FF66';
            }
            projectModalForm.reset();
            // Reset pills
            selectedDiscs.clear();
            if (disciplinePillsGrid) {
              disciplinePillsGrid.querySelectorAll('.disc-pill').forEach(p => {
                p.classList.remove('active');
                p.querySelector('.pill-icon').textContent = '+';
              });
            }
            setTimeout(() => closeModal(), 2800);
          } else {
            if (modalFormStatus) {
              modalFormStatus.textContent = 'Something went wrong. Email Ryzon.build@gmail.com directly.';
              modalFormStatus.style.color = 'var(--crimson-vibrant)';
            }
          }
        })
        .catch(() => {
          if (modalFormStatus) {
            modalFormStatus.textContent = 'Network error. Please try again.';
            modalFormStatus.style.color = 'var(--crimson-vibrant)';
          }
        })
        .finally(() => {
          if (modalSubmitBtn) {
            modalSubmitBtn.disabled = false;
            modalSubmitBtn.innerHTML = 'SUBMIT PROJECT BRIEF <i data-lucide="send"></i>';
            initIcons();
          }
        });
    });
  }

  // Initial Icon Render
  initIcons();

});
