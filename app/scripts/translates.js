angular.module('geomeditApp')
  .config(['$translateProvider', function($translateProvider) {
    'use strict';
    var lang = navigator ? (navigator.language || navigator.userLanguage) : null;

    $translateProvider
      .translations('en', {
        'Languages':   'UI language',
        'ShowTooltip': 'Show tooltip',
        'SnapOptions': 'Snapping options',
        'SnapPoint':   'Snap to point',
        'SnapMid':     'Snap to new midpoint',
        'SnapCross':   'Snap to new intersection',
        'SnapGlider':  'Snap to edge',
        'ProjectMode': 'Large screen projection',

        'Loading':          'Loading...',
        'Cmd_':             'Select',
        'CmdPoint':         'Point',
        'CmdMidpoint':      'Midpoint',
        'CmdIntersection':  'Intersection',
        'CmdGlider':        'Glider point',
        'CmdPerpPoint':     'Perpendicular point',
        'CmdReflection':    'Reflected point',
        'CmdInCenter':      'Inscribed center',
        'CmdSegment':       'Segment',
        'CmdRay':           'Half-line',
        'CmdLine':          'Infinite line',
        'CmdParallel':      'Parallel line',
        'CmdPerpSegment':   'Perpendicular segment',
        'CmdPerpLine':      'Perpendicular line',
        'CmdBisector':      'Angle bisector',
        'CmdTriangle':      'Triangle',
        'CmdQuadrangle':    'Quadrangle',
        'CmdPolygon':       'Polygon',
        'CmdParallelogram': 'Parallelogram',
        'CmdCircle2p':      'Circle with center',
        'CmdCircle3p':      'Circle through 3 points',
        'CmdInCircle':      'Inscribed circle',

        'TipPoint':           'Click or drag to a position',
        'TipMidpoint':        'Click or drag around a segment',
        'TipIntersection':    'Click or drag around two shapes',
        'TipGlider':          'Click or drag on a shape',
        'TipClkDragFromPt':   'Click or drag from a position',
        'TipClkDragToPtLn':   'Click or drag to a line or point',
        'TipDragToPtLn':      'Drag to a line or point',
        'TipClkDragStart':    'Click or drag from the start position',
        'TipDragToEnd':       'Drag to the end position',
        'TipClkDragToEnd':    'Click or drag to the end position',
        'TipClkDragLine':     'Click or drag from a line',
        'TipDragToLine':      'Drag to a line',
        'TipClkDragToLine':   'Click or drag to a line',
        'Tip3triangle':       'Click or drag from a position, or click a triangle',
        'TipDragToP2':        'Drag to the second position',
        'TipClkDragToP2':     'Click or drag to the second position',
        'TipDragToP3':        'Drag to the third position',
        'TipClkDragToP3':     'Click or drag to the third position',
        'TipDragToPn':        'Drag to the next position',
        'TipClkDragToPn':     'Drag to the next, cancel tool to complete',
        'TipCircle2p':        'Click or drag from the center',
        'TipDragToRadius':    'Drag to a position on circle',
        'TipClkDragToRadius': 'Click or drag to a position on circle',

        'SelectShape':       'Please select a shape.',
        'SelectOption':      'Select',
        'FaceCircle':        'Circle',
        'FaceCross':         'Cross',
        'FacePlus':          'Plus',
        'FaceDiamond':       'Diamond',
        'FaceSquare':        'Square',
        'FaceUpTriangle':    'Up triangle',
        'FaceDownTriangle':  'Down triangle',
        'FaceLeftTriangle':  'Left triangle',
        'FaceRightTriangle': 'Right triangle',
        'PosLeft':           'Left',
        'PosRight':          'Right',
        'PosCenter':         'Center',
        'SolidLine':         'Solid line',
        'DottedLine':        'Dotted line',
        'SmallDashes':       'Small dashes',
        'MediumDashes':      'Medium dashes',
        'BigDashes':         'Big dashes',
        'LargeGaps':         'Large gaps -.-',
        'SmallGaps':         'Small gaps -.-',

        'PropLabel':          'Label',
        'PropText':           'Text',
        'PropFontSize':       'Text size',
        'PropTextColor':      'Text color',
        'PropFixed':          'Fixed',
        'PropTrace':          'Trace',
        'PropRange':          'Range',
        'PropSnapWidth':      'Snap width',
        'PropFace':           'Face',
        'PropSize':           'Size',
        'PropPosition':       'Position',
        'PropOffset':         'Offset',
        'PropDash':           'Dash',
        'PropStrokeWidth':    'Stroke width',
        'PropStrokeColor':    'Stroke color',
        'PropStrokeOpacity':  'Stroke opacity',
        'PropFillColor':      'Fill color',
        'PropFillOpacity':    'Fill opacity',
        'PropColor':          'Color',
        'PropOpacity':        'Opacity',
        'PropHideColor':      'Hide color bar',
        'PropExpandColor':    'Show color bar',
        'PropInnerPoints':    'Drag inner area',
        'PropCoords':         'Coords',
        'PropSnapToGrid':     'Snap to a grid',
        'PropSnapToPoints':   'Snap to the nearest point',
        'PropZoomSize':       'Changes on zoom events',
        'PropLineEndings':    'Line endings',
        'PropRadius':         'Radius',
        'PropCenterVisible':  'Show center',
        'PropFunctionTerm':   'Function term',
        'PropBoard':          'Drawing area',
        'PropDraggable':      'Can drag objects',
        'PropIgnoreLabels':   'Can drag labels',
        'PropGrid':           'Grid',
        'PropGridCell':       'Grid cell',
        'PropGridLT':         'Left top',
        'PropGridRB':         'Right bottom',
        'PropAxis':           'Axis',
        'PropOrigin':         'Origin',
        'PropUnits':          'Units',
        'PropDrawLabels':     'Draw labels',
        'PropDrawZero':       'Zero tick',
        'PropInsertTicks':    'Auto insert ticks',
        'PropScaleSymbol':    'Unit of labels',
        'PropTicksDistance':  'Ticks distance',
        'PropTicksDistances': 'Ticks dist',
        'PropMajorHeight':    'Infinite tick line',
        'PropMinorTicks':     'Minor ticks count',

        'ShowSidebar':    'Show sidebar',
        'HideSidebar':    'Hide sidebar',
        'CancelCmd':      'Cancel the current tool',
        'Toolbox':        'Toolbox view',
        'Properties':     'Properties view',
        'ZoomIn':         'Zoom In',
        'ZoomOut':        'Zoom Out',
        'ZoomDefault':    'Default Zoom',
        'ShowNavigators': 'Show the navigation bar',
        'HideNavigators': 'Hide the navigation bar',
        'PanUp':          'Pan Up',
        'PanDown':        'Pan Down',
        'PanLeft':        'Pan Left',
        'PanRight':       'Pan Right',
        'ShowAllObjects': 'List all objects',
        'HideObject':     'Hide object',
        'ShowObject':     'Show object',
        'HideLabel':      'Hide label',
        'ShowLabel':      'Show label',
        'ArrowLast':      'Arrow head at the second point',
        'ArrowFirst':     'Arrow head at the first point',
        'RestrictLast':   'Stop at the second point',
        'RestrictFirst':  'Stop at the first point',
        'RecreateBoard':  'Reset',
        'Undo':           'Undo',
        'Redo':           'Redo',
        'Options':        'Options'
      })
      .translations('cn', {
        'Languages':   '界面语言',
        'ShowTooltip': '显示工具提示',
        'SnapOptions': '捕捉选项',
        'SnapPoint':   '允许捕捉点',
        'SnapMid':     '捕捉新的中点',
        'SnapCross':   '捕捉新的交点',
        'SnapGlider':  '允许捕捉线上点',
        'ProjectMode': '大屏投影模式',

        'Loading':          '正在加载...',
        'Cmd_':             '选择',
        'Point':            '点',
        'CmdPoint':         '点',
        'CmdMidpoint':      '中点',
        'CmdIntersection':  '交点',
        'CmdGlider':        '线上点',
        'CmdPerpPoint':     '垂足',
        'CmdReflection':    '对称点',
        'CmdInCenter':      '三点内心',
        'Line':             '直线',
        'CmdSegment':       '线段',
        'CmdRay':           '射线',
        'CmdLine':          '直线',
        'CmdParallel':      '平行线',
        'CmdPerpSegment':   '垂线段',
        'CmdPerpLine':      '垂线',
        'CmdBisector':      '角平分线',
        'Polygon':          '多边形',
        'CmdTriangle':      '三角形',
        'CmdQuadrangle':    '四边形',
        'CmdPolygon':       '多边形',
        'CmdParallelogram': '平行四边形',
        'Circle':           '圆',
        'CmdCircle2p':      '圆心圆',
        'CmdCircle3p':      '过三点画圆',
        'CmdInCircle':      '三点内切圆',

        'TipPoint':           '点击或拖动到一个位置',
        'TipMidpoint':        '在线段附近点击或拖动',
        'TipIntersection':    '在两个图形相交附近点击或拖动',
        'TipGlider':          '在一个图形上点击或拖动',
        'TipClkDragFromPt':   '点击或从一个位置拖动',
        'TipClkDragToPtLn':   '点击或拖动到一个直线或点',
        'TipDragToPtLn':      '拖动到一个直线或点',
        'TipClkDragStart':    '点击起始位置或从该点拖动',
        'TipDragToEnd':       '拖动到终点位置',
        'TipClkDragToEnd':    '点击终点位置或拖动到该点',
        'TipClkDragLine':     '点击一个直线或从该直线拖动',
        'TipDragToLine':      '拖动到一个直线',
        'TipClkDragToLine':   '点击一个直线或拖动到该直线',
        'Tip3triangle':       '点击或从一个位置拖动，或点击一个三角形',
        'TipDragToP2':        '拖动到第二个点的位置',
        'TipClkDragToP2':     '点击第二个点的位置或拖动到该点',
        'TipDragToP3':        '拖动到第三个点的位置',
        'TipClkDragToP3':     '点击第三个点的位置或拖动到该点',
        'TipDragToPn':        '拖动到下一个顶点的位置',
        'TipClkDragToPn':     '点击或拖动到下一点，取消工具可完成操作',
        'TipCircle2p':        '点击圆心位置或从该点拖动',
        'TipDragToRadius':    '拖动到一点确定半径',
        'TipClkDragToRadius': '点击或拖动到圆周上的位置',

        'SelectShape':       '请选择一个图形',
        'SelectOption':      '选择',
        'FaceCircle':        '圆点',
        'FaceCross':         '叉号',
        'FacePlus':          '加号',
        'FaceDiamond':       '菱形',
        'FaceSquare':        '方形',
        'FaceUpTriangle':    '上三角形',
        'FaceDownTriangle':  '下三角形',
        'FaceLeftTriangle':  '左三角形',
        'FaceRightTriangle': '右三角形',
        'PosLeft':           '左侧',
        'PosRight':          '右侧',
        'PosCenter':         '中间',
        'SolidLine':         '实线',
        'DottedLine':        '点线',
        'SmallDashes':       '短虚线',
        'MediumDashes':      '中虚线',
        'BigDashes':         '长虚线',
        'LargeGaps':         '大间距点划线',
        'SmallGaps':         '小间距点划线',

        'PropLabel':          '标签',
        'PropText':           '文字',
        'PropFontSize':       '文字大小',
        'PropTextColor':      '文字颜色',
        'PropFixed':          '固定',
        'PropTrace':          '跟踪位置',
        'PropRange':          '变化范围',
        'PropSnapWidth':      '捕捉宽度',
        'PropFace':           '外观',
        'PropSize':           '大小',
        'PropPosition':       '位置',
        'PropOffset':         '偏移',
        'PropDash':           '虚线',
        'PropStrokeWidth':    '线宽',
        'PropStrokeColor':    '线条颜色',
        'PropStrokeOpacity':  '线条不透明度',
        'PropFillColor':      '填充颜色',
        'PropFillOpacity':    '填充不透明度',
        'PropColor':          '颜色',
        'PropOpacity':        '不透明度',
        'PropHideColor':      '收起颜色条',
        'PropExpandColor':    '展开颜色条',
        'PropCoords':         '坐标',
        'PropSnapToGrid':     '捕捉到网格点',
        'PropSnapToPoints':   '捕捉到附近点',
        'PropZoomSize':       '放缩时大小自适应',
        'PropLineEndings':    '线端类型',
        'PropInnerPoints':    '可拖动内部区域',
        'PropRadius':         '半径',
        'PropCenterVisible':  '显示圆心',
        'PropFunctionTerm':   '函数式',
        'PropBoard':          '绘图区',
        'PropDraggable':      '允许拖动图形',
        'PropIgnoreLabels':   '允许拖动标签',
        'PropGrid':           '网格',
        'PropGridCell':       '网格尺寸',
        'PropGridLT':         '左上角',
        'PropGridRB':         '右下角',
        'PropAxis':           '坐标轴',
        'PropOrigin':         '原点',
        'PropUnits':          '单位',
        'PropDrawLabels':     '显示刻度文字',
        'PropDrawZero':       '显示零刻度',
        'PropInsertTicks':    '自动插入刻度',
        'PropScaleSymbol':    '刻度单位',
        'PropTicksDistance':  '刻度线距离',
        'PropTicksDistances': '刻度线距离',
        'PropMajorHeight':    '主刻度线延长',
        'PropMinorTicks':     '小刻度数',

        'ShowSidebar':    '展开操作面板',
        'HideSidebar':    '收起操作面板',
        'CancelCmd':      '取消当前工具',
        'Toolbox':        '工具',
        'Properties':     '属性',
        'ZoomIn':         '放大',
        'ZoomOut':        '缩小',
        'ZoomDefault':    '默认比例',
        'ShowNavigators': '显示导航条',
        'HideNavigators': '隐藏导航条',
        'PanUp':          '向上平移',
        'PanDown':        '向下平移',
        'PanLeft':        '向左平移',
        'PanRight':       '向右平移',
        'ShowAllObjects': '列出所有图形',
        'HideObject':     '隐藏本图形',
        'ShowObject':     '显示本图形',
        'HideLabel':      '隐藏标签',
        'ShowLabel':      '显示标签',
        'ArrowLast':      '终点有箭头',
        'ArrowFirst':     '起点有箭头',
        'RestrictLast':   '终点不延长',
        'RestrictFirst':  '起点不延长',
        'RecreateBoard':  '重置',
        'Undo':           '撤销',
        'Redo':           '重做',
        'Options':        '选项'
      })
      .preferredLanguage(lang && lang.toLowerCase().indexOf('cn') >= 0 ? 'cn' : 'en')
      .useSanitizeValueStrategy(null);
  }]);