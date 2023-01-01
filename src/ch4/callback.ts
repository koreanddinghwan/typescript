const fnc = (cb: () => void): void => cb();

type voidFnc = () => void;

const typedFnc = (cb: voidFnc): void => cb();

export const init = (cb: voidFnc): void => {};
