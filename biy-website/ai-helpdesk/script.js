const messages = document.getElementById('messages');
    const chatForm = document.getElementById('chatForm');
    const chatText = document.getElementById('chatText');
    const modal = document.getElementById('ticketModal');
    const ticketForm = document.getElementById('ticketForm');
    const issueSummary = document.getElementById('issueSummary');
    let lastIssue = '';

    const issueTypes = [
      { keys:['suspicious','phishing','scam'], category:'Security - Suspicious Email', priority:'High', confidence:96, steps:[
        'Do not click links, open attachments, or reply to the message.',
        'Use your email client’s Report Phishing option, if available.',
        'If you already interacted with it, disconnect from the network and contact support immediately.'
      ]},
      { keys:['camera','webcam','teams'], category:'Microsoft Teams', priority:'Normal', confidence:92, steps:[
        'Open your device privacy settings and confirm camera access is enabled for Microsoft Teams.',
        'In Teams, open Settings → Devices and select the correct camera.',
        'Close other apps that may be using the camera, then restart Teams.'
      ]},
      { keys:['login','log in','password','sign in','microsoft 365'], category:'Microsoft 365 Access', priority:'Normal', confidence:90, steps:[
        'Confirm your email address is entered correctly and Caps Lock is off.',
        'Try signing in through a private or incognito browser window.',
        'Use your organization’s password reset option if the password is not accepted.'
      ]},
      { keys:['email','outlook','send','sending'], category:'Outlook Email', priority:'Normal', confidence:88, steps:[
        'Check whether Outlook shows Working Offline near the bottom of the window.',
        'Open the Outbox and remove any message with a very large attachment.',
        'Restart Outlook and send a small test message to yourself.'
      ]},
      { keys:['new employee','onboarding','access','new user'], category:'Identity and Access', priority:'Normal', confidence:91, steps:[
        'Confirm the employee’s approved start date, manager, role, and department.',
        'Identify the Microsoft 365 license and security groups required for that role.',
        'Submit the access request for manager or system-owner approval.'
      ]},
      { keys:['printer','print'], category:'Hardware - Printer', priority:'Low', confidence:86, steps:[
        'Confirm the printer is powered on and connected to the same network.',
        'Clear any paused or failed jobs from the print queue.',
        'Remove and re-add the printer from your device settings.'
      ]}
    ];

    function classify(text) {
      const lower = text.toLowerCase();
      return issueTypes.find(item => item.keys.some(key => lower.includes(key))) || {
        category:'General IT Support', priority:'Normal', confidence:78,
        steps:['Restart the affected application and try the action again.','Confirm your internet connection is stable.','Capture any error message or screenshot for the support team.']
      };
    }
    function addMessage(text, who='ai', html=false) {
      const row = document.createElement('div'); row.className = `message-row ${who}`;
      if (who === 'ai') { const av=document.createElement('div'); av.className='msg-avatar'; av.textContent='AI'; row.appendChild(av); }
      const bubble=document.createElement('div'); bubble.className='msg';
      html ? bubble.innerHTML=text : bubble.textContent=text;
      row.appendChild(bubble); messages.appendChild(row); messages.scrollTop=messages.scrollHeight;
    }
    function showTyping() {
      const row=document.createElement('div'); row.className='message-row ai'; row.id='typingRow';
      row.innerHTML='<div class="msg-avatar">AI</div><div class="msg typing"><span></span><span></span><span></span></div>';
      messages.appendChild(row); messages.scrollTop=messages.scrollHeight;
    }
    function updateInsights(item) {
      document.getElementById('category').textContent=item.category;
      document.getElementById('priority').textContent=item.priority;
      document.getElementById('confidence').textContent=item.confidence+'%';
      document.getElementById('confidenceBar').style.width=item.confidence+'%';
      document.getElementById('event2').classList.add('active');
      document.querySelector('#event2 small').textContent=`${item.category} - ${item.priority} priority`;
    }
    function handleIssue(text) {
      const clean=text.trim(); if(!clean) return;
      lastIssue=clean; addMessage(clean,'user'); chatText.value='';
      const item=classify(clean); updateInsights(item); showTyping();
      setTimeout(()=>{
        document.getElementById('typingRow')?.remove();
        const steps=item.steps.map(s=>`<li>${s}</li>`).join('');
        addMessage(`<strong>I classified this as ${item.category}.</strong><br>Try these steps:<ul>${steps}</ul><div class="msg-actions"><button class="small-btn dark" data-resolved>Yes, that fixed it</button><button class="small-btn" data-ticket>No, create a ticket</button></div>`,'ai',true);
        document.getElementById('event3').classList.add('active');
      },700);
    }
    chatForm.addEventListener('submit',e=>{e.preventDefault();handleIssue(chatText.value)});
    document.querySelectorAll('[data-prompt]').forEach(btn=>btn.addEventListener('click',()=>handleIssue(btn.dataset.prompt)));
    document.querySelectorAll('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector(btn.dataset.scroll).scrollIntoView({behavior:'smooth'})));

    messages.addEventListener('click',e=>{
      if(e.target.matches('[data-resolved]')){
        addMessage('Yes, that fixed it.','user');
        setTimeout(()=>addMessage('<strong>Great - I marked the issue resolved.</strong><br>No ticket is needed. In a production system, this result could be added to the support dashboard.','ai',true),250);
        document.getElementById('event4').classList.add('active');
        document.querySelector('#event4 small').textContent='Issue resolved through self-service';
        const toast=document.getElementById('toast'); toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),3000);
      }
      if(e.target.matches('[data-ticket]')) openTicket();
    });
    function openTicket(){ issueSummary.value=lastIssue || 'General support request'; modal.classList.add('show'); document.body.style.overflow='hidden'; }
    function closeModal(){ modal.classList.remove('show'); document.body.style.overflow=''; }
    document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));
    modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
    ticketForm.addEventListener('submit',e=>{
      e.preventDefault();
      const number=String(Math.floor(Math.random()*9000)+1000);
      document.getElementById('ticketId').textContent=`BIY-HD-2026-${number}`;
      document.getElementById('successName').textContent=document.getElementById('firstName').value.trim() || 'there';
      document.getElementById('ticketFormView').style.display='none';
      document.getElementById('successView').style.display='block';
      document.getElementById('event4').classList.add('active');
      document.querySelector('#event4 small').textContent='Support ticket created';
      document.getElementById('event5').classList.add('active');
      document.querySelector('#event5 small').textContent='Teams and email notification simulated';
      addMessage('I still need help. Please create a ticket.','user');
      setTimeout(()=>addMessage(`<strong>Your demo ticket has been created.</strong><br>Ticket <b>BIY-HD-2026-${number}</b> includes the issue summary and troubleshooting already attempted.`,'ai',true),250);
    });

// Main-site mobile header navigation
const biyMenuToggle = document.querySelector('.menu-toggle');
const biySiteNav = document.getElementById('site-nav');
if (biyMenuToggle && biySiteNav) {
  biyMenuToggle.addEventListener('click', () => {
    const isOpen = biySiteNav.classList.toggle('open');
    biyMenuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  biySiteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      biySiteNav.classList.remove('open');
      biyMenuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
