// core function on homepage

export function ready(fn) {
    if (document.readyState !== 'loading') {
        console.log( "Doc ready" );
        fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

export function main() {
    console.log( "V3.6" );

    let i = document.querySelectorAll("div[data-include]")
    i.forEach(async(div) => { // this el = div
        // find modules
        let dn = div.dataset.include;
        let mp = `modules/${dn}.html`; // i.e. modules/hero.html

        // load modules as text
        let r = await fetch(mp);
        let m_txt = await r.text(); // string txt
        console.log(`${dn} module loaded`);

        // execute module
        // create div wrapper, then
        // inject element later
        let m_wrap = document.createElement('div'); // make it DOM node -> can querySelector()
        m_wrap.innerHTML = m_txt;  // console.log(m_txt)
        
        // part1 : HTML DOM node
        let m_html = m_wrap.querySelector('template');
        let ex_html = document.createElement('div');
        ex_html.innerHTML = m_html == null ? "HTML is null" : m_html.innerHTML

        // part2 : JS script
        let m_script = m_wrap.querySelector('script'); //console.log(m_script)
        let ex_script = document.createElement('script');
        ex_script.type = "module"
        ex_script.defer = true; // always execute after all el loaded
        ex_script.innerHTML = m_script == null ? "<script></script>" : ex_script.innerHTML = m_script.innerHTML
        
        // part3 : CSS innerHTML style
        let m_style = m_wrap.querySelector('style'); //console.log(m_css)
        let ex_style = document.createElement( "style" );
        ex_style.innerHTML = m_style == null ? "<style></style>" : ex_style.innerHTML = m_style.innerHTML

        // part 4 external CSS
        // let ex_style = document.createElement( "link" );
        // ex_style.type = "text/css";
        // ex_style.rel = "stylesheet";

        // Injection : Append Child
        div.appendChild(ex_html);
        document.body.appendChild(ex_script);
        document.body.appendChild(ex_style);
    });        
}