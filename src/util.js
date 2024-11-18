import botku from "./img/botku.png";
import studentku from "./img/studentku.png"

export const getKUById = (KUId) => {
    const targetKUId = String(KUId);
    switch (KUId) {
        case "1":
            return botku;
        case "2":
            return studentku;
    }
}