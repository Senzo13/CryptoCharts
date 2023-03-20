
const makeUri = (node_env: string, host: string) : string => {
    if (node_env === "test") {
        return `mongodb://${host}/?retryWrites=true&w=majority`;
    }
    return `mongodb+srv://${host}/?retryWrites=true&w=majority`;
}

export default makeUri;