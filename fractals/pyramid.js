function pyramid_rec(context, x, y, size, level) {

    var height_factor = 0.1;
    context.strokeStyle = "#000000";
    if (level % 2 == 0) {
        context.fillStyle = "#BBB";
    } else {
        context.fillStyle = "#FFF";
    }
    context.beginPath();
    context.moveTo(x + 0, y + size/2);
    context.lineTo(x + size/2, y + height_factor * size);
    // context.lineTo(x + size/2, y);
    context.lineTo(x + size, y + size/2);
    context.lineTo(x + size/2, y + size - height_factor * size);
    context.closePath();
    context.fill();
    // context.stroke();

    context.fillStyle = "#606060";
    context.beginPath();
    context.moveTo(x + 0, y + size/2);
    context.lineTo(x + size/2, y + size - height_factor * size);
    context.lineTo(x + size/2, y + size);
    context.lineTo(x + 0, y + size/2 + height_factor * size);
    context.closePath();
    context.fill();

    context.fillStyle = "#000000";
    context.beginPath();
    context.moveTo(x + size, y + size/2);
    context.lineTo(x + size, y + size/2 + height_factor * size);
    context.lineTo(x + size/2, y + size);
    context.lineTo(x + size/2, y + size - height_factor * size);
    context.closePath();
    context.fill();

    var new_size = 0.85 * size;

    return [
        {
            x: x + size/2 - new_size/2,
            y: y, size: new_size,
            level: level + 1,
            func: pyramid_rec,
        }
    ];
}

function pyramid_base(context, size) {
    context.fillStyle = "#202020";
    context.fillRect(0, 0, size, size);
    return [{x: 0, y: 0, size: size, level: 0, func: pyramid_rec}];
}
