const config: any = {
    development: {
        redisHost: '127.0.0.1',
        redisPubPort: 17771,
        redisSubPort: 17772,
        serverPort: 7770,
        socketPort: 7771,
        security: {
            certLocation: '/etc/letsencrypt/live/rili.live/fullchain.pem',
            keyLocation: '/etc/letsencrypt/live/rili.live/privkey.pem',
        },
    },
    production: {
        redisHost: '127.0.0.1',
        redisPubPort: 17771,
        redisSubPort: 17772,
        serverPort: 7770,
        socketPort: 7743,
        security: {
            certLocation: '/etc/letsencrypt/live/rili.live/fullchain.pem',
            keyLocation: '/etc/letsencrypt/live/rili.live/privkey.pem',
        },
    },
    socket: {
        pingInterval: 1000 * 10,
        pingTimeout: 1000 * 5,
        userSocketSessionExpire: 1000 * 60 * 60,
    },
};

export default config;
