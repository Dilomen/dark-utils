# isArray

判断是否数组

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isArray } from 'serein-utils';
isArray(obj);
```

## 例子

```js
const a = 1;
const result = isArray(a); // false
```

```js
const arr = [1, 2, 3];
const result = isArray(arr); // true
```
