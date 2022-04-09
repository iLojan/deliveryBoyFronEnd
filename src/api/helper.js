import { ASSISTANCE_TYPE } from "./validator";

const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

const baggageCapacity = (cabin) => {
    if (cabin === "ECO") {
        return 23;
    } else {
        return 32;
    }
}

const groupAssistance = (services) => {
    let grouped = new Map();
    services.forEach(service => {
        let type = service.content;
        if (type != ASSISTANCE_TYPE.DEAF && type != ASSISTANCE_TYPE.BLIND) {
            type = ASSISTANCE_TYPE.WHEELCHAIR;
        }
        if (grouped.has(type)) {
            grouped.get(type).push(service);
        } else {
            grouped.set(type, [service]);
        }
    })
    if (grouped.has(ASSISTANCE_TYPE.WHEELCHAIR)) {
        let categorizedWCOptions = groupBy(grouped.get(ASSISTANCE_TYPE.WHEELCHAIR), service => service.content);
        grouped.set(ASSISTANCE_TYPE.WHEELCHAIR, categorizedWCOptions);
    }
    return grouped;
}


export { groupBy, intersection, baggageCapacity, groupAssistance };