/* Safe version of ui-pattern-script.js */
(function() {
    // Store original functions if they exist
    const originalQuickNav = window.quickNav || {};
    
    // Override problematic quickNav functions
    window.quickNav = {
        init: function() {
            // Safe initialization
            const container = document.querySelector("#container") || document.querySelector("#content") || document.querySelector("main");
            if (container) {
                // Only initialize if container exists
                if (originalQuickNav.init) {
                    originalQuickNav.init();
                }
            }
        },
        scroll: function() {
            let _lastScrollY = 0;
            window.addEventListener('scroll', () => {
                const $wrap = document.querySelector("#wrap");
                const container = document.querySelector("#container") || document.querySelector("#content") || document.querySelector("main");
                
                if (!container || !$wrap) return; // Exit if elements don't exist
                
                const _conOffsetTop = container.offsetTop;
                const _scrollY = window.scrollY;
                const _scrollDown = _scrollY > _lastScrollY;
                const _scrollUp = _scrollY < _lastScrollY;
                
                if (_scrollY > _conOffsetTop + 50 && _scrollDown) {
                    $wrap.classList.add("scroll-down");
                    $wrap.classList.remove("scroll-up");
                }
                if (_scrollY > _conOffsetTop + 50 && _scrollUp) {
                    $wrap.classList.add("scroll-up");
                    $wrap.classList.remove("scroll-down");
                }
                if (_scrollY < _conOffsetTop + 50) {
                    $wrap.classList.remove("scroll-down");
                    $wrap.classList.remove("scroll-up");
                }
                
                _lastScrollY = _scrollY;
            });
        }
    };
    
    // Load the original script but with our overrides in place
    const script = document.createElement('script');
    script.src = '/storage/portfolio/_component/government/js/ui-pattern-script.js';
    script.onload = function() {
        // After loading, ensure our safe versions are used
        if (window.quickNav && window.quickNav.scroll) {
            // Already overridden above
        }
    };
    
    // Don't load the original script, just use our safe implementation
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            // Safe initialization
            if (window.quickNav && window.quickNav.init) {
                window.quickNav.init();
            }
            if (window.quickNav && window.quickNav.scroll) {
                window.quickNav.scroll();
            }
        }, 100);
    });
})();