(function(){
      const form=document.getElementById('starterDemoForm');
      const button=document.getElementById('runDemoButton');
      const steps=Array.from(document.querySelectorAll('.flow-step'));
      const result=document.getElementById('resultCard');
      const firstName=document.getElementById('demoFirstName');
      const company=document.getElementById('demoCompany');
      let running=false;
      function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
      function reset(){
        steps.forEach((step,index)=>{step.classList.remove('active','complete');step.querySelector('.step-status').textContent=index===0?'Ready':'Waiting';step.querySelector('.step-icon').textContent=String(index+1).padStart(2,'0');});
        result.classList.remove('show');
      }
      form.addEventListener('submit',async function(event){
        event.preventDefault();
        if(running||!form.checkValidity()){form.reportValidity();return;}
        running=true;reset();button.disabled=true;button.textContent='Running automation...';
        const requestId='SMART-2026-'+String(Math.floor(1000+Math.random()*8999));
        for(let i=0;i<steps.length;i++){
          const step=steps[i];step.classList.add('active');step.querySelector('.step-status').textContent='Running';await wait(720);step.classList.remove('active');step.classList.add('complete');step.querySelector('.step-status').textContent='Complete';step.querySelector('.step-icon').textContent='✓';
        }
        document.getElementById('resultId').textContent=requestId;
        document.getElementById('resultCustomer').textContent=firstName.value.trim()||'Customer';
        document.getElementById('resultCompany').textContent=company.value.trim()||'Business';
        result.classList.add('show');
        button.disabled=false;button.textContent='Run Demo Again';running=false;
        await wait(500);
        const safeName=escapeHtml(firstName.value.trim()||'Customer');
        const safeCompany=escapeHtml(company.value.trim()||'Business');
        const modal=document.createElement('div');
        modal.className='success-modal';
        modal.innerHTML=`
          <div class="success-card" role="dialog" aria-modal="true" aria-labelledby="smartopsSuccessTitle">
            <div class="success-card-header">
              <div class="success-check">✓</div>
              <h2 id="smartopsSuccessTitle">Request processed successfully.</h2>
              <p>SmartOps Starter captured the sample request and completed the workflow automatically.</p>
              <strong class="modal-id">${requestId}</strong>
            </div>
            <div class="success-summary">
              <div class="success-summary-item"><span>Customer</span><strong>${safeName}</strong></div>
              <div class="success-summary-item"><span>Business</span><strong>${safeCompany}</strong></div>
              <div class="success-summary-item"><span>Status</span><strong>New request</strong></div>
              <div class="success-summary-item"><span>Next step</span><strong>Team review</strong></div>
            </div>
            <div class="success-complete-list">
              <strong>What SmartOps completed</strong>
              <div><i>✓</i><span>Captured the customer and business information</span></div>
              <div><i>✓</i><span>Generated a unique request ID</span></div>
              <div><i>✓</i><span>Added the request to a central tracker</span></div>
              <div><i>✓</i><span>Prepared customer and team confirmations</span></div>
            </div>
            <div class="modal-actions">
              <button class="button" id="closeDemoModal" type="button">Return to Demo</button>
              <a class="button secondary" href="../intake.html">Choose Starter Package</a>
            </div>
          </div>`;
        document.body.appendChild(modal);
        document.body.classList.add('modal-open');
        document.getElementById('closeDemoModal').focus();
        document.getElementById('closeDemoModal').addEventListener('click',()=>{
          modal.remove();
          document.body.classList.remove('modal-open');
          button.focus();
        });
        modal.addEventListener('click',(event)=>{
          if(event.target===modal){
            modal.remove();
            document.body.classList.remove('modal-open');
            button.focus();
          }
        });
      });
      function escapeHtml(value){return value.replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));}
    })();
