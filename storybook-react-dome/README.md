### 安装 storybook `npx storybook init`

### 学习例子 Button component

**如何规范组件传入的属性**
使用 prop-types 库，属性验证，后期可以使用 TS 进行约束和验证
#### prop-types 库的使用
```js
    import React from 'react';
    import PropTypes from 'prop-types';

    class MyComponent extends React.Component {
    render() {
        // ... do things with the props
    }
    }
    MyComponent.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    // js 八种数据类型
    optionalArray: PropTypes.array,
    optionalBigInt: PropTypes.bigint,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    // see https://reactjs.org/docs/rendering-elements.html for more info
    optionalNode: PropTypes.node,

    // A React element (ie. <MyComponent />).
    optionalElement: PropTypes.element,

    // A React element type (eg. MyComponent).
    // a function, string, or "element-like" object (eg. React.Fragment, Suspense, etc.)
    // see https://github.com/facebook/react/blob/HEAD/packages/shared/isValidElementType.js
    optionalElementType: PropTypes.elementType,

    // You can also declare that a prop is an instance of a class. This uses
    // JS's instanceof operator.
    optionalMessage: PropTypes.instanceOf(Message),

    // You can ensure that your prop is limited to specific values by treating
    // it as an enum.
    // 枚举类型
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // An object that could be one of many types
    // 可选类型
    optionalUnion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message)
    ]),

    // An array of a certain type
    // 数值型数组
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // An object with property values of a certain type
    // 数值型对象
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // You can chain any of the above with `isRequired` to make sure a warning
    // is shown if the prop isn't provided.

    // An object taking on a particular shape
    // 可选属性和必填属性对象
    optionalObjectWithShape: PropTypes.shape({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired
    }),

    // An object with warnings on extra properties
    optionalObjectWithStrictShape: PropTypes.exact({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired
    }),

    // 必填函数
    requiredFunc: PropTypes.func.isRequired,

    // A value of any data type
    // 必填任意数据类型
    requiredAny: PropTypes.any.isRequired,

    // You can also specify a custom validator. It should return an Error
    // object if the validation fails. Don't `console.warn` or throw, as this
    // won't work inside `oneOfType`.
    // 自定义验证器
    customProp: function(props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
        );
        }
    },

    // You can also supply a custom validator to `arrayOf` and `objectOf`.
    // It should return an Error object if the validation fails. The validator
    // will be called for each key in the array or object. The first two
    // arguments of the validator are the array or object itself, and the
    // current item's key.
    customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        if (!/matchme/.test(propValue[key])) {
        return new Error(
            'Invalid prop `' + propFullName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
        );
        }
    })
    };
```

