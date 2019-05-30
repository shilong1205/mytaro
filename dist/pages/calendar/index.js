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

var arrows = "/images/iconfonticonfonti2.png";

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["newDate", "arrows", "list", "year", "month", "date"], _this.config = {
      navigationBarTitleText: '万年历'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        year: '',
        month: '',
        date: '',
        newDate: '',
        list: {}
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var myDate = new Date();
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var date = myDate.getDate();
      this.setState({
        newDate: year + '-' + month + '-' + date,
        year: year,
        month: month,
        date: date
      });

      wx.request({
        url: 'http://v.juhe.cn/calendar/day?date=' + year + '-' + month + '-' + date + '&key=8ef69139e8b2d848fa0c6bb5ce1bdf01',
        success: function success(res) {
          _this2.setState({
            list: res.data.result.data
          });
          console.log(res.data.result.data);
        }
      });
    }
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

      var _state = this.__state,
          newDate = _state.newDate,
          year = _state.year,
          month = _state.month,
          date = _state.date;

      Object.assign(this.__state, {
        arrows: arrows
      });
      return this.__state;
    }
  }, {
    key: "DateChange",
    value: function DateChange(ev) {
      var _this3 = this;

      var year = ev.detail.value.split('-')[0];
      var month = ev.detail.value.split('-')[1] < 10 ? ev.detail.value.split('-')[1] * 1 : ev.detail.value.split('-')[1];
      var date = ev.detail.value.split('-')[2] < 10 ? ev.detail.value.split('-')[2] * 1 : ev.detail.value.split('-')[2];
      this.setState({
        newDate: year + '-' + month + '-' + date,
        year: year,
        month: month,
        date: date
      });

      wx.request({
        url: 'http://v.juhe.cn/calendar/day?date=' + year + '-' + month + '-' + date + '&key=8ef69139e8b2d848fa0c6bb5ce1bdf01',
        success: function success(res) {
          _this3.setState({
            list: res.data.result.data
          });
          console.log(res.data.result.data);
        }
      });
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["DateChange"], _class.$$componentPath = "pages/calendar/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));