import {ILayersItem} from "../../../types";
import {parseText} from "../../utils";
import {Component, IComponent, LayerItem} from "../component";
import {findLayer, findLayers} from "../componentHolder";
import {ComponentType} from "../componentType";
import template from "./template";

class AppBarComponent extends Component implements IComponent {
    public type = ComponentType.AppBar;
    public name = "AppBarComponent";
    public template = template;
    public getTemplateVariables(layer: LayerItem): any {
        const layers = layer.layers;
        const title = this.getTitle(layers);
        const leading = this.getLeading(layers);
        const actions = this.getActions(layers);
        return {
            title,
            leading,
            actions,
        };
    }

    private getTitle(layers: ILayersItem[]) {
        const titleLayer = findLayer(layers, "AppBarTitle");
        return parseText(titleLayer);
    }

    private getLeading(layers: ILayersItem[]) {
        const leadingLayer = findLayer(layers, "AppBarLeadingAction");
        if (!leadingLayer) { return null; }
        return this.getIcon(leadingLayer, "AppBarLeadingAction");
    }

    private getActions(layers: ILayersItem[]) {
        const iconLayers = findLayers(layers, "AppBarAction");
        return iconLayers
            .map((l) => this.getIcon(l, "AppBarAction"));
    }

    private getIcon(layer: ILayersItem, name: string) {
        return {
            name: layer.name.replace(name, "").toLowerCase(),
        };
    }
}

export default new AppBarComponent();
