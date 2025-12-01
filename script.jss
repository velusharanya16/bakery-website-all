// BUTTON BOUNCE EFFECT
const buttons = document.querySelectorAll('button, .btn');
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.classList.add('bounce');
    setTimeout(()=>btn.classList.remove('bounce'),300);
  });
});

// PLACE ORDER
function placeOrder(itemName){
  const popup = document.createElement("div");
  popup.classList.add("order-popup");
  popup.innerHTML=`
    <div class="order-card">
      <h2>🎀 Order Confirmed 🎀</h2>
      <p>Your <strong>${itemName}</strong> is on the way! 🍰</p>
      <button onclick="this.parentElement.parentElement.remove()">Okay 💗</button>
    </div>`;
  document.body.appendChild(popup);
}

// CUSTOM ORDER
function submitCustomOrder(e){
  e.preventDefault();
  const dessert = document.getElementById('dessert').value;
  const popup = document.createElement("div");
  popup.classList.add("order-popup");
  popup.innerHTML=`
    <div class="order-card">
      <h2>🎀 Request Sent 🎀</h2>
      <p>Your custom <strong>${dessert}</strong> request has been sent! 🍰</p>
      <button onclick="this.parentElement.parentElement.remove()">Okay 💗</button>
    </div>`;
  document.body.appendChild(popup);
  document.getElementById('customForm').reset();
}

// REVIEW SUBMISSION
function submitReview(e){
  e.preventDefault();
  const name=document.getElementById('name').value;
  const dessert=document.getElementById('dessert').value;
  const reviewText=document.getElementById('review').value;

  const reviewCard=document.createElement("div");
  reviewCard.classList.add("review-card");
  reviewCard.innerHTML=`<h3>💗 ${name}</h3><p><strong>${dessert}:</strong> ${reviewText}</p>`;

  const container=document.getElementById('reviewsContainer');
  if(container) container.prepend(reviewCard);

  const popup=document.createElement("div");
  popup.classList.add("order-popup");
  popup.innerHTML=`
    <div class="order-card">
      <h2>🎀 Review Submitted 🎀</h2>
      <p>Thank you for sharing your experience! 💕</p>
      <button onclick="this.parentElement.parentElement.remove()">Okay 💗</button>
    </div>`;
  document.body.appendChild(popup);

  document.getElementById('reviewForm').reset();
}

