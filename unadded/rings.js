function rings_rec(context, x, y, size, level) {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;

    context.beginPath();
    context.arc(x + size/2, y+size/2, size/3, 0, 2*Math.PI, false);
    context.stroke();

    if (size < 50) {
        return [];
    }

    return [
        {x: x, y: y, size: size / 2, level: level + 1, func: rings_rec},
        {x: x, y: y + size/2, size: size / 2, level: level + 1, func: rings_rec},
        {x: x + size/2, y: y, size: size / 2, level: level + 1, func: rings_rec},
        {x: x + size/2, y: y + size/2, size: size / 2, level: level + 1, func: rings_rec},
    ];
}

function rings_base(context, size) {
    return [{x: 0, y: 0, size: size, level: 0, func: rings_rec}];
}
