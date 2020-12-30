function addTopLayer(chart) {
  let ctx = chart.chart.ctx;
  let topConfig = chart.config.options.elements.top;
  let fontStyle = topConfig.fontStyle || 'Arial';
  let txt = topConfig.text;
  let color = topConfig.color || '#000';
  let maxFontSize = topConfig.maxFontSize || 16;
  let sidePadding = topConfig.sidePadding || 5;
  let sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
  // Start with a base font of 30px
  ctx.font = '16px ' + fontStyle;

  // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
  let stringWidth = ctx.measureText(txt).width;
  let elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

  // Find out how much the font can grow in width.
  let widthRatio = elementWidth / stringWidth;
  let newFontSize = Math.floor(30 * widthRatio);
  let elementHeight = (chart.innerRadius * 2);

  // Pick a new font size so it will not be larger than the height of label.
  let fontSizeToUse = '20px'; //Math.min(newFontSize, elementHeight, maxFontSize);
  let minFontSize = topConfig.minFontSize;
  let lineHeight = topConfig.lineHeight || 5;
  let wrapText = false;

  if (minFontSize === undefined) {
    minFontSize = 16;
  }

  if (minFontSize && fontSizeToUse < minFontSize) {
    fontSizeToUse = minFontSize;
    wrapText = true;
  }

  // Set font settings to draw it correctly.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
  let centerY = ((chart.chartArea.top + chart.chartArea.bottom) * 0.35);
  ctx.font = '20px ' + fontStyle;
  ctx.fillStyle = color;

  if (!wrapText) {
    ctx.fillText(txt, centerX, centerY);
    return;
  }

  let words = txt.split(' ');
  let line = '';
  let lines = [];

  // Break words up into multiple lines if necessary
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > elementWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }

  // Move the center up depending on line height and number of lines
  centerY -= (lines.length / 2) * lineHeight;

  for (let n = 0; n < lines.length; n++) {
    ctx.fillText(lines[n], centerX, centerY);
    centerY += lineHeight;
  }
  //Draw text in center
  ctx.fillText(line, centerX, centerY);
}

function addCenterLayer(chart) {
  // Get ctx from string
  let ctx = chart.chart.ctx;
  // Get options from the center object in options
  let centerConfig = chart.config.options.elements.center;
  let fontStyle = centerConfig.fontStyle || 'Arial';
  let txt = centerConfig.text;
  let color = centerConfig.color || '#000';
  let maxFontSize = centerConfig.maxFontSize || 16;
  let sidePadding = centerConfig.sidePadding || 5;
  let sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
  // Start with a base font of 30px
  ctx.font = '25px ' + fontStyle;

  // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
  let stringWidth = ctx.measureText(txt).width;
  let elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

  // Find out how much the font can grow in width.
  let widthRatio = elementWidth / stringWidth;
  let newFontSize = Math.floor(30 * widthRatio);
  let elementHeight = (chart.innerRadius * 2);

  // Pick a new font size so it will not be larger than the height of label.
  let fontSizeToUse = '40px';
  let minFontSize = centerConfig.minFontSize;
  let lineHeight = centerConfig.lineHeight || 25;
  let wrapText = false;

  if (minFontSize === undefined) {
    minFontSize = 16;
  }

  if (minFontSize && fontSizeToUse < minFontSize) {
    fontSizeToUse = minFontSize;
    wrapText = true;
  }

  // Set font settings to draw it correctly.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
  let centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
  ctx.font = '40px ' + fontStyle;
  ctx.fillStyle = color;

  if (!wrapText) {
    ctx.fillText(txt, centerX, centerY);
    return;
  }

  let words = txt.split(' ');
  let line = '';
  let lines = [];

  // Break words up into multiple lines if necessary
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > elementWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }

  // Move the center up depending on line height and number of lines
  centerY -= (lines.length / 2) * lineHeight;

  for (let n = 0; n < lines.length; n++) {
    ctx.fillText(lines[n], centerX, centerY);
    centerY += lineHeight;
  }
  //Draw text in center
  ctx.fillText(line, centerX, centerY);
}

