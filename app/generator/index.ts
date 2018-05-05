const remote = require("electron").remote;
const { exec } = remote.require("child_process");
const fs = remote.require("fs");
import {readSketchFile} from "../sketch/service";
import {ISketch} from "../types";
import RootComponent from "./components/root";

export async function generateComponents() {
    const sketch: ISketch[] = await readSketchFile();
    sketch.map((s) => {
        const genCmd = `rm -rf ./generated && mkdir ./generated && cd ./generated && flutter create test_app`;
        exec(genCmd, (error: any, stdout: any, stderr: any) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            fs.writeFile("./generated/test_app/lib/main.dart", RootComponent.render(s), (err: any) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("The file has been saved!");
            });
        });
    });
}
