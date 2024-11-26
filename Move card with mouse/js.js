const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
  const cardRect = card.getBoundingClientRect();
  const centerX = cardRect.left + cardRect.width / 2;
  const centerY = cardRect.top + cardRect.height / 2;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  // افزایش چرخش برای تأثیر بیشتر
  const rotateX = (deltaY / cardRect.height) * 20; // مقدار چرخش عمودی بیشتر
  const rotateY = (deltaX / cardRect.width) * -20; // مقدار چرخش افقی بیشتر

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // اضافه کردن سایه برای طبیعی‌تر شدن افکت
  const shadowX = (deltaX / cardRect.width) * 20;
  const shadowY = (deltaY / cardRect.height) * 20;
  card.style.boxShadow = `${-shadowX}px ${shadowY}px 40px rgba(255, 255, 255, 0.3)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)'; // بازگشت به حالت اولیه
  card.style.boxShadow = '0 15px 30px rgba(255, 255, 255, 0.3)'; // بازگشت به سایه اصلی
});
