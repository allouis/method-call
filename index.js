const _ = new Proxy({}, {
    get: function get(_, method){
        return function f(object){
            return object[method]();
        };
    }
});

const __ = new Proxy({}, {
    get: function get(_, method){
        return function f(object, ...args){
            return object[method].apply(object, args);
        };
    }
});

export default _
export __
