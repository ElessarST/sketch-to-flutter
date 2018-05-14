import {ILayersItem} from "../../types";
import AppBarComponent from "./appBar";
import {IComponent} from "./component";
import {ComponentType} from "./componentType";

const components: Map<ComponentType, IComponent> = new Map();

components.set(ComponentType.AppBar, AppBarComponent);

export function findLayer(layers: ILayersItem[], name: string): ILayersItem {
    const foundedLayers = layers.filter((l) => l.name.endsWith(name));
    return foundedLayers.length > 0 ? foundedLayers[0] : null;
}

export function findLayers(layers: ILayersItem[], name: string): ILayersItem[] {
    const foundedLayers = layers.filter((l) => l.name.endsWith(name));
    return foundedLayers.length > 0 ? foundedLayers : [];
}

export function getComponent(layers: ILayersItem[], type: ComponentType): string {
    const component = components.get(type);
    const foundLayers = layers.filter((l) => component.isComponent(l.name));
    return foundLayers.length > 0 ? component.render(foundLayers[0]) : null;
}
