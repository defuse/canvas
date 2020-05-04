function scratch_rec(context, x, y, size, level) {
    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(0.5 + x, 0.5 + y + size/2);
    context.lineTo(0.5 + x + size, 0.5 + y + size/2);
    context.stroke();

    context.beginPath();
    context.moveTo(0.5 + x + size/2, 0.5 + y + size/2);
    context.lineTo(0.5 + x + size/2, 0.5 + y + size);
    context.stroke();

    if (size > 200) {
        context.fillStyle = "#FFFFFF";
        context.font = 'italic bold 20px sans-serif';
        context.Baseline = 'bottom';
        context.fillText('1/' + Math.pow(2, 2*level+1), 0.5 + x + size/2, 0.5 + y + size/4);
        context.fillText('1/' + Math.pow(2, 2*level+2), 0.5 + x + size/4, 0.5 + y + size*3/4);
    }

    if (size < 5) {
        return [];
    }

    return [
        {x: x + size/2, y: y + size/2, size: size / 2, level: level + 1, func: scratch_rec},
    ];
}

function scratch_base(context, size) {
    return [{x: 0, y: 0, size: size, level: 0, func: scratch_rec}];
}
