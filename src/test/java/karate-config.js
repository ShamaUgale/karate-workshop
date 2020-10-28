function fn() {

    var config = {
        baseUrl : 'https://reqres.in/'
    };
    karate.configure('ssl', { trustAll: true });

    return config;
}