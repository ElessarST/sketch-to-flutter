import * as React from "react";
import {generateComponents} from "../generator";

const styles = require("./Home.scss");

export default class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        generateComponents();
    }

  public render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
            home
        </div>
      </div>
    );
  }
}
