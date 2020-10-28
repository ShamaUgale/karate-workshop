function fn() {

    karate.configure('ssl', { trustAll: true });

    var config = {
        baseUrl : 'https://reqres.in/'
    };

    return config;
}