import { IGenaLink } from "../../generator/generate";

export interface ILink {
    from: number,
    to: number
}

export function IGenaLinkAsILink(link:IGenaLink):ILink{
    return {
        from: link.from.valueOf(),
        to  : link.to.valueOf()
    }
}