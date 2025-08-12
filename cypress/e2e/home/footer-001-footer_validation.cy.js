describe('Footer Comprehensive Validation', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('footer').should('be.visible');
    });

    it('Footer logo is visible with correct src and alt attributes', () => {
        cy.get('footer .footer-img img')
            .should('be.visible')
            .and('have.attr', 'src', 'https://www.pedogist.com/assets/img/logo/logo-black.png')
            .and('have.attr', 'alt', 'footer-logo');
    });

    it('Iyzico image is visible', () => {
        cy.get('footer .iyzico img')
            .should('be.visible')
            .and(($img) => {
                expect($img.attr('src')).to.match(/^https?:\/\//);
            });
    });

    it('ETBIS verification image and link exist', () => {
        cy.get('#ETBIS a')
            .should('have.attr', 'href')
            .and('include', 'etbis.eticaret.gov.tr');
        cy.get('#ETBIS img')
            .should('be.visible')
            .and(($img) => {
                expect($img.attr('src')).to.match(/^data:image\/jpeg/);
            });
    });

    const socialLinks = [
        { social: 'Facebook', index: 0, href: 'https://facebook.com/', iconClass: 'fa-facebook-f' },
        { social: 'X', index: 1, href: 'https://x.com/pedogist', iconClass: 'fa-twitter' },
        { social: 'Instagram', index: 2, href: 'https://instagram.com/pedogist/', iconClass: 'fa-instagram' },
        { social: 'Linkedin', index: 3, href: 'https://linkedin.com/', iconClass: 'fa-linkedin-in' },
    ];

    socialLinks.forEach(({ social, index, href, iconClass }) => {
        it(`Social media icon ${social} has correct link and is visible`, () => {
            cy.get('footer .footer-icon a').eq(index)
                .should('have.attr', 'href', href)
                .and('have.attr', 'target', '_blank')
                .and('have.attr', 'rel').and('contain', 'nofollow');

            cy.get('footer .footer-icon a').eq(index).find('i')
                .should('have.class', iconClass);
        });
    });

    const menus = [
        {
            title: 'Bilgilendirme',
            selector: '.f-w4',
            expectedLinks: [
                { text: 'Mesafeli satış sözleşmesi', href: 'https://www.pedogist.com/bilgilendirme/mesafeli-satis-sozlesmesi' },
                { text: 'Gizlilik ve Güvenlik', href: 'https://www.pedogist.com/bilgilendirme/gizlilik-ve-guvenlik' },
                { text: 'İptal İade koşulları', href: 'https://www.pedogist.com/bilgilendirme/iptal-iade-kosullari' },
                { text: 'Kişisel Veriler Politikası', href: 'https://www.pedogist.com/bilgilendirme/kisisel-veriler-politikasi' },
                { text: 'Kaynaklar', href: 'https://www.pedogist.com/bilgilendirme/kaynaklar' },
            ],
        },
        {
            title: 'Hızlı Menü',
            selector: '.f-w2',
            expectedLinks: [
                { text: 'Nasıl Çalışır?', href: 'https://www.pedogist.com/nasil-calisir' },
                { text: 'Envanterler', href: 'https://www.pedogist.com/kisilik-envanteri' },
                { text: 'Danışman Ol', href: 'https://www.pedogist.com/uzmanimiz-ol' },
            ],
        },
        {
            title: 'Diğer',
            selector: '.f-w3',
            expectedLinks: [
                { text: 'Hakkımızda', href: 'https://www.pedogist.com/hakkimizda' },
                { text: 'Blog', href: 'https://www.pedogist.com/blog' },
                { text: 'Bize Ulaşın', href: 'https://www.pedogist.com/iletisim' },
            ],
        },
    ];

    menus.forEach(({ title, selector, expectedLinks }) => {
        describe(`${title} menu`, () => {
            it('Menu title is visible', () => {
                cy.get(`footer ${selector} h3`).should('be.visible').and('have.text', title);
            });

            it('All links have correct href and visible text', () => {
                cy.get(`footer ${selector} ul li a`).should('have.length', expectedLinks.length);

                expectedLinks.forEach(({ text, href }, i) => {
                    cy.get(`footer ${selector} ul li a`).eq(i).should('have.text', text).and('have.attr', 'href', href);
                });
            });
        });
    });

    it('Warning text is present and visible', () => {
        cy.get('footer center')
            .should('be.visible')
            .and('contain.text', 'Eğer kriz anında olduğunuzu ya da başka bir kişinin tehlikede olduğunu düşünüyorsanız');
    });
});
