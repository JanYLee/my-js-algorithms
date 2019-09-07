## 安装

  ```bash
  npm install 
  # or
  yarn install
  ```

## 创建js文件

  ```js
  // code目录
  function sum(a, b) {
    return a + b;
  }
  export default sum;
  ```

  ```js
  // test目录
  import sum from './index'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

## 启动测试

  ```bash
  npm test
  ```