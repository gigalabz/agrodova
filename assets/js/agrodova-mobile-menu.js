// agrodova-mobile-menu.js (v3 - normalize Superfish classes + stacked layout + robust accordion)
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.slide-out-widget-area-toggle a');
    var headerNav = document.querySelector('#top nav');
    if (!toggle || !headerNav) return;

    // Overlay + panel
    var overlay = document.createElement('div');
    overlay.id = 'agro-mm-overlay';
    overlay.setAttribute('role', 'presentation');

    var panel = document.createElement('aside');
    panel.id = 'agro-mobile-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.setAttribute('role', 'dialog');

    var ph = document.createElement('div');
    ph.className = 'agro-mm-header';
    ph.innerHTML = '<button type="button" class="agro-mm-close" aria-label="Close menu">×</button>';
    panel.appendChild(ph);

    // Clone header nav
    var pb = document.createElement('div');
    pb.className = 'agro-mm-body';
    pb.innerHTML = headerNav.innerHTML;

    // ===== Normalize: kill Superfish layout classes inside the panel =====
    // 1) Root UL: change sf-menu -> agro-menu (so theme CSS won't hit it)
    var firstSf = pb.querySelector('ul.sf-menu');
    if (!firstSf) return;
    firstSf.classList.remove('sf-menu');
    firstSf.classList.add('agro-menu');

    // 2) Remove/adjust other layout-affecting classes from all items
    pb.querySelectorAll('ul.sf-menu').forEach(function(ul){ ul.classList.remove('sf-menu'); });
    pb.querySelectorAll('li').forEach(function(li){
      li.style.cssText = ''; // drop inline floats if any
      li.classList.remove('current-menu-item','current-menu-ancestor','sfHover');
    });
    pb.querySelectorAll('ul, a').forEach(function(el){
      el.style.cssText = '';
    });

    // Build structure wrappers
    var wrap = document.createElement('div');
    wrap.className = 'agro-mm-wrap';
    wrap.appendChild(firstSf);

    // Move optional right-side buttons into utilities
    var rightButtons = pb.querySelector('ul.buttons');
    var util = document.createElement('div');
    util.className = 'agro-mm-utilities';
    if (rightButtons) {
      rightButtons.classList.remove('sf-menu');
      util.appendChild(rightButtons);
    }

    var bodyNav = document.createElement('nav');
    bodyNav.appendChild(wrap);
    bodyNav.appendChild(util);
    panel.appendChild(bodyNav);

    document.body.appendChild(overlay);
    document.body.appendChild(panel);

    // ================= Styling (scoped) =================
    var css = `
      #agro-mm-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);opacity:0;pointer-events:none;transition:opacity .2s ease;z-index:9998}
      #agro-mobile-panel{position:fixed;top:0;right:0;height:100vh;width:min(86vw,360px);background:#fff;transform:translateX(100%);transition:transform .25s ease;z-index:9999;box-shadow:-14px 0 34px rgba(0,0,0,.14);display:flex;flex-direction:column}
      .agro-mm-header{display:flex;justify-content:flex-end;align-items:center;padding:12px 14px;border-bottom:1px solid #eee}
      .agro-mm-close{font-size:28px;line-height:1;border:0;background:transparent;cursor:pointer;padding:6px 10px}
      .agro-mm-body{overflow:auto;max-height:calc(100vh - 52px)}
      .agro-mm-wrap{padding:6px 10px}
      /* Reset all lists inside panel */
      #agro-mobile-panel .agro-mm-wrap ul,
      #agro-mobile-panel .agro-mm-wrap li{margin:0;padding:0;list-style:none}
      /* Root list stacked */
      #agro-mobile-panel .agro-menu{display:block !important}
      #agro-mobile-panel .agro-menu > li{display:block !important;width:100% !important;border-bottom:1px solid #f1f1f1;float:none !important}
      #agro-mobile-panel .agro-menu > li > a{display:flex;align-items:center;gap:10px;padding:14px 10px;font-size:16px;color:#222;text-decoration:none;white-space:normal}
      #agro-mobile-panel .agro-menu > li > a:hover{background:#f7f7f7}
      /* caret + row for parents */
      .agro-mm-item{display:flex;align-items:center;gap:10px;width:100%}
      .agro-mm-text{flex:1;min-width:0}
      .agro-mm-caret{margin-left:auto;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border:1px solid #e8e8e8;border-radius:8px;font-size:16px;line-height:1;cursor:pointer;background:#fff}
      /* Submenus */
      .agro-mm-sub{display:none;padding:0 0 8px 0}
      .agro-mm-sub > li{display:block;border-bottom:1px solid #f7f7f7}
      .agro-mm-sub > li > a{display:block;padding:12px 10px 12px 22px;font-size:15px;color:#333;text-decoration:none;white-space:normal}
      .agro-mm-sub > li > a:hover{background:#f9f9f9}
      .agro-open > .agro-mm-sub{display:block}
      .agro-open > a .agro-mm-caret,
      .agro-open > .agro-mm-item .agro-mm-caret{transform:rotate(90deg)}
      /* Nested submenus indent */
      .agro-mm-sub .agro-mm-sub{padding-left:12px}
      /* Safety: reveal native UL if class missing for any reason */
      .agro-open > ul { display:block; }
      /* Utility row (e.g., account icon) */
      .agro-mm-utilities{margin-top:6px;border-top:1px solid #f1f1f1;padding:10px 8px}
      .agro-mm-utilities ul{display:flex;gap:8px;align-items:center}
      .agro-mm-utilities li{border:0}
      .agro-mm-utilities a{padding:10px;border:1px solid #eee;border-radius:10px;display:flex;align-items:center;gap:8px;color:#222;text-decoration:none}
      /* Flags in language items */
      #agro-mobile-panel img.wpml-ls-flag{height:16px;width:auto;vertical-align:middle;margin-right:8px}
      /* Mobile only */
      @media (min-width:1000px){#agro-mm-overlay,#agro-mobile-panel{display:none !important}}
      body.agro-mm-open #agro-mm-overlay{opacity:1;pointer-events:auto}
      body.agro-mm-open #agro-mobile-panel{transform:translateX(0)}
    `;
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    // ========== Accordion behavior (robust) ==========
    var rootUL = panel.querySelector('.agro-menu');
    if (rootUL) {
      // Helper: get the direct submenu (avoid :scope for compatibility)
      function getDirectSubmenu(li){
        for (var i=0; i<li.children.length; i++){
          if (li.children[i].tagName === 'UL') return li.children[i];
        }
        return null;
      }

      rootUL.querySelectorAll('li.menu-item-has-children').forEach(function(li){
        li.classList.add('agro-mm-has-children');

        // find direct <a> child
        var link = null;
        for (var i=0; i<li.children.length; i++){
          if (li.children[i].tagName === 'A'){ link = li.children[i]; break; }
        }
        var sub = getDirectSubmenu(li);

        if (sub) sub.classList.add('agro-mm-sub');
        if (!link) return;

        // Build row + caret
        var textSpan = document.createElement('span');
        textSpan.className = 'agro-mm-text';
        textSpan.innerHTML = link.innerHTML;

        var row = document.createElement('div');
        row.className = 'agro-mm-item';
        row.appendChild(textSpan);

        var caret = document.createElement('button');
        caret.type = 'button';
        caret.className = 'agro-mm-caret';
        caret.setAttribute('aria-label', 'Expand submenu');
        caret.innerHTML = '›';
        row.appendChild(caret);

        link.innerHTML = '';
        link.appendChild(row);

        function openThis(){ li.classList.add('agro-open'); }
        function closeThis(){ li.classList.remove('agro-open'); }
        function toggleThis(){ li.classList.toggle('agro-open'); }

        // Caret always toggles
        caret.addEventListener('click', function(e){
          e.preventDefault();
          // close siblings (true accordion)
          var parentUL = li.parentElement;
          if (parentUL) {
            // narrow to direct children only (no :scope used)
            for (var n=0; n<parentUL.children.length; n++){
              var sib = parentUL.children[n];
              if (sib !== li && sib.classList && sib.classList.contains('menu-item-has-children')) {
                sib.classList.remove('agro-open');
              }
            }
          }
          toggleThis();
        });

        // Parent link behavior:
        // - If href is "#" or empty, just toggle
        // - If it has a real href, first tap opens, second tap navigates
        link.addEventListener('click', function(e){
          var href = link.getAttribute('href') || '';
          var isRealLink = href && href !== '#' && href !== 'javascript:void(0)';

          if (!isRealLink) {
            e.preventDefault();
            toggleThis();
            return;
          }

          // real link: on small screens, first tap opens; second tap navigates
          if (window.innerWidth < 1000) {
            if (!li.classList.contains('agro-open')) {
              e.preventDefault();
              // close siblings
              var parentUL = li.parentElement;
              if (parentUL) {
                for (var n=0; n<parentUL.children.length; n++){
                  var sib = parentUL.children[n];
                  if (sib !== li && sib.classList && sib.classList.contains('menu-item-has-children')) {
                    sib.classList.remove('agro-open');
                  }
                }
              }
              openThis();
            } // else allow navigation
          }
        });
      });
    }

    // Open/close
    function openMenu(){
      document.body.classList.add('agro-mm-open');
      panel.setAttribute('aria-hidden','false');
      toggle.setAttribute('aria-expanded','true');
    }
    function closeMenu(){
      document.body.classList.remove('agro-mm-open');
      panel.setAttribute('aria-hidden','true');
      toggle.setAttribute('aria-expanded','false');
      panel.querySelectorAll('li.menu-item-has-children.agro-open').forEach(function(li){
        li.classList.remove('agro-open');
      });
    }

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.contains('agro-mm-open') ? closeMenu() : openMenu();
    });
    ['mouseenter','touchstart'].forEach(function(evt){
      toggle.addEventListener(evt, function(){
        if (window.innerWidth < 1000 && !document.body.classList.contains('agro-mm-open')) openMenu();
      }, {passive:true});
    });
    overlay.addEventListener('click', closeMenu);
    panel.querySelector('.agro-mm-close').addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', function(){ if (window.innerWidth >= 1000) closeMenu(); });
  });
})();
