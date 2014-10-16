function circle_rec(context, x, y, size, level) {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;

    // http://en.wikipedia.org/wiki/Circle_packing_in_a_circle
    var radius = size / 2 / (1 + 2/3 * Math.sqrt(3));

    var center1_x = x + (size - 2*radius) / 2 + radius;
    var center1_y = y + radius;

    context.beginPath();
    context.arc(center1_x, center1_y, radius, 0, 2*Math.PI, false);
    context.stroke();

    var center2_x = center1_x + 2*radius*Math.sin(Math.PI/6);
    var center2_y = center1_y + 2*radius*Math.cos(Math.PI/6);

    context.beginPath();
    context.arc(center2_x, center2_y, radius, 0, 2*Math.PI, false);
    context.stroke();

    var center3_x = center1_x - 2*radius*Math.sin(Math.PI/6);
    var center3_y = center2_y;


    context.beginPath();
    context.arc(center3_x, center3_y, radius, 0, 2*Math.PI, false);
    context.stroke();

    if (size < 15) {
        return [];
    }
    return [
        {x: center1_x - radius, y: center1_y - radius, size: 2*radius, level: level + 1, func: circle_rec},
        {x: center2_x - radius, y: center2_y - radius, size: 2*radius, level: level + 1, func: circle_rec},
        {x: center3_x - radius, y: center3_y - radius, size: 2*radius, level: level + 1, func: circle_rec},
    ];
}

function circle_base(context, size) {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;

    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, 2*Math.PI, false);
    context.stroke();

    return [{x: 0, y: 0, size: size, level: 0, func: circle_rec}];
}
