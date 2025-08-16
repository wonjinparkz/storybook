/* KDS Script - Safe Version */
(function() {
    // Check if variables already exist in window scope
    if (!window.$kds_html) {
        window.$kds_html = document.querySelector('html');
    }
    if (!window.$kds_body) {
        window.$kds_body = document.querySelector('body');
    }
    
    // Use the window scope variables
    const $kds_html = window.$kds_html;
    const $kds_body = window.$kds_body;

    const headerHeight = {
        pc: () => {
            const $header = document.querySelector('#header');
            if ($header != null) {
                const $inner = $header.querySelector('.head-body .inner');
                const $nav = $header.querySelector('.head-gnb');
                if ($inner && $nav) {
                    const _pcHeight = $inner.offsetHeight + $nav.offsetHeight;
                    $kds_html.style.setProperty('--header-pc-height', `${_pcHeight}px`);
                }
            }
        },
        mob: () => {
            const $header = document.querySelector('#header');
            if ($header != null) {
                const $inner = $header.querySelector('.head-body .inner');
                if ($inner) {
                    const _mobHeight = $inner.offsetHeight;
                    $kds_html.style.setProperty('--header-mob-height', `${_mobHeight}px`);
                }
            }
        }
    }

    const lnbActive = {
        listToggle: () => {
            const $lnb = document.querySelector('.g-aside');
            if ($lnb != null) {
                const $menu = $lnb.querySelectorAll('.lnb-menu');
                const $list = $lnb.querySelectorAll('.ul1 > .d1');

                $list.forEach((item) => {
                    const isActiveChild = item.querySelector('.d2.active') || item.querySelector('.ul2 .d3.active');
                    
                    if (isActiveChild) {
                        item.classList.add('active');
                        
                        const $ul2 = item.querySelector('.ul2');
                        if ($ul2) {
                            $ul2.style.display = 'block';
                        }
                    }
                });

                $menu.forEach((menu) => {
                    menu.addEventListener('click', (e) => {
                        const $target = e.target;
                        const $targetParent = $target.closest('.d1');

                        if ($targetParent != null && $target.classList.contains('m1')) {
                            if (!$targetParent.classList.contains('active')) {
                                $targetParent.classList.add('active');
                                const $siblingUl = $targetParent.querySelector('.ul2');
                                if ($siblingUl) {
                                    $siblingUl.style.display = 'block';
                                }
                            } else {
                                $targetParent.classList.remove('active');
                                const $siblingUl = $targetParent.querySelector('.ul2');
                                if ($siblingUl) {
                                    $siblingUl.style.display = 'none';
                                }
                            }
                        }
                    });
                });
            }
        }
    }

    // Safe version - check for elements before adding listeners
    const lnbRes = {
        init: () => {
            lnbRes.open();
            lnbRes.close();
        },
        open: () => {
            const $mobMenu = document.querySelector('#g-header .mob-menu') || document.querySelector('#m-gnb-open');
            const $lnb = document.querySelector('.g-aside') || document.querySelector('#m-gnb');

            if ($mobMenu && $lnb) {
                $mobMenu.addEventListener('click', () => {
                    if (!$lnb.classList.contains('active')) {
                        $lnb.classList.add('active');
                        $kds_body.classList.add('scroll-no');
                    }
                });
            }
        },
        close: () => {
            const $lnb = document.querySelector('.g-aside') || document.querySelector('#m-gnb');
            if ($lnb != null) {
                const $lnbClose = $lnb.querySelector('.btn.ico-close');

                if ($lnbClose) {
                    $lnbClose.addEventListener('click', () => {
                        $lnb.classList.remove('active');
                        $kds_body.classList.remove('scroll-no');
                    });
                }
            }
        }
    }

    /* top button create - safe version */
    function createTopButton() {
        const contentArea = document.querySelector('#g-container .g-content') || document.querySelector('main');
        
        if (contentArea) {
            // Check if button already exists
            if (!contentArea.querySelector('.go-top')) {
                const goTopText = document.createTextNode('TOP');
                const goTopTag = document.createElement('button');
                goTopTag.setAttribute('class', 'btn tertiary sm go-top');
                goTopTag.setAttribute('type', 'button');
                goTopTag.appendChild(goTopText);
                contentArea.append(goTopTag);
                
                window.addEventListener('scroll', () => {
                    if (window.scrollY > (window.innerHeight * 2 - (window.innerHeight / 2))) {
                        goTopTag.classList.add('active');
                    }
                    else {
                        goTopTag.classList.remove('active');
                    }
                });
                
                goTopTag.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        }
    }

    function goTopBtn() {
        // This function is kept for compatibility but the actual implementation is in createTopButton
        createTopButton();
    }

    // Make functions available globally if needed
    window.headerHeight = headerHeight;
    window.lnbActive = lnbActive;
    window.lnbRes = lnbRes;
    window.goTopBtn = goTopBtn;

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            headerHeight.pc();
            headerHeight.mob();
            lnbActive.listToggle();
            lnbRes.init();
            goTopBtn();
        }, 100);
    });

    window.addEventListener('resize', () => {
        headerHeight.pc();
        headerHeight.mob();
    });
})();