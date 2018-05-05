const remote = require("electron").remote;
const bplist = remote.require("bplist-parser");
import {ILayersItem} from "../../types";

export function parseText(layer: ILayersItem): string {
    const buffer = Buffer.from(layer.attributedString.archivedAttributedString._archive, "base64");
    return bplist.parseBuffer(buffer)[0].$objects[2];
}
