module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 7545, // Standard Ethereum port (default: none)
            network_id: "5777" // Any network (default: none)
        },
        matic: {
            url: "https://rpc-mainnet.matic.network",
            port: 7545, // Standard Ethereum port (default: none)
            network_id: "137" // Any network (default: none)
        }
    },
    compilers: {
        solc: {
            version: "0.8.3"
        }
    }
};
