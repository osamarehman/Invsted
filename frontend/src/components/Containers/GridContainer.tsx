import { ReactNode } from "react";
import styles from "@/styles/GridContainer.module.css";


interface IGridContainer {
    children?: ReactNode
}

const GridContainer = ({ children }: IGridContainer) => {
    return (
        <div className={styles.gridContainer}>
            { children }
        </div>
    )
}

export default GridContainer;
