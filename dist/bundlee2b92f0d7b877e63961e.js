(()=>{"use strict";var n={434:(n,e,t)=>{t.d(e,{Z:()=>A});var o=t(537),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus {\n\toutline: none;\n  }\n\n  button {\n\toutline: none;\n  }","",{version:3,sources:["webpack://./src/styles/reset.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;CACC,aAAa;EACZ;;EAEA;CACD,aAAa;EACZ",sourcesContent:["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput:focus {\n\toutline: none;\n  }\n\n  button {\n\toutline: none;\n  }"],sourceRoot:""}]);const A=i},890:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(537),r=t.n(o),a=t(645),i=t.n(a),A=t(667),c=t.n(A),l=new URL(t(415),t.b),s=new URL(t(878),t.b),d=i()(r()),f=c()(l),m=c()(s);d.push([n.id,`@font-face {\n    font-family: playfair;\n    src: url(${f});\n    \n}\n\n@font-face {\n    font-family: monterast;\n    src: url(${m});\n    \n}\n\n:root{\n    --font1:playfair;\n   \n        --font2:monterast;\n    --color-meteorite-dark: #2f1c6a;\n  --color-meteorite: #8c85ff;\n  --color-meteorite-light: #d5dfff;\n  --color-primary-dark: #5025d1;\n  --color-primary: #673de6;\n  --color-primary-light: #ebe4ff;\n  --color-danger-dark: #d63163;\n  --color-danger: #fc5185;\n  --color-danger-light: #ffe8ef;\n  --color-warning-dark: #fea419;\n  --color-warning: #ffcd35;\n  --color-warning-light: #fff8e2;\n  --color-success-dark: #008361;\n  --color-success: #00b090;\n  --color-success-light: #def4f0;\n  --color-dark: #1d1e20;\n  --color-gray-dark: #36344d;\n  --color-gray: #727586;\n  --color-gray-border: #dadce0;\n  --color-gray-light: #f2f3f6;\n  --color-light: #fff;\n  --color-azure: #357df9;\n  --color-azure-light: #e3ebf9;\n  --color-azure-dark: #265ab2;\n    color: var(--black);\n}\n\n\nbody{\n\nbackground-color: rgb(255, 255, 255);;\n\ndisplay: grid;\n\nheight: 250vh;\ngap: 5%;\n\ngrid-template-rows: 10% 75% 15%;\nposition: relative;\n\n\n}\n\n.list{\n    display: flex;\n    color: var(--black) ;\n    list-style-type: none;\n    gap: 20px;\n\n    font-size: 1rem;\n    font-family: var(--font2);\n    padding: 10px;\n    justify-self: center;\n    justify-content: center;\n    \n    font-weight: 600;\n}\n\n.list li{\n    cursor: pointer;\n    \n    \n}  \n\n.list li:hover {\n    \n    text-decoration:underline ;\n    text-underline-offset: 10px;\n    \n}\n#container{\n\n   display: flex;\n   flex-direction: column;\n   gap: 50px;\n   justify-content: ;\n   align-items: center;\n   \n    grid-row: 2/3;\n\n}\n\n\n.container-logo{\n    color: var(--color-dark);\n    font-size: 5rem;\n    font-family: var(--font1) ;\n    letter-spacing: 20px;\n   font-weight: 500;\n}\n\n.container-text{\n    font-size: 1.2rem;\n    color: var(--color-gray-dark);\n    text-align: center;\n    width: 40%;\n    line-height:30px;\n   \n  \n    font-family: var(--font2);\n}\n\n.container-btn , .submit{\n    background-color: var(--color-dark);\n    color: var(--color-light);\n    border: 1px solid var(--color-dark);\n    font-size: 1rem;\n    font-family: var(--font2);\n    padding: 20px 40px;\n    border-radius: 5px ;\n    cursor: pointer;\n    \n}\n.container-btn:hover ,.submit:hover{\n    background-color: var(--color-gray);\n    border-color: var(--color-gray);\n}\n\n#logo{\n    cursor: pointer;\n}\n#logo , .footer-logo{ \n    font-size: 2rem;\n    color: var(--color-dark);\n    font-family: var(--font2);\n   font-weight: 500;\n\n\n}\n\n#home-container{\n    display: flex;\n    flex-direction: column;\n    gap: 7%;\n    grid-row: 2/3;\n    \n    \n}\n\n.container-img{\n    height: 50%;\n    width:90%;\n    max-width: 70rem;\n    align-self: center;\n    \n    padding: 50px;\n    \n   \n    \n\n    \n   \n   \n}\n\n \nheader{\n \n    display: flex;\n    justify-content: space-between;\n    padding: 15px 50px;\n    width: 70%;\n    align-items: center;\n    justify-self: center;\n    color: var(--color-gray-dark);\n    position:fixed;\n    height: 10%;\n    grid-row: 1/2;\n    z-index: ;\n\n    background-color: var(--color-light);\n  \n   \n    \n    \n}\n\n\nfooter {\n    grid-row: 3/4;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    \n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); \n    font-family: var(--font2);\n    color: var(--color-gray-dark);\n    font-size: 1rem;\n    font-weight: 500;\n}\nfooter div{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.header-border-animated {\n    border-bottom: 2px solid var(--color-dark);\n    transition: border-bottom 0.3s ease-in-out;\n}\n\n\n#about-page{\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n.about-logo{\n    color: var(--color-dark);\n    font-family: var(--font1);\n    font-size: 3rem;\n    display: flex;\n    flex-direction: column;\n   align-items: center;\n   letter-spacing: 5px;\n   font-weight: 500;\n   gap: 55px;\n}\n.about-logo-text{\n    letter-spacing:normal;\n    font-size: 1.2rem;\n    color: var(--color-gray-dark);\n    text-align: center;\n   width: 80%;\n   max-width: 80rem;\n    line-height:50px;\n    font-weight: normal;\n   \n  \n    font-family: var(--font2);\n}\n\n.about-container{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: 1fr;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    \n\n}\n.about-chef{\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    padding: 20px;\n    align-items: ;\n    \n}\n.about-chef-header{\n    color: var(--color-dark);\n    font-size: 2rem;\n    font-family: var(--font2);\n    font-weight: 500;\n  \n}\n\n.about-chef-section , .about-chef-footer{\n    font-size: 1rem;\n    color: var(--color-gray-dark);\n    \n   width: 80%;\n   max-width: 80rem;\n    line-height:40px;\n   \n  \n    font-family: var(--font2);\n\n}\n.about-chef-footer{\n    margin-top: 20px;\n}\n\n.chef{\n    height:40% ;\n    width: 80%;\n    max-width: 600px;\n}\n.chef-image-container{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   height: 100%;\n}\n\n#menu-container{\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: repeat(4,1fr);\n    \n    font-family: var(--font2);\n    justify-items: center;\n    gap: 100px;\n}\n\n\n.menu-category{\n    gap: 50px;\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n   \n  \n \n    \n    \n}\n.menu-category div{\n    \n    width: 100%;\n    \n}\n\n.menu-header{\n    font-size: 3rem;\n    font-family: var(--font2);\n    font-weight: ;\n    margin-bottom: 50px;\n    text-align: center;\n   \n}\n.menu-section-header{\n    font-size: 1.5rem;\n    color: var(--color-dark);\n    font-weight: 500;\n    font-family: var(--font2);\n\n}\n\n.menu-category  .menu-section-elements{\n   \n   \n    color: var(--color-gray-dark);\n   \n   \n}\n.menu-section-elements .food{\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n.menu-section-elements .description{\n    font-size: 1rem;\n    \n}\n\n.item-info{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n .food .price{\n    \n    font-size: 1.2rem;\n    font-weight: 500;\n    width: fit-content;\n    \n}\n\n.food{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    \n}\n\n#contact-container{\n    grid-row: 2/3;\n    font-family: var(--font2);\n    color: var(--color-gray-dark);\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    justify-items: center;\n    \n   \n\n}\n\n.contact-info-section{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n   \n}\n\n.contact-info-section .info-category{\n    color: var(--color-dark);\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.contact-info-section div{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    \n    \n}\n.contact-info-section div .info-details{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.info-details a {\n    color: var(--color-gray-dark);\n}\n.info-details{\n    font-size: 1.1rem;\n}\n.contact-form{\n    grid-row: 2/3;\n    grid-column: 1/3;\n  \n}\n\n.contact-form{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    width: 50%;\n    font-size: 1.1rem;\n}\n.contact-form .form-item{\n    display: flex;\n    flex-direction: column;\n    align-items: ;\n    gap: 10PX;\n    \n    width: 100%;\n}\n.form-header{\n    font-size: 2rem;\n    color: var(--color-dark);\n    font-weight: 500;\n}\n\n.contact-form  .form-item  input , textarea{\n    max-width: 100%;\n    border: 1px solid var(--color-gray-dark);\n    height: 50px;\n    background-color: var(--color-gray-light);\n    border-radius: 10px;\n    padding: 10px 50px;\n    font-size: 1rem;\n    color: var(--color-dark);\n    font-family: var(--font2);\n}\nlabel{\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.map{\n    width: 100%;\n    align-self: ;\n    justify-self: start;\n    grid-column: 2/3;\n    grid-row: 1/2;\n}\n\n.contact-section{\n    grid-row: 1/2;;\n    grid-column: 1/2;\n}`,"",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["@font-face {\n    font-family: playfair;\n    src: url(../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf);\n    \n}\n\n@font-face {\n    font-family: monterast;\n    src: url(../assets/fonts/Montserrat-VariableFont_wght.ttf);\n    \n}\n\n:root{\n    --font1:playfair;\n   \n        --font2:monterast;\n    --color-meteorite-dark: #2f1c6a;\n  --color-meteorite: #8c85ff;\n  --color-meteorite-light: #d5dfff;\n  --color-primary-dark: #5025d1;\n  --color-primary: #673de6;\n  --color-primary-light: #ebe4ff;\n  --color-danger-dark: #d63163;\n  --color-danger: #fc5185;\n  --color-danger-light: #ffe8ef;\n  --color-warning-dark: #fea419;\n  --color-warning: #ffcd35;\n  --color-warning-light: #fff8e2;\n  --color-success-dark: #008361;\n  --color-success: #00b090;\n  --color-success-light: #def4f0;\n  --color-dark: #1d1e20;\n  --color-gray-dark: #36344d;\n  --color-gray: #727586;\n  --color-gray-border: #dadce0;\n  --color-gray-light: #f2f3f6;\n  --color-light: #fff;\n  --color-azure: #357df9;\n  --color-azure-light: #e3ebf9;\n  --color-azure-dark: #265ab2;\n    color: var(--black);\n}\n\n\nbody{\n\nbackground-color: rgb(255, 255, 255);;\n\ndisplay: grid;\n\nheight: 250vh;\ngap: 5%;\n\ngrid-template-rows: 10% 75% 15%;\nposition: relative;\n\n\n}\n\n.list{\n    display: flex;\n    color: var(--black) ;\n    list-style-type: none;\n    gap: 20px;\n\n    font-size: 1rem;\n    font-family: var(--font2);\n    padding: 10px;\n    justify-self: center;\n    justify-content: center;\n    \n    font-weight: 600;\n}\n\n.list li{\n    cursor: pointer;\n    \n    \n}  \n\n.list li:hover {\n    \n    text-decoration:underline ;\n    text-underline-offset: 10px;\n    \n}\n#container{\n\n   display: flex;\n   flex-direction: column;\n   gap: 50px;\n   justify-content: ;\n   align-items: center;\n   \n    grid-row: 2/3;\n\n}\n\n\n.container-logo{\n    color: var(--color-dark);\n    font-size: 5rem;\n    font-family: var(--font1) ;\n    letter-spacing: 20px;\n   font-weight: 500;\n}\n\n.container-text{\n    font-size: 1.2rem;\n    color: var(--color-gray-dark);\n    text-align: center;\n    width: 40%;\n    line-height:30px;\n   \n  \n    font-family: var(--font2);\n}\n\n.container-btn , .submit{\n    background-color: var(--color-dark);\n    color: var(--color-light);\n    border: 1px solid var(--color-dark);\n    font-size: 1rem;\n    font-family: var(--font2);\n    padding: 20px 40px;\n    border-radius: 5px ;\n    cursor: pointer;\n    \n}\n.container-btn:hover ,.submit:hover{\n    background-color: var(--color-gray);\n    border-color: var(--color-gray);\n}\n\n#logo{\n    cursor: pointer;\n}\n#logo , .footer-logo{ \n    font-size: 2rem;\n    color: var(--color-dark);\n    font-family: var(--font2);\n   font-weight: 500;\n\n\n}\n\n#home-container{\n    display: flex;\n    flex-direction: column;\n    gap: 7%;\n    grid-row: 2/3;\n    \n    \n}\n\n.container-img{\n    height: 50%;\n    width:90%;\n    max-width: 70rem;\n    align-self: center;\n    \n    padding: 50px;\n    \n   \n    \n\n    \n   \n   \n}\n\n \nheader{\n \n    display: flex;\n    justify-content: space-between;\n    padding: 15px 50px;\n    width: 70%;\n    align-items: center;\n    justify-self: center;\n    color: var(--color-gray-dark);\n    position:fixed;\n    height: 10%;\n    grid-row: 1/2;\n    z-index: ;\n\n    background-color: var(--color-light);\n  \n   \n    \n    \n}\n\n\nfooter {\n    grid-row: 3/4;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    \n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); \n    font-family: var(--font2);\n    color: var(--color-gray-dark);\n    font-size: 1rem;\n    font-weight: 500;\n}\nfooter div{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n.header-border-animated {\n    border-bottom: 2px solid var(--color-dark);\n    transition: border-bottom 0.3s ease-in-out;\n}\n\n\n#about-page{\n    grid-row: 2/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n.about-logo{\n    color: var(--color-dark);\n    font-family: var(--font1);\n    font-size: 3rem;\n    display: flex;\n    flex-direction: column;\n   align-items: center;\n   letter-spacing: 5px;\n   font-weight: 500;\n   gap: 55px;\n}\n.about-logo-text{\n    letter-spacing:normal;\n    font-size: 1.2rem;\n    color: var(--color-gray-dark);\n    text-align: center;\n   width: 80%;\n   max-width: 80rem;\n    line-height:50px;\n    font-weight: normal;\n   \n  \n    font-family: var(--font2);\n}\n\n.about-container{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: 1fr;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    \n\n}\n.about-chef{\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    padding: 20px;\n    align-items: ;\n    \n}\n.about-chef-header{\n    color: var(--color-dark);\n    font-size: 2rem;\n    font-family: var(--font2);\n    font-weight: 500;\n  \n}\n\n.about-chef-section , .about-chef-footer{\n    font-size: 1rem;\n    color: var(--color-gray-dark);\n    \n   width: 80%;\n   max-width: 80rem;\n    line-height:40px;\n   \n  \n    font-family: var(--font2);\n\n}\n.about-chef-footer{\n    margin-top: 20px;\n}\n\n.chef{\n    height:40% ;\n    width: 80%;\n    max-width: 600px;\n}\n.chef-image-container{\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   height: 100%;\n}\n\n#menu-container{\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: repeat(4,1fr);\n    \n    font-family: var(--font2);\n    justify-items: center;\n    gap: 100px;\n}\n\n\n.menu-category{\n    gap: 50px;\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n   \n  \n \n    \n    \n}\n.menu-category div{\n    \n    width: 100%;\n    \n}\n\n.menu-header{\n    font-size: 3rem;\n    font-family: var(--font2);\n    font-weight: ;\n    margin-bottom: 50px;\n    text-align: center;\n   \n}\n.menu-section-header{\n    font-size: 1.5rem;\n    color: var(--color-dark);\n    font-weight: 500;\n    font-family: var(--font2);\n\n}\n\n.menu-category  .menu-section-elements{\n   \n   \n    color: var(--color-gray-dark);\n   \n   \n}\n.menu-section-elements .food{\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n.menu-section-elements .description{\n    font-size: 1rem;\n    \n}\n\n.item-info{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n .food .price{\n    \n    font-size: 1.2rem;\n    font-weight: 500;\n    width: fit-content;\n    \n}\n\n.food{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    \n}\n\n#contact-container{\n    grid-row: 2/3;\n    font-family: var(--font2);\n    color: var(--color-gray-dark);\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(2,1fr);\n    justify-items: center;\n    \n   \n\n}\n\n.contact-info-section{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n   \n}\n\n.contact-info-section .info-category{\n    color: var(--color-dark);\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.contact-info-section div{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    \n    \n}\n.contact-info-section div .info-details{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.info-details a {\n    color: var(--color-gray-dark);\n}\n.info-details{\n    font-size: 1.1rem;\n}\n.contact-form{\n    grid-row: 2/3;\n    grid-column: 1/3;\n  \n}\n\n.contact-form{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n    width: 50%;\n    font-size: 1.1rem;\n}\n.contact-form .form-item{\n    display: flex;\n    flex-direction: column;\n    align-items: ;\n    gap: 10PX;\n    \n    width: 100%;\n}\n.form-header{\n    font-size: 2rem;\n    color: var(--color-dark);\n    font-weight: 500;\n}\n\n.contact-form  .form-item  input , textarea{\n    max-width: 100%;\n    border: 1px solid var(--color-gray-dark);\n    height: 50px;\n    background-color: var(--color-gray-light);\n    border-radius: 10px;\n    padding: 10px 50px;\n    font-size: 1rem;\n    color: var(--color-dark);\n    font-family: var(--font2);\n}\nlabel{\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n.map{\n    width: 100%;\n    align-self: ;\n    justify-self: start;\n    grid-column: 2/3;\n    grid-row: 1/2;\n}\n\n.contact-section{\n    grid-row: 1/2;;\n    grid-column: 1/2;\n}"],sourceRoot:""}]);const g=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],l=o.base?c[0]+o.base:c[0],s=a[l]||0,d="".concat(l," ").concat(s);a[l]=s+1;var f=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var g=r(m,o);o.byIndex=A,e.splice(A,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=t(a[i]);e[A].references--}for(var c=o(n,r),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},878:(n,e,t)=>{n.exports=t.p+"Montserrat-VariableFont_wght.ttf"},415:(n,e,t)=>{n.exports=t.p+"PlayfairDisplay-Italic-VariableFont_wght.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"homeImg.jpg";function e(){var e='\n    <div id="container">\n    <div class="container-logo">Serenade Bistro</div>\n    <div class="container-text">At Serenade Bistro, we embrace the artistry of coffee. Our passion goes beyond the ordinary, where every cup is crafted with precision—melding time, temperature, and technique to create the perfect blend. Our devotion extends to the beans, meticulously roasted to perfection, ensuring each sip is an experience worth savoring.</div>\n    <button class="container-btn">About us</button>\n    </div>\n    <img  class="container-img" src="'.concat(n,'">\n    '),t=document.createElement("div");return t.id="home-container",t.innerHTML=e,t}const o=t.p+"chef.png";function r(){var n='<div class="about-logo"><div>Harmony of Flavors, Elegance in Every Bite</div>\n    <div class="about-logo-text">At Serenade Bistro, we invite you to experience a culinary symphony where the notes of flavor create a harmonious melody. Our journey is a celebration of diverse tastes, bringing together elements from different corners of the culinary world.</div>\n        \n    </div>\n\n    <div class="about-container">\n    \n        <div class="chef-image-container"><img class="chef" src="'.concat(o,'" alt=""></div>\n    <div class="about-chef">\n        <div class="about-chef-header">OUR CULINARY MAESTRO</div>\n        <div class="about-chef-section">Meet our culinary maestro, Chef Alessandra Rossi. A seasoned artisan with roots deeply embedded in the rich culinary heritage of Italy, Chef Rossi brings a wealth of experience and a palate attuned to the finest nuances of flavor.\n\n            Chef Rossi\'s culinary journey began in the charming kitchens of Tuscany, where she mastered the art of handmade pasta and perfected the balance of rustic simplicity and modern sophistication. Her gastronomic pilgrimage led her through the diverse regions of Italy, each dish a love letter to the local ingredients and time-honored techniques.</div>\n        <div class="about-chef-footer">Now at the helm of Serenade Bistro, Chef Rossi curates a menu that dances between classic Italian fare and contemporary culinary innovations. Each dish is a serenade, a harmonious expression of flavors, textures, and colors.</div>\n\n    </div>\n    \n </div>'),e=document.createElement("div");return e.id="about-page",e.innerHTML=n,e}var a=t(379),i=t.n(a),A=t(795),c=t.n(A),l=t(569),s=t.n(l),d=t(565),f=t.n(d),m=t(216),g=t.n(m),B=t(589),p=t.n(B),u=t(434),C={};C.styleTagTransform=p(),C.setAttributes=f(),C.insert=s().bind(null,"head"),C.domAPI=c(),C.insertStyleElement=g(),i()(u.Z,C),u.Z&&u.Z.locals&&u.Z.locals;var h=t(890),v={};v.styleTagTransform=p(),v.setAttributes=f(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=g(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("header");window.addEventListener("scroll",(function(){window.scrollY>0?n.classList.add("header-border-animated"):n.classList.remove("header-border-animated")}))}));var y=document.querySelector("#logo"),I=document.querySelector("#about"),b=document.querySelector(".page-container"),x=document.querySelector("#menu"),w=document.querySelector(".container-btn"),E=document.querySelector(".container-img"),k=document.querySelector("#contact");function z(n){b.id!=n.id&&(b.id=n.id,b.innerHTML=n.innerHTML,console.log("finished"))}E&&(E.src=n),y.addEventListener("click",(function(){z(e());var n=document.querySelector(".container-btn");null!=n&&n.addEventListener("click",(function(){z(r())}))})),I.addEventListener("click",(function(){z(r())})),x.addEventListener("click",(function(){z(e())})),w.addEventListener("click",(function(){z(r())})),k.addEventListener("click",(function(){var n,e;z((n='\n\n    <div class="contact-section">\n        <div class="contact-info-section">\n            <div>\n                <div class="info-category">Address</div>\n                <div class="info-details">\n                    <div>432 Serenade Boulevard, Harmony City, Melodyland</div>\n                   \n                    <div>PO Box: 56789, Symphony Town, Musicaland</div>\n                </div>\n            </div>\n    \n            <div>\n                <div class="info-category">Opening Hours</div>\n                <div class="info-details">\n                    <div class="day">Mon - Thu</div>\n                    <div class="time">9am-8pm</div>\n                    <div class="day">Fri - Sun</div>\n                    <div class="time">9am-10pm</div>\n                </div>\n            </div>\n    \n            <div>\n                <div class="info-category">Contact Numbers</div>\n                <div class="info-details">\n                    <div class="contact-type">Tel</div>\n                    <div class="contact-value">+123 456 7890</div>\n                    <div class="contact-type">Fax</div>\n                    <div class="contact-value">+123 456 7891</div>\n                </div>\n            </div>\n    \n            <div>\n                <div class="info-category">Email</div>\n                <div class="info-details">\n                    info@serenaderestaurant.com\n                </div>\n            </div>\n    \n            <div>\n                <div class="info-category">Website</div>\n                <div class="info-details">\n                    <a href="" target="_blank">www.serenaderestaurant.com</a>\n                </div>\n            </div>\n    \n            <div>\n                <div class="info-category">Additional Opening Hours</div>\n                <div class="info-details">\n                    <div class="day">Mon - Thu</div>\n                    <div class="time">11am-9pm</div>\n                    <div class="day">Fri - Sun</div>\n                    <div class="time">11am-12pm</div>\n                </div>\n            </div>\n        </div>\n    </div>\n        <div class="map">\n            <div style="width: 100%; height: 100%;" ><iframe width="80%" height="80%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="'.concat("https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=serenade%20bistro+(serenade%20bisto)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",'"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe></div>\n        </div>\n        <form class="contact-form">\n            <div class="form-header">BOOKINKS</div>\n            <div class="form-item">\n                <label for="name">Name*</label>\n                <input type="text" id="name" name="name" required>\n                <div class="validation-message" id="name-error"></div>\n            </div>\n        <div class="form-item">\n            \n                <label for="last-name">Last name</label>\n                <input type="text" id="last-name" name="last-name">\n        </div>\n            \n            <div class="form-item">\n                <label for="email">Your email*</label>\n                <input type="email" id="email" name="email" required>\n                <div class="validation-message" id="email-error"></div>\n            </div>\n        \n            <div class="form-item">\n                <label for="message">Message*</label>\n                <textarea id="message" name="message" rows="4" required></textarea>\n                <div class="validation-message" id="message-error"></div>\n            </div>\n        \n            <button class="submit" type="submit">Submit</button>\n        </form>\n        \n'),(e=document.createElement("div")).id="contact-container",e.innerHTML=n,e))}))})()})();
//# sourceMappingURL=bundlee2b92f0d7b877e63961e.js.map