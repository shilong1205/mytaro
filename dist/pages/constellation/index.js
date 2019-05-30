"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["constellation"], _this.config = {
      navigationBarTitleText: '星座运势'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        constellation: [{
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_03.png',
          name: '白羊座',
          date: '3.21-4.19',
          id: 0
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_04.png',
          name: '金牛座',
          date: '4.20-5.20',
          id: 1
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_06.png',
          name: '双子座',
          date: '5.21-6.21',
          id: 2
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_08.png',
          name: '巨蟹座',
          date: '6.22-7.22',
          id: 3
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_10.png',
          name: '狮子座',
          date: '7.23-8.22',
          id: 4
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_12.png',
          name: '处女座',
          date: '8.23-9.22',
          id: 5
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_14.png',
          name: '天枰座',
          date: '9.23-10.23',
          id: 6
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_16.png',
          name: '天蝎座',
          date: '10.24-11.22',
          id: 7
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_18.png',
          name: '射手座',
          date: '11.23-12.21',
          id: 8
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_20.png',
          name: '魔蝎座',
          date: '12.22-1.19',
          id: 9
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_22.png',
          name: '水瓶座',
          date: '1.20-2.18',
          id: 10
        }, {
          img: 'http://www.xingzuoyunshi.cn/themes/simpleboot3/public/img/sx_24.png',
          name: '双鱼座',
          date: '2.19-3.20',
          id: 11
        }]
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }, {
    key: "clickItem",
    value: function clickItem(item) {
      console.log(123);
      wx.navigateTo({
        url: '/pages/constellationDetail/index?item=' + JSON.stringify(item)
      });
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["clickItem"], _class.$$componentPath = "pages/constellation/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));