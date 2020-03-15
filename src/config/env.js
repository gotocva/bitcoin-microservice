

const env = { 

    DEBUG:true,
    SITE_NAME:'Dcon',
    HOST:'localhost',
    PORT:8008,
    SECRET:'SPARKOUT',
    SMTP_EMAIL:'phpteamtesting@gmail.com',
    SMTP_PASSWORD:'mxwswchonjbabmne',

    MONGODB : {
        host : "172.18.0.2",
        port : "27017",
        db : "Dcon"
    },

    REDIS:{
        host : "127.0.0.1",
        port : "6379",
        password : "padma",
        db : "4"
    },

    KAFKA : {
        kafka_topic: 'example',
        kafka_server: 'localhost:2181',
        client_settings : {
            autoCommit: true,
            fetchMaxWaitMs: 1000,
            fetchMaxBytes: 1024 * 1024,
            encoding: 'utf8',
            fromOffset: false
        }
    }
}

module.exports = env;