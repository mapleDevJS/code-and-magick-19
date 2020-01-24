'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var HEADER_GAP = 25;
var HEADER_HEIGHT = 20;
var LEGEND_GAP = 30;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
var FONT_FAMILY = '16px PT Mono';
var TEXT_COLOR = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomLightness() {
  return Math.round(Math.random() * 100);
}

var renderHeader = function (ctx, font, color) {
  ctx.font = font;
  ctx. fillStyle = color;
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + HEADER_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + HEADER_GAP + HEADER_HEIGHT);
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  renderHeader(ctx, FONT_FAMILY, TEXT_COLOR);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barColor = 'hsl(240, 100%, ' + getRandomLightness() + '%)';
    if (names[i] === 'Вы') {
      barColor = YOUR_COLOR;
    }

    ctx.fillStyle = barColor;
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - LEGEND_GAP, BAR_WIDTH, -barHeight);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    var time = Math.round(times[i]);
    ctx.fillText(time, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - LEGEND_GAP - barHeight - GAP);
  }
};
