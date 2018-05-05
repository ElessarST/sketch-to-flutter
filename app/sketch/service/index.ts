import {ISketch} from "../../types";

const remote = require("electron").remote;
const electronFs = remote.require("fs");
const DEFAULT_PATH = "/Users/aydar/Documents/apps/study/sketch-to-flutter/sketch/small.sketch";
const sketch2json = remote.require("sketch2json");

export function readSketchFile(path: string = DEFAULT_PATH): Promise<ISketch[]> {
    return new Promise((resolve, reject) => {
        electronFs.readFile(path, (err: NodeJS.ErrnoException, data: Buffer) => {
            if (err) {
                reject(err);
            }
            sketch2json(data)
                .then((result: any) => {
                    const pages = Object.keys(result.pages).map((key: string) => result.pages[key]);
                    resolve(pages);
                });
        });
    });
}
