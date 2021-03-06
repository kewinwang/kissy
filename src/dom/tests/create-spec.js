/**
 * test cases for create sub module of dom module
 * @author:yiminghe@gmail.com
 */
KISSY.use("dom", function(S, DOM) {
    describe("create", function() {

        it("create should works", function() {
            var div = DOM.create('<div>'),
                html = '',
                tag = '';

            S.each([
                'option', 'optgroup', 'td', 'th', 'tr',
                'tbody', 'thead', 'tfoot',
                'caption', 'col', 'colgroup', 'legend'], function(tag) {
                html = '<' + tag + '></' + tag + '>';

                //div.innerHTML = html;
                div.appendChild(DOM.create(html));

                html = div.innerHTML.toLowerCase();
                expect((html.indexOf('<' + tag + '>') === 0 ||
                    html.indexOf('<' + tag + ' ') === 0)).toBe(true);
                div.innerHTML = '';
            });

            // script
            html = tag = 'script';
            div.appendChild(DOM.create('<script><\/script>'));
            html = S.trim(div.innerHTML.toLowerCase());
            expect((html.indexOf('<' + tag + '>') === 0
                || html.indexOf('<' + tag + ' ') === 0)).toBe(true);
            div.innerHTML = '';

            // null
            expect(DOM.create()).toBe(null);

            // textNode
            expect(DOM.create('text node').nodeType).toBe(3);

            // 稍微复杂点
            expect(DOM.attr(DOM.create('<img id="test-img" />'), 'id')).toBe('test-img');

            // 多个元素 , fragment
            expect(DOM.create('<p></p><div></div>').nodeType).toBe(11);

            expect(DOM.create('<p></p><div></div>').childNodes[0].tagName.toLowerCase()).toBe('p');

            // 属性支持
            expect(DOM.create('<p>', { rel: '-1', 'class': 'test-p', data: 'test'}).className).toBe('test-p');

            expect(DOM.create("<a hideFocus=\'true\'  " +
                "tabIndex=\'0\'  " +
                "class=\'ke-triplebutton ke-triplebutton-off\' />")
                .className).toBe("ke-triplebutton ke-triplebutton-off");
        });

        it("create should works for style with content in ie<8", function() {
            var style,d;
            expect((style = DOM.create("<style>.styleie67 {width:99px;}</style>"))
                .nodeName.toLowerCase()).toBe("style");
            DOM.append(d = DOM.create("<div class='styleie67'></style>"), document.body);
            DOM.append(style, document.getElementsByTagName("head")[0]);
            expect(DOM.css(d, "width")).toBe("99px");
        });


        it("html should works", function() {
            var t = DOM.create("<div></div>");
            document.body.appendChild(t);
            DOM.html(t, '<div>');
            expect(t.firstChild.nodeName.toLowerCase()).toBe("div");

            DOM.html(t, '<p class="test-html">test p</p>');
            expect(DOM.hasClass(t.firstChild, 'test-html')).toBe(true);

            expect(DOM.text(t)).toBe('test p');

            var test_table = DOM.create("<table></table>");

            DOM.html(t, '');

            expect(
                function() {
                    DOM.html(test_table, '2')
                }).not.toThrow();


            // loadScripts
            DOM.html(t, '<script>window.g_sethtml = 1;<\/script>', true);

            waitsFor(function() {
                return window.g_sethtml == 1;
            }, "inline script in dom.html should run", 1000);
            runs(function() {

                // src js
                DOM.html(t, '<script src="test-dom-create.js"><\/script>', true);

                waitsFor(function() {
                    return window.g_testLoadScriptViaInnerHTML;
                }, "external script in dom.html should run", 5000);
            });

        });


        it("remove should works", function() {

            var n;
            document.body.appendChild(n = DOM.create("<div class='test-remove'>"));
            expect(S.query(".test-remove").length).toBe(1);
            DOM.remove(n);
            expect(S.query(".test-remove").length).toBe(0);
        });

    });
});