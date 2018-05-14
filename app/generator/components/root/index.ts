import {ILayersItem} from "../../../types";
import {Component, IComponent, LayerItem} from "../component";
import {findLayer, getComponent} from "../componentHolder";
import {ComponentType} from "../componentType";
import template from "../root/template";

const COLORS = ["PrimaryColor", "AccentColor"];

class RootComponent extends Component implements IComponent {
    public type = ComponentType.Root;
    public name = "Root";
    public template = template;
    public getTemplateVariables(layer: LayerItem): any {
        const layers: ILayersItem[] = layer.layers;
        const appBar = getComponent(layers, ComponentType.AppBar);
        const themeProps = this.getThemeProps(layers);
        return {
            appBar,
            themeProps,
        };
    }

    private getThemeProps(layers: ILayersItem[]) {
        return COLORS.map((c) => this.getThemeColor(layers, c)).filter((c) => c !== null);
    }

    private getThemeColor(layers: ILayersItem[], name: string) {
        const layer = findLayer(layers, name);
        if (layer !== null) {
            const color = layer.style.fills[0].color;
            console.log(layer.style.fills[0]);
            const propName = name.charAt(0).toLowerCase() + name.slice(1);
            const alpha = color.alpha;
            const red = this.toRGB(color.red);
            const green = this.toRGB(color.green);
            const blue = this.toRGB(color.blue);
            const propValue = `Color.fromARGB(${alpha * 255}, ${red}, ${green}, ${blue})`;
            return {
                name: propName,
                value: propValue,
            };
        }
        return null;
    }

    private toRGB(color: number) {
        return Math.round(color * 255);
    }
}

export default new RootComponent();
