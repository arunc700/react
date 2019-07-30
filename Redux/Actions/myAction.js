export const Increment = () => {
    return {
        type: "INCREMENT"
    };
};

export const Decrement = () => {
    return {
        type: "DECREMENT"
    };
};

export const Login = (_meg) => {
    return {
        type: "SIGN_IN",
        msg: _meg
    };
};