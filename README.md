# Remarkable plugin heading id

## Feature ✨

This is plugin for [remarkable](https://github.com/jonschlinkert/remarkable).
This plugin will allow you to add `id` attribute to heading tags.
(`id` attribute is needed for page-in-navigation-link)

For Example, 

```markdown
## headings2

paragraph

```

above markdown will be parsed into

```html
<h2 id="headings2">headings2</h2>
<p>paragraph</p>
```

## Usage

```cli
yarn add remarkable-plugin-heading-id remarkable -D
```

and 

```typescript
import { Remarkable } from "remarkable";
import { remarkablePluginHeadingId } from "remarkable-plugin-heading-id";

const md = new Remarkable();

md.use(remarkablePluginHeadingId, {
    // this option is for create id, optional option, default value is (level, content, idx) => `${content}`
    createId: (
    level: 1 | 2 | 3 | 4 | 5 | 6,
    content: string,
    idx: number
  ) => `some string`;
  // this option is for identify which headings should be added id, optional option, default value is ["h1", "h2", "h3", "h4", "h5", "h6"]
  targets?: typeof headings[number][];
});

md.render(html);
```

## LICENSE

MIT