var jwProjects = [
  { client:'Citi', name:'e for education', cat:['campaign','ooh'], wide:true, img:'eforeducationthumbnail.webp', url:'work/citi-e-for-education.html' },
  { client:'Citi', name:'Private Company Access', cat:['campaign','branding','ooh'], wide:false, img:'pca-screenshots/pca-thumbnail.webp', url:'work/citi-private-company-access.html' },
  { client:'Citi', name:'Paris Paralympic pins', cat:['campaign','ooh'], wide:false, img:'paralympicpins_thumbnail.webp', url:'work/paris-paralympic-pins.html' },
  { client:'Citi', name:'Sparc Creative Identity', cat:['branding'], wide:true, img:'sparc-screenshots/page_3_screenshot.webp', url:'work/citi-sparc-creative-identity.html' },
  { client:'Adidas', name:'Heat RDY', cat:['campaign','social'], wide:false, img:'images/heat-rdy-beckham-kv_cropped2.webp', url:'work/adidas-heat-rdy.html' },
  { client:'Starbucks', name:'Phantom frapp', cat:['campaign','social','motion'], wide:false, img:'phantomfrapp_thumbnail.webp', url:'work/starbucks-phantom-frapp.html' },
  { client:'Starbucks', name:'Forget me not', cat:['campaign','ooh'], wide:true, img:'forgetmenot_thumbnail.webp', url:'work/starbucks-forget-me-not.html' },
  { client:'Adidas', name:'Team wear', cat:['campaign','ooh'], wide:false, img:'images/teamwear-team.webp', url:'work/adidas-team-wear.html' },
  { client:'COP26', name:"Would you rather?", cat:['campaign','branding','ooh'], wide:false, img:'images/cop26-1.webp', url:'work/cop26-would-you-rather.html' },
  { client:'Original Source', name:'Pack more in', cat:['campaign','motion'], wide:true, img:'originalsource_thumbnail.webp', url:'work/original-source-pack-more-in.html' },
];

function jwSetActive(chip) {
  document.querySelectorAll('.jw-chip').forEach(function(c) {
    c.style.backgroundColor = 'transparent';
    c.style.borderColor = '#bbb';
    c.style.color = '#666';
    c.style.fontWeight = '400';
  });
  chip.style.backgroundColor = '#49B649';
  chip.style.borderColor = '#49B649';
  chip.style.color = '#000';
  chip.style.fontWeight = '700';
}

function jwBuildGrid(filter) {
  var grid = document.getElementById('jw-grid');
  grid.innerHTML = '';
  var isMobile = window.innerWidth <= 600;
  var useWide = filter === 'all' && !isMobile;
  var visible = filter === 'all' ? jwProjects : jwProjects.filter(function(p) { return p.cat.indexOf(filter) > -1; });

  visible.forEach(function(p, i) {
    var isWide = useWide && p.wide;
    var tile = document.createElement('a');
    tile.href = p.url;
    tile.className = 'jw-tile' + (isWide ? ' wide' : '');
    tile.style.animationDelay = (0.3 + i * 0.08) + 's';
    tile.addEventListener('animationend', function() {
      this.style.opacity = '1';
      this.style.transform = 'none';
      this.style.animation = 'none';
    });
    tile.innerHTML =
      '<div class="jw-tile-bg" style="' + (p.img ? 'background-image:url(' + p.img + ');' : '') + '"></div>' +
      '<div class="jw-tile-green"></div>' +
      '<div class="jw-tile-vw">' +
        '<div class="jw-hover-client">' + p.client + '</div>' +
        '<div class="jw-hover-name">' + p.name + '</div>' +
      '</div>';
    grid.appendChild(tile);
  });

  var countEl = document.getElementById('jw-count');
  if (countEl) countEl.textContent = visible.length < 10 ? '0' + visible.length : '' + visible.length;
}

var jwActiveFilter = 'all';
var jwLastIsMobile = window.innerWidth <= 600;

document.querySelectorAll('.jw-chip').forEach(function(chip) {
  chip.addEventListener('click', function() {
    jwActiveFilter = chip.getAttribute('data-filter');
    jwSetActive(chip);
    jwBuildGrid(jwActiveFilter);
  });
});

window.addEventListener('resize', function() {
  var isMobile = window.innerWidth <= 600;
  if (isMobile === jwLastIsMobile) return;
  jwLastIsMobile = isMobile;
  jwBuildGrid(jwActiveFilter);
});

jwSetActive(document.querySelector('[data-filter="all"]'));
jwBuildGrid(jwActiveFilter);
