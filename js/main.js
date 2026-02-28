// ============================================
// 四月老師魔法教室 - 主要 JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // 漢堡菜單功能
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // 點擊菜單項目時關閉菜單
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });

        // 點擊頁面其他地方時關閉菜單
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickInsideHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickInsideHamburger) {
                navMenu.classList.remove('active');
            }
        });
    }

    // 平滑滾動到錨點
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 檢查是否是預留連結
            if (href === '#blog' || href === '#newsletter' || href === '#privacy' || 
                href === '#terms' || href === '#contact') {
                e.preventDefault();
                showComingSoonMessage(href);
            } else if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 課程按鈕點擊事件
    document.querySelectorAll('.course-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const courseTitle = this.closest('.course-card').querySelector('h3').textContent;
            alert(`感謝您對「${courseTitle}」的興趣！\n\n請通過以下方式聯絡我們進行報名：\n📧 info@hoodoo.me\n📞 (02) 1234-5678`);
        });
    });

    // 預約按鈕點擊事件
    document.querySelectorAll('.service-details .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
            alert(`感謝您對「${serviceTitle}」的興趣！\n\n請通過以下方式與我們預約：\n📧 info@hoodoo.me\n📞 (02) 1234-5678`);
        });
    });

    // 添加頁面加載動畫
    addPageLoadAnimation();

    // 添加滾動效果
    addScrollEffects();
});

// 顯示即將推出的消息
function showComingSoonMessage(section) {
    const messages = {
        '#blog': '部落格功能即將推出，敬請期待！',
        '#newsletter': '電子報訂閱功能即將推出，敬請期待！',
        '#privacy': '隱私政策即將推出，敬請期待！',
        '#terms': '服務條款即將推出，敬請期待！',
        '#contact': '聯絡表單即將推出，敬請期待！'
    };
    
    alert(messages[section] || '此功能即將推出，敬請期待！');
}

// 頁面加載動畫
function addPageLoadAnimation() {
    const cards = document.querySelectorAll('.course-card, .service-card, .philosophy-card, .experience-item, .faq-item');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });

    // 添加 CSS 動畫
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// 滾動效果
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.course-card, .service-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// 頁面性能監測
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('頁面加載時間：' + pageLoadTime + 'ms');
        }, 0);
    });
}

// 防止表單重複提交
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '提交中...';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = '提交';
            }, 2000);
        }
    });
});

// 控制台歡迎消息
console.log('%c歡迎來到四月老師魔法教室！', 'color: #ff9800; font-size: 16px; font-weight: bold;');
console.log('%c如有任何問題，請聯絡我們：info@hoodoo.me', 'color: #1a5f5f; font-size: 14px;');
