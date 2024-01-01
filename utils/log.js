export function log(...value) {
    const node_env = process.env.NODE_ENV;
    console.log(node_env)

    if (node_env === "development") {
        console.log(...value);
    }
}
