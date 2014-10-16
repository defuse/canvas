function square_rec(context, x, y, size, level) {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;

    context.strokeRect(x + size/4 + 0.5, y + size/4 + 0.5, size/2, size/2);

    if (size < 20) {
        return [];
    }

    return [
        {x: x, y: y, size: size / 2, level: level + 1, func: square_rec},
        {x: x, y: y + size/2, size: size / 2, level: level + 1, func: square_rec},
        {x: x + size/2, y: y, size: size / 2, level: level + 1, func: square_rec},
        {x: x + size/2, y: y + size/2, size: size / 2, level: level + 1, func: square_rec},
    ];
}

function square_base(context, size) {
    return [{x: 0, y: 0, size: size, level: 0, func: square_rec}];
}
