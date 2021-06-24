import MockAdapter from "axios-mock-adapter";

export const startMock = (axios) => {

    const mock = new MockAdapter(axios, {
        delayResponse: 500,
        onNoMatch: 'passthrough'
    });

    mock.onPost("/add").reply(
        function (config) {
            return [
                200,
                "Saved"
            ]
    });
};