/* ============================================
   佰氏健康集团官网 - 主逻辑
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- 移动端菜单 ---------- */
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        // 点击导航链接后自动关闭菜单
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    /* ---------- 数字滚动动画 ---------- */
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    let statsAnimated = false;

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 2000; // 2秒
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(eased * target);
            el.textContent = current.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString();
            }
        }
        requestAnimationFrame(update);
    }

    function checkStatsVisible() {
        if (statsAnimated) return;
        const firstStat = statNums[0];
        if (!firstStat) return;
        const rect = firstStat.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            statsAnimated = true;
            statNums.forEach(el => animateCounter(el));
        }
    }

    window.addEventListener('scroll', checkStatsVisible);
    checkStatsVisible(); // 首屏检查

    /* ---------- 滚动淡入动画 ---------- */
    const fadeEls = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeEls.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    /* ---------- 导航高亮 ---------- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ---------- 平滑滚动（锚点链接） ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- 图片延迟加载占位（工厂图片） ---------- */
    const factoryCards = document.querySelectorAll('.factory-img-placeholder');
    factoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    /* ---------- 按钮点击波纹效果 ---------- */
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                width: ${size}px;
                height: ${size}px;
                left: ${e.clientX - rect.left - size/2}px;
                top: ${e.clientY - rect.top - size/2}px;
                transform: scale(0);
                animation: ripple-anim 0.6s ease-out;
                pointer-events: none;
            `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // 注入 ripple 动画
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple-anim {
                to { transform: scale(4); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    console.log('%c佰氏健康集团官网 %c 已加载', 
        'background:#2E7D32;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:bold;',
        'background:#1565C0;color:#fff;padding:4px 8px;border-radius:0 4px 4px 0;');

});
