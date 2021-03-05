import Remarkable from "remarkable/lib";

interface PluginOptions {
    id?: (level: 1 | 2 | 3 | 4 | 5 | 6, content: string, idx: number) => string
}

export const remarkablePluginHeadingId = (md: Remarkable, options: PluginOptions) => {

}