const inquirer = require('inquirer');

const promptList = [
  // 具体交互内容
  {
    type: 'input',
    message: '输入用户名:',
    name: 'name',
    default: "test_user" // 默认值
  },
  {
    type: "confirm",
    message: "是否使用监听？",
    name: "watch",
    prefix: "前缀"
  },
  {
    type: 'list',
    message: '请选择一种水果:',
    name: 'fruit',
    choices: [
      "Apple",
      "Pear",
      "Banana"
    ],
    filter: function (val) { // 使用filter将回答变为小写
      return val.toLowerCase();
    }
  }, {
    type: "checkbox",
    message: "选择颜色:",
    name: "color",
    choices: [
      "red",
      "blue",
      "green",
      "yellow"
    ],
    pageSize: 4 // 设置行数
  }, {
    type: "password", // 密码为密文输入
    message: "请输入密码：",
    name: "pwd"
  }
];

inquirer.prompt(promptList).then(answers => {
  console.log(answers); // 返回的结果
})