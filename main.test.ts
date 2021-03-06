import { Remarkable } from "remarkable";
import { remarkablePluginHeadingId } from "./main";



describe("remarkdown-plugin-tweet-share", () => {
    test("parse headings with get id function", () => {
        const md = new Remarkable();
        md.use(remarkablePluginHeadingId, {
            id: (level: 1 | 2 | 3 | 4 | 5 | 6, content: string, idx: number) => `h${level}__${content}__${idx}`
        });
        const src = `## heading2
paragraph

### heading3

paragraph2

#### heading4`
        expect(md.render(src)).toEqual(`<h2 id="h2__heading2__0">heading2</h2>
<p>paragraph</p>
<h3 id="h3__heading3__1">heading3</h3>
<p>paragraph2</p>
<h4 id="h4__heading4__2">heading4</h4>
`);
    });


    test("parse headings id without id options", () => {
        const md = new Remarkable();
        md.use(remarkablePluginHeadingId);
        const src = `## heading2
paragraph

### heading3

paragraph2

#### heading4`
        expect(md.render(src)).toEqual(`<h2 id="heading2">heading2</h2>
<p>paragraph</p>
<h3 id="heading3">heading3</h3>
<p>paragraph2</p>
<h4 id="heading4">heading4</h4>
`);
    });
});
