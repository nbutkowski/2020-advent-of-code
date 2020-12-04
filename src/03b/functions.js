const TREE = '#';

function solver(map, xSlope, ySlope) {
    let treeCount = 0;
    let x = 0;
    let y = 0;
    const height = getHeight(map);
    for(let i=0; i<height; i++) {
        const spot = getTerrain(x, y, map);
        if(spot == TREE) {
            treeCount++;
        }
        x = x+xSlope;
        y = y+ySlope;
    }

    return treeCount;
}

function getTerrain(x, y, map) {
    const horizontal = x % getWidth(map);
    const vertical =  y * (getWidth(map)+1);
    return map.charAt(horizontal + vertical);
}

function getHeight(map) {
    return map.match(/\n/g).length;
}

function getWidth(map) {
    return map.indexOf('\n');
}

export { solver, getTerrain, getHeight, getWidth};