	// برای ارسال نوتیفیکیشن، ابتدا باید از کاربر اجازه بگیرید.
	if (Notification.permission === 'granted') {
		const notification = new Notification('عنوان نوتیفیکیشن', {
			body: 'این یک نوتیفیکیشن نمونه است.',
			icon: 'https://example.com/icon.png'
		});

		// رویدادهای مرتبط با نوتیفیکیشن
		notification.onclick = () => {
			console.log('نوتیفیکیشن کلیک شد.');
			window.open('https://example.com');
		};

		notification.onclose = () => {
			console.log('نوتیفیکیشن بسته شد.');
		};
	}

	// پس از دریافت اجازه، می‌توانید نوتیفیکیشن ارسال کنید:
	if (Notification.permission === 'granted') {
		const notification = new Notification('عنوان نوتیفیکیشن', {
			body: 'این یک نوتیفیکیشن نمونه است.',
			icon: 'https://example.com/icon.png'
		});

		// رویدادهای مرتبط با نوتیفیکیشن
		notification.onclick = () => {
			console.log('نوتیفیکیشن کلیک شد.');
			window.open('https://example.com');
		};

		notification.onclose = () => {
			console.log('نوتیفیکیشن بسته شد.');
		};
	}
