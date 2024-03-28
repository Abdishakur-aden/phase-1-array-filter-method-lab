// Code your solution here
function findMatching(drivers, name) {
    const matching = drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
    return matching;
}

function fuzzyMatch (drivers, name) {
    const matching = drivers.filter(drivers => drivers.startsWith(name));
    return matching;
}

function matchName(drivers, name) {
    const matching = drivers.filter (drivers => drivers.name === name);
    return matching;
}