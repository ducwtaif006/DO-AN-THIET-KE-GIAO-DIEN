/* Phúc Long Heritage — main.js */

// Navbar scroll
const nav = document.getElementById('mainNav');
if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40));

// Back to top
const bt = document.getElementById('backTop');
if(bt){
  window.addEventListener('scroll',()=>bt.classList.toggle('show',scrollY>300));
  bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

// Scroll reveal
document.querySelectorAll('.reveal').forEach(el=>{
  new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('visible');}},{threshold:.1}).observe(el);
});

// Toast
// Thêm đoạn này vào js/main.js nếu chưa có hàm showToast
function showToast(msg) {
  let toast = document.getElementById('plToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'plToast';
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);'
      + 'background:#1f2937;color:#fff;padding:12px 20px;border-radius:8px;'
      + 'font-size:14px;z-index:9999;opacity:0;transition:opacity .3s;box-shadow:0 4px 12px rgba(0,0,0,.2)';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// Product filter
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.closest('.filter-row,.filter-tabs').querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat=btn.dataset.filter||btn.dataset.cat;
    const grid=document.getElementById('productGrid')||document.getElementById('blogGrid')||document.getElementById('promoGrid');
    if(!grid) return;
    let found=0;
    grid.querySelectorAll('[data-cat]').forEach(item=>{
      const show=cat==='all'||item.dataset.cat===cat;
      item.style.display=show?'':'none';
      if(show) found++;
    });
    const nr=document.getElementById('noResult');
    if(nr) nr.style.display=found?'none':'block';
  });
});

// Product search
const sb=document.querySelector('.search-box');
if(sb){
  sb.addEventListener('input',function(){
    const q=this.value.toLowerCase();
    const grid=document.getElementById('productGrid');
    if(!grid) return;
    let found=0;
    grid.querySelectorAll('[data-cat]').forEach(item=>{
      const show=item.textContent.toLowerCase().includes(q);
      item.style.display=show?'':'none';
      if(show) found++;
    });
    const nr=document.getElementById('noResult');
    if(nr) nr.style.display=found?'none':'block';
  });
}

// Size buttons
document.querySelectorAll('.size-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.closest('.size-options').querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Sugar buttons
document.querySelectorAll('.sugar-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.closest('.sugar-grid').querySelectorAll('.sugar-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Cart quantity
document.querySelectorAll('.qty-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const numEl=btn.closest('.qty-ctrl').querySelector('.qty-num');
    let v=parseInt(numEl.value||numEl.textContent);
    if(btn.dataset.dir==='up') v=Math.min(v+1,20);
    else v=Math.max(v-1,1);
    numEl.value!==undefined?numEl.value=v:numEl.textContent=v;
  });
});

// Cart remove
document.querySelectorAll('.cart-remove').forEach(btn=>{
  btn.addEventListener('click',()=>btn.closest('.cart-item').remove());
});

// Contact form validation
const cf=document.getElementById('contactForm');
if(cf){
  cf.addEventListener('submit',e=>{
    e.preventDefault();
    const nm=document.getElementById('cName'),em=document.getElementById('cEmail'),mg=document.getElementById('cMsg');
    let ok=true;
    [nm,em,mg].forEach(f=>{f.classList.remove('error');});
    if(!nm.value.trim()){nm.classList.add('error');ok=false;}
    if(!em.value.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)){em.classList.add('error');ok=false;}
    if(!mg.value.trim()){mg.classList.add('error');ok=false;}
    if(ok){showToast('✓ Gửi thành công! Chúng tôi sẽ phản hồi trong 24h.');cf.reset();}
  });
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>q.closest('.faq-item').classList.toggle('open'));
});

// FAQ search
const faqSearch=document.querySelector('.faq-search');
if(faqSearch){
  faqSearch.addEventListener('input',function(){
    const q=this.value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item=>{
      item.style.display=item.textContent.toLowerCase().includes(q)?'':'none';
    });
  });
}

// Store filter
document.querySelectorAll('[data-city-btn]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-city-btn]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const city=btn.dataset.cityBtn;
    document.querySelectorAll('[data-city]').forEach(c=>{
      c.style.display=(city==='all'||c.dataset.city===city)?'':'none';
    });
  });
});

// Active nav
(function(){
  const page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('#mainNav .nav-links a').forEach(a=>{
    if(a.getAttribute('href')===page||(page===''&&a.getAttribute('href')==='index.html'))
      a.classList.add('active');
  });
})();
