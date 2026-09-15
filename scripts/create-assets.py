from pathlib import Path
import json

root = Path(__file__).resolve().parent.parent
def write(name, text):
    target = root / name
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(text, encoding='utf-8')

symbol = '<path d="M36 9H18L7 20v19l11 11h23V29H26v8h7v5H22l-7-7V24l7-7h14z" fill="#54bfff"/><path d="M37 4h15v15h-7v-5L33 26l-5-5L40 9h-3z" fill="#91adff"/>'
write('public/favicon.svg', f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><rect width="60" height="60" rx="12" fill="#07111f"/>{symbol}</svg>')
for name, color in [('gramvista-logo-light','#eef5ff'),('gramvista-logo','#122238')]:
    write(f'public/images/brand/{name}.svg',f'<svg xmlns="http://www.w3.org/2000/svg" width="290" height="60" viewBox="0 0 290 60">{symbol}<text x="65" y="30" font-family="Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="2" fill="{color}">GRAMVISTA</text><text x="66" y="46" font-family="Arial,sans-serif" font-size="8" letter-spacing="3.3" fill="#8ea7c1">EMPIRE GROUP LIMITED</text></svg>')
write('public/images/brand/gramvista-symbol.svg',f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">{symbol}</svg>')

defs='''<defs>
<linearGradient id="top" x2="0.8" y2="1"><stop stop-color="#35516b"/><stop offset="1" stop-color="#17293e"/></linearGradient>
<linearGradient id="side" x2="0" y2="1"><stop stop-color="#1c354d"/><stop offset="1" stop-color="#0a1423"/></linearGradient>
<linearGradient id="screen" x2="1" y2="1"><stop stop-color="#132d43"/><stop offset="1" stop-color="#0a1425"/></linearGradient>
<linearGradient id="cyan"><stop stop-color="#68d8ff"/><stop offset="1" stop-color="#4986dd"/></linearGradient>
<linearGradient id="violet"><stop stop-color="#897dfa"/><stop offset="1" stop-color="#425bc7"/></linearGradient>
<radialGradient id="aura"><stop stop-color="#229bc2" stop-opacity=".15"/><stop offset="1" stop-color="#229bc2" stop-opacity="0"/></radialGradient>
<filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="12"/></filter>
<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="matrix(1,.5,-1,.5,500,60)"><path d="M40 0H0V40" fill="none" stroke="#456886" stroke-opacity=".15"/></pattern>
</defs>'''
scene='''<ellipse cx="590" cy="730" rx="365" ry="73" fill="#000" opacity=".3" filter="url(#shadow)"/>
<path d="M135 526L590 301 1061 536 606 767Z" fill="#0c1b2d" stroke="#2c4e69"/>
<path d="M135 526v24l471 237v-20z" fill="#0a1524" stroke="#21374c"/>
<path d="M606 767l455-231v24L606 787z" fill="#10243a" stroke="#29465d"/>
<path d="M220 566l384 192 369-184" fill="none" stroke="#53bfe6" stroke-width="2" opacity=".55"/>
<path d="M379 580l-78 39 201 102 122-61M787 484l158 78-147 74M425 422l-110-56 186-92" fill="none" stroke="#4386a6" stroke-width="2" stroke-dasharray="7 7"/>
<g><path d="M717 232l96-47 117 59-96 48z" fill="url(#top)" stroke="#56718b"/>
<path d="M717 232v284l117 59V292z" fill="url(#side)" stroke="#2d4c69"/>
<path d="M834 292l96-48v284l-96 47z" fill="#0b192a" stroke="#35536a"/>
<path d="M735 268l80 40v49l-80-40zM735 334l80 40v49l-80-40zM735 400l80 40v49l-80-40z" fill="#11283d" stroke="#33536c"/>
<path d="M746 290l33 16M746 356l33 16M746 422l33 16" stroke="#51758e" stroke-width="4"/>
<path d="M746 305l47 23M746 371l47 23M746 437l47 23" stroke="#2c4962" stroke-width="3"/>
<path d="M854 318l54-27M854 329l54-27M854 340l54-27M854 384l54-27M854 395l54-27M854 406l54-27M854 450l54-27M854 461l54-27M854 472l54-27" stroke="#263d53" stroke-width="3"/>
<ellipse cx="799" cy="325" rx="3" ry="5" fill="#59e0ba"/><ellipse cx="799" cy="391" rx="3" ry="5" fill="#59e0ba"/><ellipse cx="799" cy="457" rx="3" ry="5" fill="#59c9f7"/>
<path d="M739 249l67-33 69 34-67 34z" fill="none" stroke="#547991"/><path d="M755 251l52-25 49 24" fill="none" stroke="#38556d"/>
</g>
<g><path d="M328 277q0-15 15-8l285 141q13 7 13 21v200L328 474z" fill="#223a51" stroke="#668198" stroke-width="2"/>
<path d="M344 290l280 140v173L344 463z" fill="url(#screen)" stroke="#3f6380"/>
<path d="M350 295l270 135v15L350 310z" fill="#234560"/>
<path d="M353 318l43 21v137l-43-22z" fill="#102135"/>
<path d="M362 336l23 11M362 353l23 11M362 370l23 11M362 387l23 11M362 404l23 11" stroke="#416680" stroke-width="4"/>
<path d="M409 351l66 33v7l-66-33z" fill="#8cbed7"/>
<path d="M409 370l57 29v34l-57-28zM476 404l57 29v34l-57-28zM543 437l64 32v34l-64-32z" fill="#213b53"/>
<path d="M419 388l22 11M486 422l22 11M553 455l22 11" stroke="#70caed" stroke-width="6"/>
<path d="M410 423l198 99v61l-198-99z" fill="#132b40"/>
<path d="M421 473l22-10 25 18 25-4 30 7 24-4 25 11 28-7" fill="none" stroke="#5bceeb" stroke-width="3"/>
<path d="M421 473l22-10 25 18 25-4 30 7 24-4 25 11 28-7v89L421 484z" fill="#34b8e5" opacity=".08"/>
<path d="M328 474l313 157-151 76-313-157z" fill="url(#top)" stroke="#647f94"/>
<path d="M177 550v12l313 157v-12z" fill="#23384d"/><path d="M490 707l151-76v12l-151 76z" fill="#0b1929"/>
<path d="M332 496l239 120-87 43-239-120z" fill="#0a192a" stroke="#456277"/>
<path d="M319 510l239 120M304 518l239 119M287 526l239 120M270 534l239 120" stroke="#35506a" stroke-width="4"/>
<path d="M349 505l-70 35M373 517l-70 35M397 529l-70 35M421 541l-70 35M445 553l-70 35M469 565l-70 35M493 577l-70 35M517 589l-70 35M541 601l-70 35" stroke="#35506a" stroke-width="3"/>
<path d="M328 589l78 39-40 20-78-39z" fill="#2c455c" stroke="#58758b"/>
<path d="M304 616l120 60" stroke="#9bc4dc" stroke-opacity=".4"/>
</g>
<g><path d="M780 608l58-29q8-4 15 0l92 46q8 4 0 9l-58 29q-8 4-15 0l-92-46q-8-4 0-9z" fill="#344b62" stroke="#6a8299"/>
<path d="M787 608l52-26 102 51-53 26z" fill="#091827"/>
<path d="M802 607l29-14 64 32-29 14z" fill="#163952"/>
<path d="M814 609l15-7 35 17-15 8z" fill="#3b9fc2"/><path d="M850 587l24 12" stroke="#738aa0" stroke-width="3"/>
<path d="M874 645l12-6" stroke="#517a96" stroke-width="3"/>
</g>
<g><path d="M468 234l59-30 85 42-59 30z" fill="#355067" stroke="#61809a"/><path d="M468 234v48l85 43v-49z" fill="#172c42" stroke="#3d5b72"/><path d="M553 276l59-30v48l-59 31z" fill="#0e2033" stroke="#3d5b72"/>
<path d="M488 249l42 21" stroke="#90afc5" stroke-width="5"/><ellipse cx="583" cy="280" rx="15" ry="18" fill="#06101f" stroke="#52768f" transform="rotate(25 583 280)"/><ellipse cx="583" cy="280" rx="7" ry="9" fill="#237296" transform="rotate(25 583 280)"/>
<path d="M511 304v35l34 17" fill="none" stroke="#3d5872" stroke-width="10"/><path d="M527 354l24-12 28 14-24 12z" fill="#3b5670"/>
</g>
<g><path d="M629 624l55-27 55 27-55 28z" fill="#2b4660" stroke="#55738b"/><path d="M629 624v23l55 28v-23z" fill="#142b40"/><path d="M684 652l55-28v23l-55 28z" fill="#0b1b2c"/><path d="M641 627l31 16" stroke="#2eafbd" stroke-width="3"/><path d="M644 614v-46M721 615v-46" stroke="#57758e" stroke-width="5" stroke-linecap="round"/>
<path d="M659 551q25-18 51 0M667 561q17-13 35 0M676 570q8-6 17 0" stroke="#49b9dd" stroke-width="2" fill="none" opacity=".8"/>
</g>
<g fill="#67c5e7"><circle cx="301" cy="619" r="4"/><circle cx="502" cy="721" r="4"/><circle cx="945" cy="562" r="4"/><circle cx="501" cy="274" r="4"/></g>'''
hero=f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1000" viewBox="0 110 1200 850">{defs}<rect y="110" width="1200" height="850" fill="url(#grid)"/><ellipse cx="610" cy="500" rx="530" ry="430" fill="url(#aura)"/>{scene}</svg>'
write('public/images/hero/hero-main.svg',hero)
write('public/images/company/about-office.svg',f'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 100 1200 900">{defs}<rect y="100" width="1200" height="900" fill="#0e1d2e"/><rect y="100" width="1200" height="900" fill="url(#grid)"/><path d="M65 520V280l250-125 810 406v260" stroke="#375873" fill="none"/><path d="M65 280l810 407 250-126M875 687v230" stroke="#375873" fill="none"/><path d="M130 480V325l170-85v156zM915 715l135-67v140l-135 67z" fill="#16334a" stroke="#315572"/>{scene}</svg>')
slugs=['software-solutions','database-management','social-media-management','computers-electronics','cctv-security','networking','wireless-internet','technical-support']
for slug in slugs:
    write(f'public/images/services/{slug}.svg',hero)

message='''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"><defs><linearGradient id="p" x2="1" y2="1"><stop stop-color="#57bdfa"/><stop offset="1" stop-color="#7a6de5"/></linearGradient><linearGradient id="s" x2="1" y2="1"><stop stop-color="#253d5b"/><stop offset="1" stop-color="#13243b"/></linearGradient></defs><g fill="none" stroke="#647dac" stroke-opacity=".2"><circle cx="610" cy="450" r="290"/><circle cx="610" cy="450" r="220"/><circle cx="610" cy="450" r="150"/><path d="M150 450h880M610 140v620" stroke-dasharray="4 8"/></g><path d="M410 440L225 260M780 400l200-140M790 540l170 170M425 540L230 700" stroke="#708ed0" stroke-width="2" stroke-dasharray="5 8" opacity=".5"/><g transform="translate(395 235) rotate(-7 210 205)"><rect x="10" y="20" width="420" height="390" rx="38" fill="#081528" opacity=".5"/><rect width="420" height="390" rx="35" fill="url(#s)" stroke="#617a9b" stroke-opacity=".7"/><rect x="30" y="30" width="360" height="230" rx="22" fill="url(#p)"/><path d="M140 94h140q18 0 18 18v71q0 18-18 18h-76l-40 33v-33h-24q-18 0-18-18v-71q0-18 18-18z" fill="none" stroke="white" stroke-width="7"/><circle cx="167" cy="149" r="7" fill="white"/><circle cx="210" cy="149" r="7" fill="white"/><circle cx="253" cy="149" r="7" fill="white"/><text x="32" y="308" font-family="Arial,sans-serif" font-size="27" font-weight="600" fill="#edf3ff">Gramvista SMS</text><text x="32" y="342" font-family="Arial,sans-serif" font-size="14" letter-spacing="2" fill="#9eb4d1">BUSINESS MESSAGING</text></g><g fill="#192d46" stroke="#516e91"><rect x="140" y="190" width="170" height="110" rx="16"/><rect x="900" y="185" width="170" height="110" rx="16"/><rect x="865" y="650" width="170" height="110" rx="16"/><rect x="135" y="635" width="170" height="110" rx="16"/></g><g fill="none" stroke="#8dcdf2" stroke-width="4" stroke-linecap="round"><path d="M200 235h50m-50 17h32M949 219h68v42h-68zM949 219l34 23 34-23M912 709l17 17 36-41"/><circle cx="218" cy="671" r="13"/><path d="M194 714q0-26 24-26t24 26"/></g><g fill="#9eacdc"><circle cx="815" cy="197" r="5"/><circle cx="338" cy="590" r="5"/><circle cx="787" cy="713" r="4"/></g></svg>'''
write('public/images/products/gramvista-sms.svg',message)
write('public/images/products/product-placeholder.svg',message)
for category in ['software','network','cctv','digital']:
    write(f'public/images/portfolio/portfolio-{category}.svg',hero)
write('public/images/backgrounds/grid.svg','<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity=".06"/></svg>')
write('public/site.webmanifest',json.dumps({'name':'Gramvista Empire Group Limited','short_name':'Gramvista','start_url':'/','display':'standalone','background_color':'#07111f','theme_color':'#07111f','icons':[{'src':'/favicon.svg','sizes':'any','type':'image/svg+xml','purpose':'any'}]}))
write('public/robots.txt','User-agent: *\nAllow: /\nSitemap: https://gramvistaempiregroup.com/sitemap.xml\n')
routes=['','company','services','products','projects','contact','quote','privacy','terms']+['services/'+s for s in slugs]
write('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join(f'<url><loc>https://gramvistaempiregroup.com/{r}</loc></url>' for r in routes)+'</urlset>')
write('public/_redirects','/* /index.html 200\n')
write('public/documents/README.txt','Add an approved company profile or brochures here. Do not publish unverified registration documents or claims.\n')

package=json.loads((root/'package.json').read_text())
package.update({'name':'gramvista-corporate','private':True,'type':'module','description':'Gramvista Empire Group Limited corporate website','license':'UNLICENSED','scripts':{'dev':'vite --host 0.0.0.0','build':'tsc --noEmit && vite build','preview':'vite preview --host 0.0.0.0','lint':'eslint .','typecheck':'tsc --noEmit','test':'playwright test'}})
package.pop('main',None)
write('package.json',json.dumps(package,indent=2)+'\n')
