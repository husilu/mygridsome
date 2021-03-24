# 简答题1
不是响应式数据。

因为Vue在初始化实例的时候将传入的data里面的属性进行了getter和setter处理，所以数据必须要在data对象上才会有响应式处理。

需要使用$set来实现响应式。

```
this.$set(this.dog, "name", "Trump");
```