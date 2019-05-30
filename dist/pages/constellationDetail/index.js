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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "i", "list", "items", "content"], _this.config = {
      navigationBarTitleText: '星座运势'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        items: {},
        list: [{
          title: '今天',
          date: 'today',
          id: 0
        }, {
          title: '明天',
          date: 'tomorrow',
          id: 0
        }, {
          title: '本周',
          date: 'week',
          id: 0
        }, {
          title: '本月',
          date: 'month',
          id: 0
        }, {
          title: '本年',
          date: 'year',
          id: 0
        }],
        i: 0,
        content: []
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

      var item = JSON.parse(this.$router.params.item);
      this.setState({
        items: item
      });
      wx.request({
        url: 'http://web.juhe.cn:8080/constellation/getAll?consName=' + item.name + '&type=today&key=6b56c1baaa1829617d2e1fa9bdf17c6a',
        success: function success(res) {
          _this2.setState({
            content: res.data
          });
          console.log(res.data);
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
          list = _state.list,
          i = _state.i,
          content = _state.content,
          items = _state.items;

      var anonymousState__temp = i === 0 ? 'background:#ff8362;width:' + parseInt(content.health) + '%' : null;
      var anonymousState__temp2 = i === 0 ? 'background:#C1f19a;width:' + parseInt(content.love) + '%' : null;
      var anonymousState__temp3 = i === 0 ? 'background:#f1e29a;width:' + parseInt(content.money) + '%' : null;
      var anonymousState__temp4 = i === 0 ? 'background:#bbf6ff;width:' + parseInt(content.work) + '%' : null;
      var anonymousState__temp5 = i === 0 ? 'background:#fecbff;width:' + parseInt(content.all) + '%' : null;
      var anonymousState__temp6 = i === 1 ? 'background:#ff8362;width:' + parseInt(content.health) + '%' : null;
      var anonymousState__temp7 = i === 1 ? 'background:#C1f19a;width:' + parseInt(content.love) + '%' : null;
      var anonymousState__temp8 = i === 1 ? 'background:#f1e29a;width:' + parseInt(content.money) + '%' : null;
      var anonymousState__temp9 = i === 1 ? 'background:#bbf6ff;width:' + parseInt(content.work) + '%' : null;
      var anonymousState__temp10 = i === 1 ? 'background:#fecbff;width:' + parseInt(content.all) + '%' : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp10: anonymousState__temp10
      });
      return this.__state;
    }
  }, {
    key: "clickDate",
    value: function clickDate(index, date) {
      var _this3 = this;

      this.setState({
        i: index
      });
      var items = this.state.items;

      wx.request({
        url: 'http://web.juhe.cn:8080/constellation/getAll?consName=' + items.name + '&type=' + date + '&key=6b56c1baaa1829617d2e1fa9bdf17c6a',
        success: function success(res) {
          _this3.setState({
            content: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["clickDate"], _class.$$componentPath = "pages/constellationDetail/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));