function addBottomLayer(chart) {
  let ctx = chart.chart.ctx;
  // Get options from the center object in options
  let bottomConfig = chart.config.options.elements.bottom;
  let fontStyle = bottomConfig.fontStyle || 'Arial';
  let txt = bottomConfig.text;
  let color = bottomConfig.color || '#000';
  let maxFontSize = bottomConfig.maxFontSize || 16;
  let sidePadding = bottomConfig.sidePadding || 5;
  let sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
  // Start with a base font of 30px
  ctx.font = '16px ' + fontStyle;

  // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
  let stringWidth = ctx.measureText(txt).width;
  let elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

  // Find out how much the font can grow in width.
  let widthRatio = elementWidth / stringWidth;
  let newFontSize = Math.floor(30 * widthRatio);
  let elementHeight = (chart.innerRadius * 2);

  // Pick a new font size so it will not be larger than the height of label.
  let fontSizeToUse = '20px'; //Math.min(newFontSize, elementHeight, maxFontSize);
  let minFontSize = bottomConfig.minFontSize;
  let lineHeight = bottomConfig.lineHeight || 25;
  let wrapText = false;

  if (minFontSize === undefined) {
    minFontSize = 16;
  }

  if (minFontSize && fontSizeToUse < minFontSize) {
    fontSizeToUse = minFontSize;
    wrapText = true;
  }

  // Set font settings to draw it correctly.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
  let centerY = ((chart.chartArea.top + chart.chartArea.bottom) * 0.65);
  ctx.font = '20px ' + fontStyle;
  ctx.fillStyle = color;

  if (!wrapText) {
    ctx.fillText(txt, centerX, centerY);
    return;
  }

  let words = txt.split(' ');
  let line = '';
  let lines = [];

  // Break words up into multiple lines if necessary
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > elementWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }

  // Move the center up depending on line height and number of lines
  centerY -= (lines.length / 2) * lineHeight;

  for (let n = 0; n < lines.length; n++) {
    ctx.fillText(lines[n], centerX, centerY);
    centerY += lineHeight;
  }
  //Draw text in center
  ctx.fillText(line, centerX, centerY);
}

function addBottomDownLayer(chart) {
  let ctx = chart.chart.ctx;
  // Get options from the center object in options
  let bottomDownConfig = chart.config.options.elements.bottomDown;
  let fontStyle = bottomDownConfig.fontStyle || 'Arial';
  let txt = bottomDownConfig.text;
  let color = bottomDownConfig.color || '#000';
  let maxFontSize = bottomDownConfig.maxFontSize || 16;
  let sidePadding = bottomDownConfig.sidePadding || 5;
  let sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
  // Start with a base font of 30px
  ctx.font = '30px ' + fontStyle;

  // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
  let stringWidth = ctx.measureText(txt).width;
  let elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

  // Find out how much the font can grow in width.
  let widthRatio = elementWidth / stringWidth;
  let newFontSize = Math.floor(30 * widthRatio);
  let elementHeight = (chart.innerRadius * 2);

  // Pick a new font size so it will not be larger than the height of label.
  let fontSizeToUse = '20px'; //Math.min(newFontSize, elementHeight, maxFontSize);
  let minFontSize = bottomDownConfig.minFontSize;
  let lineHeight = bottomDownConfig.lineHeight || 25;
  let wrapText = false;

  if (minFontSize === undefined) {
    minFontSize = 16;
  }

  if (minFontSize && fontSizeToUse < minFontSize) {
    fontSizeToUse = minFontSize;
    wrapText = true;
  }

  // Set font settings to draw it correctly.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  let centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
  let centerY = ((chart.chartArea.top + chart.chartArea.bottom) * 0.70);
  ctx.font = '20px ' + fontStyle;
  ctx.fillStyle = color;

  if (!wrapText) {
    ctx.fillText(txt, centerX, centerY);
    return;
  }

  let words = txt.split(' ');
  let line = '';
  let lines = [];

  // Break words up into multiple lines if necessary
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > elementWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }

  // Move the center up depending on line height and number of lines
  centerY -= (lines.length / 2) * lineHeight;

  for (let n = 0; n < lines.length; n++) {
    ctx.fillText(lines[n], centerX, centerY);
    centerY += lineHeight;
  }
  //Draw text in center
  ctx.fillText(line, centerX, centerY);
}

Chart.pluginService.register({
  beforeDraw: function (chart) {

    if (chart.config.options.elements.top) {
      addTopLayer(chart)
    }

    if (chart.config.options.elements.center) {
      addCenterLayer(chart)
    }

    if (chart.config.options.elements.bottom) {
      addBottomLayer(chart)
    }

    if (chart.config.options.elements.bottomDown) {
      addBottomDownLayer(chart)
    }
  }
});
