// ترجمه‌ها
const translations = {
  en: {
    title: 'Welcome',
    description: 'This is a sample multilingual website.'
  },
  fa: {
    title: 'خوش آمدید',
    description: 'این یک وب‌سایت چندزبانه نمونه است.'
  },
}



// تغییر زبان
function setLanguage(lang) {
  // ذخیره زبان انتخاب شده
  localStorage.setItem('selectedLanguage', lang)

  // به‌روزرسانی متن‌ها
  let elements = document.querySelectorAll('[data-lang]')

  for (ele of elements) {
    const key = ele.getAttribute('data-lang')
    ele.textContent = translations[lang][key]
  }
}


// بارگذاری زبان ذخیره شده
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en'
  setLanguage(savedLang)
})
