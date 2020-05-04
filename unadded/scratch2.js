function scratch_rec(context, x, y, size, level) {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;

    var pillar_factor = 0.1;
    var new_x = x + 0.2 * size;
    var new_y = y + 0.2 * size;
    var new_size = 0.6 * size;

    context.beginPath();
    context.moveTo(0.5 + x, 0.5 + y);
    context.lineTo(0.5 + new_x, 0.5 + new_y);
    context.stroke();

    context.beginPath();
    context.moveTo(0.5 + x, 0.5 + y + size);
    context.lineTo(0.5 + new_x, 0.5 + new_y + new_size);
    context.stroke();

    context.beginPath();
    context.moveTo(0.5 + x + size, 0.5 + y + size);
    context.lineTo(0.5 + new_x + new_size, 0.5 + new_y + new_size);
    context.stroke();

    context.beginPath();
    context.moveTo(0.5 + x + size, 0.5 + y);
    context.lineTo(0.5 + new_x + new_size, 0.5 + new_y);
    context.stroke();

      // add linear gradient
    var grd = context.createLinearGradient(x, 0, x + size*pillar_factor, 0);
    grd.addColorStop(0, '#000000');
    grd.addColorStop(0.5, '#FFFFFF');
    grd.addColorStop(1, '#000000');
    context.fillStyle = grd;
    context.fillRect(x, y, pillar_factor * size, size);
    grd = context.createLinearGradient(x + size - size*pillar_factor, 0, x+size, 0);
    grd.addColorStop(0, '#000000');
    grd.addColorStop(0.5, '#FFFFFF');
    grd.addColorStop(1, '#000000');
    context.fillStyle = grd;
    context.fillRect(x + size - pillar_factor * size, y, pillar_factor * size, size);

    if (size < 5) {
        return [];
    }

    return [
        {x: new_x, y: new_y, size: new_size, level: level + 1, func: scratch_rec},
    ];
}

function scratch_base(context, size) {
    return [{x: 0, y: 0, size: size, level: 0, func: scratch_rec}];
}
