import arrow from "../img/arrow.svg";
import position from "../img/position.svg";
import rectangle from "../img/rectangle.svg";
import shape from "../img/shape.svg";
import star from "../img/star.svg";

interface svgObject {
    arrow: string,
    position: string,
    rectangle: string,
    shape: string,
    star: string,
}

const svgPath: svgObject = {
    arrow,
    position,
    rectangle,
    shape,
    star
};

export default svgPath;