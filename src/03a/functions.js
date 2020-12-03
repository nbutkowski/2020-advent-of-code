const TREE = '#';

function solver(map) {
    let treeCount = 0;
    let x = 0;
    let y = 0;
    const height = getHeight(map);

    for (let i=0; i<height; i++) {
        const spot = getTerrain(x, y, map);
        console.log(`${x},${y}: ${spot}`);
        if(spot == TREE) {
            treeCount++;
        }
        const newLocation = sled(x, y, getWidth(map));
        x = newLocation.x;
        y = newLocation.y;
    }

    return treeCount;
}

function sled(x, y, max) {
    const newX = (x + 3) % max;
    const newY = y + 1;
    return { x: newX, y: newY};
}

function getTerrain(x, y, map) {
    return map.charAt((getWidth(map)-1)*y+x);
}

function getHeight(map) {
    return map.match(/\n/g).length;
}

function getWidth(map) {
    return map.indexOf('\n');
}

export { solver, sled, getTerrain, getHeight, getWidth};