function fn() {

    karate.configure('ssl', { trustAll: true });

    var config = {
        baseUrl : 'https://reqres.in/'
    };
    karate.configure('ssl', { trustAll: true });

    return config;
}