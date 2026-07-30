const requests = [
      {id:'BIY-2026-0032', company:'Northstar Family Dental', contact:'Maya Brooks', email:'maya@northstardemo.com', service:'AI & Automation', package:'Pro', status:'Processing', priority:'High', submitted:'2026-07-29', consultation:true, turnaround:3.4, challenge:'Appointment follow-up is handled manually and leads are sometimes missed.', outcome:'Automated lead routing, reminders, and a clear daily activity view.'},
      {id:'BIY-2026-0031', company:'BrightPath Learning Center', contact:'Jordan Ellis', email:'jordan@brightpathdemo.com', service:'Microsoft 365 Solutions', package:'Starter', status:'Scheduled', priority:'Medium', submitted:'2026-07-28', consultation:true, turnaround:4.1, challenge:'Staff files and calendars are spread across personal accounts.', outcome:'A structured Microsoft 365 workspace with shared files and calendars.'},
      {id:'BIY-2026-0030', company:'Harbor & Pine Realty', contact:'Nina Lewis', email:'nina@harborpinedemo.com', service:'Data & Insights', package:'Pro', status:'Completed', priority:'Medium', submitted:'2026-07-26', consultation:true, turnaround:2.8, challenge:'Management cannot quickly see lead sources and property activity.', outcome:'A leadership dashboard showing sales, marketing, and agent performance.'},
      {id:'BIY-2026-0029', company:'Lone Star Lemon Co.', contact:'Andre Thomas', email:'andre@lonestarlemondemo.com', service:'Data & Insights', package:'Starter', status:'New', priority:'Low', submitted:'2026-07-25', consultation:false, turnaround:4.8, challenge:'Sales are tracked by hand during pop-up events.', outcome:'A simple sales tracker and weekly performance dashboard.'},
      {id:'BIY-2026-0028', company:'Cobalt Construction Group', contact:'Erica Stone', email:'erica@cobaltdemo.com', service:'Security & Identity', package:'Custom to Order', status:'Processing', priority:'High', submitted:'2026-07-24', consultation:true, turnaround:5.6, challenge:'New hires receive inconsistent access and former staff retain permissions too long.', outcome:'Standardized onboarding, offboarding, and access review controls.'},
      {id:'BIY-2026-0027', company:'Willow Wellness Studio', contact:'Tasha Grant', email:'tasha@willowdemo.com', service:'AI & Automation', package:'Starter', status:'Completed', priority:'Low', submitted:'2026-07-22', consultation:false, turnaround:2.1, challenge:'Client intake information must be copied into multiple systems.', outcome:'One intake form that triggers confirmation, tracking, and follow-up.'},
      {id:'BIY-2026-0026', company:'Oakline Property Services', contact:'Marcus Reed', email:'marcus@oaklinedemo.com', service:'Microsoft 365 Solutions', package:'Pro', status:'Completed', priority:'Medium', submitted:'2026-07-20', consultation:true, turnaround:3.2, challenge:'Teams are using inconsistent file storage and meeting processes.', outcome:'A centralized SharePoint and Teams workspace with a repeatable structure.'},
      {id:'BIY-2026-0025', company:'Summit Home Care', contact:'Renee James', email:'renee@summitdemo.com', service:'Security & Identity', package:'Pro', status:'Scheduled', priority:'High', submitted:'2026-07-18', consultation:true, turnaround:5.2, challenge:'Leadership needs clearer visibility into user access and account status.', outcome:'An identity dashboard with alerts for access changes and exceptions.'},
      {id:'BIY-2026-0024', company:'Peach Street Catering', contact:'Daniel King', email:'daniel@peachstreetdemo.com', service:'AI & Automation', package:'Starter', status:'Completed', priority:'Medium', submitted:'2026-07-16', consultation:false, turnaround:2.6, challenge:'Quote requests arrive through different channels and take too long to organize.', outcome:'Automated quote intake, owner notification, and status tracking.'},
      {id:'BIY-2026-0023', company:'Blue Ember Logistics', contact:'Simone Price', email:'simone@blueemberdemo.com', service:'Data & Insights', package:'Custom to Order', status:'Processing', priority:'High', submitted:'2026-07-14', consultation:true, turnaround:6.1, challenge:'Operations reporting is assembled manually from several spreadsheets.', outcome:'A consolidated operations dashboard with scheduled refreshes and alerts.'},
      {id:'BIY-2026-0022', company:'Kindred Legal Support', contact:'Olivia Ward', email:'olivia@kindreddemo.com', service:'Microsoft 365 Solutions', package:'Starter', status:'New', priority:'Medium', submitted:'2026-07-12', consultation:false, turnaround:4.3, challenge:'Documents are difficult to locate and version control is inconsistent.', outcome:'A searchable SharePoint library with clear document categories.'},
      {id:'BIY-2026-0021', company:'Redwood Fitness Lab', contact:'Chris Morgan', email:'chris@redwooddemo.com', service:'AI & Automation', package:'Pro', status:'Completed', priority:'Medium', submitted:'2026-07-10', consultation:true, turnaround:2.9, challenge:'Membership inquiries are not followed up consistently.', outcome:'Automated lead nurturing and owner visibility into response times.'},
      {id:'BIY-2026-0020', company:'Atlas Community Partners', contact:'Avery Chen', email:'avery@atlasdemo.com', service:'Security & Identity', package:'Custom to Order', status:'Scheduled', priority:'High', submitted:'2026-07-08', consultation:true, turnaround:5.7, challenge:'Access processes need to support multiple programs and external partners.', outcome:'A tailored identity and governance process with approval controls.'},
      {id:'BIY-2026-0019', company:'Mercury Auto Detail', contact:'Devin Cole', email:'devin@mercurydemo.com', service:'Data & Insights', package:'Starter', status:'Completed', priority:'Low', submitted:'2026-07-05', consultation:false, turnaround:2.3, challenge:'The owner cannot easily compare service revenue and repeat customers.', outcome:'A simple dashboard for sales mix and customer return rates.'},
      {id:'BIY-2026-0018', company:'Riverstone Childcare', contact:'Imani Hall', email:'imani@riverstonedemo.com', service:'Microsoft 365 Solutions', package:'Pro', status:'Processing', priority:'Medium', submitted:'2026-07-02', consultation:true, turnaround:4.6, challenge:'Staff communication and policy documents are spread across email threads.', outcome:'A central Teams workspace with organized policies and announcements.'},
      {id:'BIY-2026-0017', company:'Crescent Event Studio', contact:'Lauren Diaz', email:'lauren@crescentdemo.com', service:'AI & Automation', package:'Pro', status:'Completed', priority:'Medium', submitted:'2026-06-29', consultation:true, turnaround:3.0, challenge:'Event inquiries require repeated manual updates and reminders.', outcome:'Automated client intake, milestone reminders, and delivery tracking.'},
      {id:'BIY-2026-0016', company:'Ironwood Maintenance', contact:'Caleb Ross', email:'caleb@ironwooddemo.com', service:'Security & Identity', package:'Starter', status:'New', priority:'High', submitted:'2026-06-24', consultation:false, turnaround:5.0, challenge:'Shared passwords and former employee access create business risk.', outcome:'Basic identity cleanup, MFA rollout, and a safer offboarding checklist.'},
      {id:'BIY-2026-0015', company:'Magnolia Beauty Collective', contact:'Keisha Bell', email:'keisha@magnoliademo.com', service:'Data & Insights', package:'Starter', status:'Completed', priority:'Low', submitted:'2026-06-18', consultation:false, turnaround:2.5, challenge:'The team needs a better view of bookings, services, and repeat clients.', outcome:'A visual weekly scorecard for salon performance.'}
    ];

    const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const monthlyReceived = [12, 15, 17, 22, 26, 33];
    const monthlyCompleted = [8, 11, 13, 17, 21, 25];

    const searchInput = document.getElementById('searchInput');
    const statusFilter = document.getElementById('statusFilter');
    const serviceFilter = document.getElementById('serviceFilter');
    const packageFilter = document.getElementById('packageFilter');
    const resetBtn = document.getElementById('resetBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const requestRows = document.getElementById('requestRows');
    const emptyState = document.getElementById('emptyState');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModal = document.getElementById('closeModal');
    const toast = document.getElementById('toast');

    const chartColors = {
      status: ['#2888ff','#f2b84b','#8667da','#2eb67d'],
      services: ['#2d7ed2','#45b9e6','#8667da','#26a878']
    };

    function renderTrendChart() {
      const holder = document.getElementById('trendChart');
      const width = 760, height = 270;
      const left = 45, right = 20, top = 18, bottom = 47;
      const plotW = width - left - right;
      const plotH = height - top - bottom;
      const maxVal = 40;
      const x = i => left + (plotW / (months.length - 1)) * i;
      const y = v => top + plotH - (v / maxVal) * plotH;
      const receivedPoints = monthlyReceived.map((v,i) => `${x(i)},${y(v)}`).join(' ');
      const completedPoints = monthlyCompleted.map((v,i) => `${x(i)},${y(v)}`).join(' ');
      const areaPoints = `${left},${top+plotH} ${receivedPoints} ${x(months.length-1)},${top+plotH}`;
      const grid = [0,10,20,30,40].map(v => `<line class="trend-grid" x1="${left}" y1="${y(v)}" x2="${width-right}" y2="${y(v)}"></line><text class="trend-axis-label" x="${left-12}" y="${y(v)+4}" text-anchor="end">${v}</text>`).join('');
      const labels = months.map((m,i) => `<text class="trend-axis-label" x="${x(i)}" y="${height-18}" text-anchor="middle">${m}</text>`).join('');
      const receivedDots = monthlyReceived.map((v,i) => `<circle class="trend-point-received" cx="${x(i)}" cy="${y(v)}" r="5"><title>${months[i]}: ${v} received</title></circle>`).join('');
      const completedDots = monthlyCompleted.map((v,i) => `<circle class="trend-point-completed" cx="${x(i)}" cy="${y(v)}" r="5"><title>${months[i]}: ${v} completed</title></circle>`).join('');
      holder.innerHTML = `<svg class="trend-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="trendAreaGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#1473e6" stop-opacity=".22"/><stop offset="100%" stop-color="#1473e6" stop-opacity="0"/></linearGradient></defs>${grid}<polygon class="trend-area" points="${areaPoints}"></polygon><polyline class="trend-line-received" points="${receivedPoints}"></polyline><polyline class="trend-line-completed" points="${completedPoints}"></polyline>${receivedDots}${completedDots}${labels}</svg><div class="chart-legend"><span class="legend-item"><span class="legend-dot" style="--dot:#1473e6"></span>Requests received</span><span class="legend-item"><span class="legend-dot" style="--dot:#4fd4ff"></span>Requests completed</span></div>`;
    }

    function filteredRequests() {
      const query = searchInput.value.trim().toLowerCase();
      return requests.filter(r => {
        const matchesSearch = !query || [r.id,r.company,r.contact,r.email,r.service,r.package,r.status,r.priority].join(' ').toLowerCase().includes(query);
        const matchesStatus = statusFilter.value === 'all' || r.status === statusFilter.value;
        const matchesService = serviceFilter.value === 'all' || r.service === serviceFilter.value;
        const matchesPackage = packageFilter.value === 'all' || r.package === packageFilter.value;
        return matchesSearch && matchesStatus && matchesService && matchesPackage;
      });
    }

    function countBy(items, key, values) {
      return values.map(v => items.filter(item => item[key] === v).length);
    }

    function formatDate(dateString) {
      return new Intl.DateTimeFormat('en-US', {month:'short', day:'numeric', year:'numeric'}).format(new Date(dateString + 'T12:00:00'));
    }

    function statusClass(value) { return 'status-' + value.toLowerCase(); }
    function priorityClass(value) { return 'priority-' + value.toLowerCase(); }

    function renderMetrics(items) {
      const completed = items.filter(r => r.status === 'Completed').length;
      const consultations = items.filter(r => r.consultation).length;
      const highPriority = items.filter(r => r.priority === 'High').length;
      const avgTurnaround = items.length ? (items.reduce((sum,r) => sum + r.turnaround, 0) / items.length).toFixed(1) : '0.0';
      document.getElementById('metricRequests').textContent = items.length;
      document.getElementById('metricCompleted').textContent = completed;
      document.getElementById('metricConsultations').textContent = consultations;
      document.getElementById('metricTurnaround').textContent = avgTurnaround;
      document.getElementById('metricPriority').textContent = highPriority;
      document.getElementById('completionRate').textContent = items.length ? Math.round(completed / items.length * 100) + '%' : '0%';
      document.getElementById('statusTotalChip').textContent = (items.length - completed) + ' active';
    }

    function renderCharts(items) {
      const statusNames = ['New','Processing','Scheduled','Completed'];
      const statusCounts = countBy(items,'status',statusNames);
      const total = Math.max(statusCounts.reduce((a,b) => a+b, 0), 1);
      let running = 0;
      const segments = statusCounts.map((count,i) => {
        const start = running / total * 360;
        running += count;
        const end = running / total * 360;
        return `${chartColors.status[i]} ${start}deg ${end}deg`;
      }).join(', ');
      document.getElementById('statusChart').innerHTML = `<div class="donut-layout"><div class="donut-chart" style="--segments:${segments || '#edf2f7 0deg 360deg'}"><div class="donut-center"><strong>${items.length}</strong><span>requests</span></div></div><div class="chart-legend">${statusNames.map((name,i) => `<span class="legend-item"><span class="legend-dot" style="--dot:${chartColors.status[i]}"></span>${name} ${statusCounts[i]}</span>`).join('')}</div></div>`;

      const serviceNames = ['Microsoft 365 Solutions','AI & Automation','Security & Identity','Data & Insights'];
      const serviceLabels = ['Microsoft 365','AI & Automation','Security','Data & Insights'];
      const serviceCounts = countBy(items,'service',serviceNames);
      const serviceMax = Math.max(...serviceCounts, 1);
      document.getElementById('serviceChart').innerHTML = `<div class="service-bars">${serviceLabels.map((name,i) => `<div class="service-row"><div class="service-name">${name}</div><div class="service-track"><div class="service-fill" style="--width:${Math.round(serviceCounts[i]/serviceMax*100)}%; --bar:${chartColors.services[i]}"></div></div><div class="service-count">${serviceCounts[i]}</div></div>`).join('')}</div>`;
    }

    function renderPackages(items) {
      const packages = ['Starter','Pro','Custom to Order'];
      const max = Math.max(...packages.map(p => items.filter(r => r.package === p).length), 1);
      document.getElementById('packageProgress').innerHTML = packages.map(pkg => {
        const count = items.filter(r => r.package === pkg).length;
        const pct = Math.round(count / max * 100);
        return `<div class="progress-row"><div class="progress-top"><span>${pkg}</span><span>${count} request${count === 1 ? '' : 's'}</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
      }).join('');
    }

    function renderTable(items) {
      document.getElementById('tableCount').textContent = `${items.length} request${items.length === 1 ? '' : 's'}`;
      requestRows.innerHTML = items.map(r => `
        <tr data-id="${r.id}" tabindex="0" aria-label="Open ${r.id} for ${r.company}">
          <td><span class="request-id">${r.id}</span></td>
          <td><div class="company-cell"><strong>${r.company}</strong><span>${r.contact}</span></div></td>
          <td>${r.service}</td>
          <td><span class="package-pill">${r.package}</span></td>
          <td><span class="status ${statusClass(r.status)}">${r.status}</span></td>
          <td><span class="priority ${priorityClass(r.priority)}">${r.priority}</span></td>
          <td>${formatDate(r.submitted)}</td>
        </tr>`).join('');
      emptyState.hidden = items.length !== 0;
      requestRows.closest('table').style.display = items.length ? 'table' : 'none';

      requestRows.querySelectorAll('tr').forEach(row => {
        row.addEventListener('click', () => openDetails(row.dataset.id));
        row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetails(row.dataset.id); } });
      });
    }

    function renderInsight(items) {
      if (!items.length) {
        document.getElementById('insightText').textContent = 'No matching requests are available. Reset the filters to return to the full dashboard view.';
        return;
      }
      const services = ['Microsoft 365 Solutions','AI & Automation','Security & Identity','Data & Insights'];
      const topService = services.map(name => ({name,count:items.filter(r => r.service === name).length})).sort((a,b) => b.count-a.count)[0];
      const completion = Math.round(items.filter(r => r.status === 'Completed').length / items.length * 100);
      document.getElementById('insightText').textContent = `${topService.name} leads current demand with ${topService.count} request${topService.count === 1 ? '' : 's'}, and the selected view has a ${completion}% completion rate.`;
    }

    function renderAll() {
      const items = filteredRequests();
      renderMetrics(items);
      renderCharts(items);
      renderPackages(items);
      renderTable(items);
      renderInsight(items);
    }

    function openDetails(id) {
      const r = requests.find(item => item.id === id);
      if (!r) return;
      document.getElementById('modalRequestId').textContent = r.id;
      document.getElementById('modalTitle').textContent = r.company;
      document.getElementById('modalBody').innerHTML = `
        <div class="detail-grid">
          <div class="detail-card"><div class="detail-label">Contact</div><div class="detail-value">${r.contact}<br><span style="color:#65738b; font-weight:600;">${r.email}</span></div></div>
          <div class="detail-card"><div class="detail-label">Submitted</div><div class="detail-value">${formatDate(r.submitted)}</div></div>
          <div class="detail-card"><div class="detail-label">Service</div><div class="detail-value">${r.service}</div></div>
          <div class="detail-card"><div class="detail-label">Package</div><div class="detail-value">${r.package}</div></div>
          <div class="detail-card"><div class="detail-label">Status</div><div class="detail-value"><span class="status ${statusClass(r.status)}">${r.status}</span></div></div>
          <div class="detail-card"><div class="detail-label">Priority</div><div class="detail-value"><span class="priority ${priorityClass(r.priority)}">${r.priority}</span></div></div>
          <div class="detail-card wide"><div class="detail-label">Business challenge</div><div class="detail-value">${r.challenge}</div></div>
          <div class="detail-card wide"><div class="detail-label">Desired outcome</div><div class="detail-value">${r.outcome}</div></div>
        </div>
        <div class="timeline">
          <h3>Automation timeline</h3>
          <div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-copy"><strong>Request submitted</strong><span>Intake information captured and assigned ${r.id}.</span></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-copy"><strong>Confirmation sent</strong><span>Customer received an automated confirmation and next-step guidance.</span></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-copy"><strong>${r.consultation ? 'Consultation activity recorded' : 'Self-service follow-up queued'}</strong><span>${r.consultation ? 'Booking information is connected to the business request.' : 'The request remains available for owner follow-up.'}</span></div></div>
        </div>`;
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeModal.focus();
    }

    function closeDetails() {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(window.toastTimer);
      window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    [searchInput,statusFilter,serviceFilter,packageFilter].forEach(control => control.addEventListener(control === searchInput ? 'input' : 'change', renderAll));
    resetBtn.addEventListener('click', () => {
      searchInput.value = '';
      statusFilter.value = 'all';
      serviceFilter.value = 'all';
      packageFilter.value = 'all';
      renderAll();
      showToast('Filters reset. The full demo view is restored.');
    });
    refreshBtn.addEventListener('click', () => {
      const now = new Date();
      document.getElementById('refreshTime').textContent = now.toLocaleString('en-US', {month:'short', day:'numeric', hour:'numeric', minute:'2-digit'});
      refreshBtn.textContent = 'Refreshing...';
      setTimeout(() => { refreshBtn.textContent = 'Refresh Demo'; showToast('Dashboard refreshed with the latest demo data.'); }, 650);
    });
    closeModal.addEventListener('click', closeDetails);
    modalBackdrop.addEventListener('click', e => { if (e.target === modalBackdrop) closeDetails(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetails(); });

    renderTrendChart();
    document.getElementById('refreshTime').textContent = new Date().toLocaleString('en-US', {month:'short', day:'numeric', hour:'numeric', minute:'2-digit'});
    renderAll();
  

// Fallback navigation support for the demo folder.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav || toggle.dataset.dashboardBound === 'true') return;
  toggle.dataset.dashboardBound = 'true';
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }));
})();
