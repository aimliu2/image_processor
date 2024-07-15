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
    console.log( "V3.4" );

    let i = document.querySelectorAll("div[data-include]")
    i.forEach(async(div) => { // this el = div
        // find modules
        let dn = div.dataset.include;
        let mp = `modules/${dn}.html`; // i.e. modules/hero.html

        // load modules
        let r = await fetch(mp);
        let m_txt = await r.text();
        console.log(`${dn} module loaded`);

        // execute module
        // must use el.appendchild to prevent css/js broken
        let m_db = document.createElement('div'); // create temp div-wrapper
        m_db.innerHTML = m_txt

        // html
        let m_html = m_db.children[0]

        // script
        let m_script = m_db.querySelector('script')
        let ex_script = document.createElement('script');
        ex_script.type = "module"
        ex_script.defer = true;
        ex_script.innerHTML = m_script.innerHTML

        // inject
        div.appendChild(m_html)
        document.body.appendChild(ex_script)
    });        
}