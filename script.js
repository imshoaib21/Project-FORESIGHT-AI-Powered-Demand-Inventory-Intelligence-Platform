const dashboards=[
['Executive Dashboard','Revenue, gross profit, daily trends and category distribution.'],
['Sales Analytics','Monthly sales patterns, growth comparisons and promotional impact.'],
['Product Performance','Product revenue ranking, profitability and sales concentration.'],
['Category Performance','Compare category contribution, revenue and performance.'],
['Inventory Dashboard','Stock value, age, turnover and inventory by category.'],
['Stockout Risk','Critical, warning and safe stock indicators and reorder analysis.'],
['Overstock Analysis','Excess inventory, holding costs and slow-moving products.'],
['Promotion Analytics','Promotional sales, revenue lift displays and category impact.'],
['Seasonality Dashboard','Explore demand trends by season, month and holiday.'],
['Demand Forecast','Forecast displays, confidence bounds and error indicators.'],
['Customer Insights','Customer groups, purchase frequency and customer contribution.'],
['Executive Recommendations','Business health indicators, risk assessment and priorities.']
];
const list=document.getElementById('page-list'),title=document.getElementById('dash-title'),desc=document.getElementById('dash-desc'),img=document.getElementById('dashboard-img'),chip=document.getElementById('page-chip');let current=0;
dashboards.forEach(([name],index)=>{let button=document.createElement('button');button.className='page-item';button.type='button';button.innerHTML=`<span>${String(index+1).padStart(2,'0')}</span> ${name}`;button.addEventListener('click',()=>showPage(index));list.appendChild(button)});
function showPage(index){current=(index+dashboards.length)%dashboards.length;title.textContent=dashboards[current][0];desc.textContent=dashboards[current][1];img.src=`assets/page-${String(current+1).padStart(2,'0')}.webp`;img.alt=`Page ${current+1}: ${dashboards[current][0]} from the Power BI PDF export`;chip.textContent=`${String(current+1).padStart(2,'0')} / 12`;list.querySelectorAll('button').forEach((b,i)=>{b.classList.toggle('active',i===current);b.setAttribute('aria-current',i===current?'true':'false')})}showPage(0);
document.getElementById('prev-page').addEventListener('click',()=>showPage(current-1));document.getElementById('next-page').addEventListener('click',()=>showPage(current+1));
const lightbox=document.getElementById('lightbox');document.getElementById('open-preview').addEventListener('click',()=>{document.getElementById('lightbox-title').textContent=dashboards[current][0];document.getElementById('lightbox-img').src=img.src;lightbox.showModal()});document.getElementById('close-preview').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
window.addEventListener('scroll',()=>{let total=document.documentElement.scrollHeight-innerHeight;document.getElementById('progress').style.width=(total?scrollY/total*100:0)+'%'},{passive:true});
