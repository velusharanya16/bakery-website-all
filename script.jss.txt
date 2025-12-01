// Basic interactivity for SweetSlice Bakery
// - sets active nav link
// - gallery lightbox
// - order/custom form handlers (stores to localStorage for demo)
// - review submit

// Active nav link
(function setActiveNav(){
  const links = document.querySelectorAll('.nav-link');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();

// Gallery lightbox
const galleryImgs = document.querySelectorAll('.gallery-img');
if(galleryImgs && galleryImgs.length){
  galleryImgs.forEach(img=>{
    img.addEventListener('click', ()=>{
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      if(lightbox && lightboxImg){
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      }
    });
  });
}
function closeLightbox(){
  const lightbox = document.getElementById('lightbox');
  if(lightbox) lightbox.style.display = 'none';
}

// Orders (simple local save for demo)
function submitOrder(e){
  e.preventDefault();
  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const item = document.getElementById('orderItem').value.trim();
  const qty = document.getElementById('orderQty').value;
  const mode = document.getElementById('orderMode').value;
  const notes = document.getElementById('orderNotes').value.trim();

  if(!name || !phone || !item) return alert('Please fill required fields.');

  const order = { name, phone, item, qty, mode, notes, created: new Date().toISOString() };
  const orders = JSON.parse(localStorage.getItem('ss_orders')||'[]');
  orders.unshift(order);
  localStorage.setItem('ss_orders', JSON.stringify(orders));

  document.getElementById('orderSuccess').classList.remove('hidden');
  document.getElementById('orderForm').reset();
  setTimeout(()=> document.getElementById('orderSuccess').classList.add('hidden'), 4000);
}

// Custom cake request
function submitCustom(e){
  e.preventDefault();
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const occasion = document.getElementById('custOccasion').value.trim();
  const size = document.getElementById('custSize').value;
  const flavor = document.getElementById('custFlavor').value;
  const decor = document.getElementById('custDecor').value.trim();
  const file = document.getElementById('custImage');

  if(!name || !phone || !occasion) return alert('Please fill required fields.');

  // read image if provided (optional) and store request
  const saveRequest = (imgData)=>{
    const req = { name, phone, occasion, size, flavor, decor, img: imgData || null, created: new Date().toISOString() };
    const reqs = JSON.parse(localStorage.getItem('ss_customs')||'[]');
    reqs.unshift(req);
    localStorage.setItem('ss_customs', JSON.stringify(reqs));
    document.getElementById('customSuccess').classList.remove('hidden');
    document.getElementById('customForm').reset();
    setTimeout(()=> document.getElementById('customSuccess').classList.add('hidden'), 4500);
  };

  if(file && file.files && file.files[0]){
    const reader = new FileReader();
    reader.onload = function(){ saveRequest(reader.result); };
    reader.readAsDataURL(file.files[0]);
  } else {
    saveRequest(null);
  }
}

// Reviews handler
function submitReview(e){
  e.preventDefault();
  const name = document.getElementById('revName').value.trim();
  const text = document.getElementById('revText').value.trim();
  if(!name || !text) return alert('Please enter name and review.');
  const revs = JSON.parse(localStorage.getItem('ss_reviews')||'[]');
  revs.unshift({ name, text, created: new Date().toISOString() });
  localStorage.setItem('ss_reviews', JSON.stringify(revs));
  alert('Thanks! Your review was saved locally (demo).');
  document.getElementById('reviewForm').reset();
}
