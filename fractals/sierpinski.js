function sierpinski_rec(context, x, y, size, level) {
    context.strokeStyle = "#FFFFFF";

    context.beginPath();
    context.moveTo(x + size/2 + 0.5, y + size + 0.5);
    context.lineTo(x + size/4 + 0.5, y + size/2 + 0.5);
    context.stroke();

    context.beginPath();
    context.moveTo(x + size/2 + 0.5, y + size + 0.5);
    context.lineTo(x + 3*size/4 + 0.5, y + size/2 + 0.5);
    context.stroke();

    context.beginPath();
    context.moveTo(x + size/4 + 0.5, y + size/2 + 0.5);
    context.lineTo(x + 3*size/4 + 0.5, y + size/2 + 0.5);
    context.stroke();

    if (size < 10) {
        return [];
    }
    return [
        {x: x + size / 4, y: y, size: size / 2, level: level + 1, func: sierpinski_rec},
        {x: x, y: y + size / 2, size: size / 2, level: level + 1, func: sierpinski_rec},
        {x: x + size / 2, y: y + size / 2, size: size / 2, level: level + 1, func: sierpinski_rec},
    ];
}

function sierpinski_base(context, size) {
    context.strokeStyle = "#FFFFFF";

    context.beginPath();
    context.moveTo(0 + 0.5, size + 0.5);
    context.lineTo(size / 2 + 0.5, 0.5);
    context.stroke();

    context.beginPath();
    context.moveTo(0 - 0.5, size - 0.5);
    context.lineTo(size - 0.5, size - 0.5);
    context.stroke();

    context.beginPath();
    context.moveTo(size / 2 + 0.5, 0.5);
    context.lineTo(size - 0.5, size - 0.5);
    context.stroke();

    return [{x: 0, y: 0, size: size, level: 0, func: sierpinski_rec}];
}
