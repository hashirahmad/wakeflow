class MockService {
    constructor() {
        this.MockData = Array.from(JSON.parse(localStorage.MockService || '[]'))
    }

    post(data) {
        this.MockData.push(data)
        localStorage.MockData = JSON.stringify(this.MockData)
    }

    list() {
        return this.MockData
    }
}

export default new MockService()