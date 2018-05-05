const remote = require("electron").remote;
const ejs = remote.require("ejs");
import {ILayersItem, ISketch} from "../../types";
import {ComponentType} from "./componentType";

export type LayerItem = ILayersItem | ISketch;

export interface IComponent {
    type: ComponentType;
    name: string;
    template: string;
    getTemplateVariables(item: LayerItem): any;
    render(item: LayerItem): string;
    isComponent(layerName: string): boolean;
}

export abstract class Component implements IComponent {
    public abstract type: ComponentType;
    public abstract name: string;
    public abstract template: string;
    public abstract getTemplateVariables(item: LayerItem): Map<string, string>;

    public render(item: LayerItem): string {
        const variables = this.getTemplateVariables(item);
        return ejs.render(this.template, variables, {escape: false});
    }

    public isComponent(layerName: string) {
        return layerName.endsWith(this.name);
    }
}
